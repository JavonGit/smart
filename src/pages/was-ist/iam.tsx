import { Copy, TextLink, UnorderedList } from '@smartive/guetzli';
import React from 'react';
import { PageHeader } from '../../compositions/page-header';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';

const Iam = () => (
  <Page>
    <PageHeader
      markdownTitle="_IAM_: Benutzerverwaltung leicht gemacht."
      pageTitle="Was ist eigentlich ein IAM?"
      description="Wenn sich deine Benutzer bei deinem Produkt einloggen sollen brauchst du einen Login. Ein IAM kann dir viel Arbeit abnehmen."
    >
      <Copy>
        IAM steht für Identity and Access Management. Wenn sich deine Benutzer*innen bei deinem Produkt einloggen sollen,
        brauchst du einen Login. Wenn du einen Login hast, brauchst du eine Benutzerverwaltung mit{' '}
        <strong>Authentication</strong> und <strong>Authorisation</strong>. Früher haben das alle immer selber gebaut (wieder
        und wieder). Heute gibt es Plattformen, die das als Service anbieten.
      </Copy>
    </PageHeader>

    <main>
      <Section title="Das Rad nicht neu erfinden">
        <Copy>
          In der IT gilt oft die Daumenregel: Pick 2 of 3. Aber ein eingekauftes IAM schlägt drei Fliegen mit einer Klappe:
          Schneller, sicherer und günstiger. Win-win-win!
        </Copy>
        <UnorderedList
          items={[
            'Günstig gekauft statt teuer gebaut: eine eigene Benutzerverwaltung inklusive Login ist aufwändiger als man erst denkt.',
            'Muss gut gemacht sein: die heutigen Sicherheitsanforderungen werden oft unterschätzt. Das Internet ist für alle Menschen zugänglich.Da gibts leider auch welche, die dein Produkt nur zu gerne kaputt machen würden.',
            'Nicht nochmals stolpern, wo schon andere gestolpert sind: du profitierst direkt vom Knowledge der Spezialist*innen von deinem IAM-Hersteller.',
          ]}
        ></UnorderedList>
      </Section>

      <Section title="Die besten Räder auf der Strasse">
        <Copy>
          IAM-Plattformen bieten fertige Code-Libraries, deren Einbindung ein Kinderspiel ist. Etablierte Standards wie{' '}
          <TextLink href="https://openid.net/connect/" newTab>
            OpenID Connect
          </TextLink>{' '}
          garantieren dabei ein gemeinsames Verständnis für den Austausch von Benutzerinformationen.
        </Copy>
        <Copy>
          <TextLink href="https://www.zitadel.ch/" newTab>
            Zitadel:
          </TextLink>{' '}
          Die Plattform aus der Schweiz kannst du als SaaS aus der Cloud beziehen oder in deinem eigenen Rechenzentrum
          betreiben. Dank der Einhaltung anerkannter Standards sehr einfach anzubinden, bietet Zitadel viele Features.
        </Copy>
        <Copy>
          <TextLink href="https://auth0.com/" newTab>
            Auth0:
          </TextLink>{' '}
          Die wohl bekannteste internationale IAM-Plattform. Eine On-Premise Lösung gibts hier nicht. Die Plattform ist aber
          ebenfalls extrem einfach anzubinden und der Funktionsumfang riesig.
        </Copy>
        <Copy>
          <TextLink href="https://cloud.google.com/identity" newTab>
            Google Identity:
          </TextLink>{' '}
          Eine günstigere Alternative. Bietet nicht den gleichen Funktionsumfang und nicht die gleiche komfortable Developer
          Experience, passt dafür auch in ein kleines Budget.
        </Copy>
      </Section>
    </main>
  </Page>
);

export default Iam;
