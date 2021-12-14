const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ignoreListRoutes = ['/404', '/_document', '/_app', '/api/', '/blog/[slug]'];
const ignoreListErrors = ['card-shadow-', 'is smaller than 40x40', 'bg-'];
const dynamicRoutes = {
  'nachhaltigkeit/[year]/': 'nachhaltigkeit/2019/',
  'nachhaltigkeit/[year]/scope-3': 'nachhaltigkeit/2019/scope-3',
};

const getAllRoutes = (dirPath = './src/pages', arrayOfFiles = []) => {
  files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllRoutes(dirPath + '/' + file, arrayOfFiles);
    } else {
      const filePath = path.join(dirPath, '/', file);
      if (ignoreListRoutes.every((ignore) => !filePath.includes(ignore))) {
        arrayOfFiles.push(path.join(dirPath, '/', file));
      }
    }
  });

  return arrayOfFiles.map((path) => path.replace('src/pages/', '').replace('index.tsx', '').replace('.tsx', ''));
};

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const routesToCheck = getAllRoutes();
  const errorsAndWarnings = {};
  let routeIndex = 0;

  page.on('console', (msg) => {
    // track errors & warnings but ignore SSR warning with randome card-shadown class
    if (
      (msg.type() === 'error' || msg.type() === 'warning') &&
      ignoreListErrors.every((ignore) => !msg.text().includes(ignore))
    ) {
      errorsAndWarnings[`/${routesToCheck[routeIndex]}`] = msg.text();
    }
  });

  try {
    while (routesToCheck[routeIndex] !== undefined) {
      try {
        if (dynamicRoutes[routesToCheck[routeIndex]]) {
          await page.goto(`http://localhost:3000/${dynamicRoutes[routesToCheck[routeIndex]]}`);
        } else {
          await page.goto(`http://localhost:3000/${routesToCheck[routeIndex]}`);
        }
      } catch (error) {
        if (error.name === 'TimeoutError') {
          // retry on navigation timeout
          routeIndex--;
        } else {
          throw error;
        }
      }
      routeIndex++;
    }
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }

  if (Object.keys(errorsAndWarnings).length > 0) {
    console.error(
      `Errors or warnings found in console on routes:\n${Object.keys(errorsAndWarnings).reduce(
        (prev, curr) => `${prev}\n${curr}: ${errorsAndWarnings[curr]}`,
        ''
      )}\n`
    );
    process.exitCode = 1;
  }
})();
