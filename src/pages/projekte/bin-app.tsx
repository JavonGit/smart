import {
  BlobVariations,
  Copy,
  Explainer,
  Grid,
  Keyfigure,
  LinkList,
  TextBlock,
  TextLink,
  UnorderedList,
} from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Contact } from '../../components/contact';
import { Image, ImageVariant } from '../../components/image';
import { NextImageCard } from '../../components/image-card';
import { Testimonial } from '../../components/testimonial';
import { PackageList } from '../../compositions/package-list';
import { PageHeader } from '../../compositions/page-header';
import { Employee, getEmployeeByName } from '../../data/employees';

import Packages, { Package } from '../../data/packages';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Link } from '../../elements/link';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';
import { getRandomTeasers } from '../../utils/teasers';

const STATIC_IMAGES = {
  screenshot: '/images/projekte/bin-app/bin-screenshot.png',
  tablet: '/images/projekte/bin-app/tablet.jpg',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
  packages: Package[];
};

const BinApp: NextPage<Props> = ({ quote, contact, teasers, images, packages }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Das _Lehrbuch_ in der Tasche. Und digital."
        description="Der bin-Eigenverlag stellt Lehrmittel für die Schweizer Schreiner Ausbildung her. Diese Unterlagen gibts in gedruckter Form und auch in einer App. Auf der Suche nach einem geeigneten Partner für die Weiterentwicklung haben wir einen Solution-Review durchgeführt und das Produkt anschliessend gemeinsam weiterentwickelt."
      >
        <Copy>
          Der bin-Eigenverlag stellt Lehrmittel für die Schweizer Schreiner-Ausbildung her. Diese Unterlagen gibts nicht nur
          in gedruckter Form, sondern auch in einer App. Auf der Suche nach einem geeigneten Partner für die
          Weiterentwicklung haben wir einen <Link href="/angebot/solution-review">Solution-Review</Link> durchgeführt und das
          Produkt anschliessend gemeinsam weiterentwickelt.
        </Copy>
        <LinkList links={[{ label: 'Zum bin-Eigenverlag', href: 'https://bin.ch/' }]} />
      </PageHeader>

      <main>
        <Section>
          <Image
            src={images.tablet}
            alt="Eine Person hält ein Tablet"
            priority
            variant={ImageVariant.FillContainer}
            width={1504}
            height={800}
          />
        </Section>

        <Section>
          <Grid cols={2}>
            <TextBlock title="Die Herausforderung">
              Der bin-Eigenverlag war auf der Suche nach einem neuen Umsetzungspartner für die binApp. Gesucht war ein
              lokaler Partner aus der Schweiz, welcher einen direkten Kontakt mit dem Umsetzungsteam und eine Kommunikation
              auf Augenhöhe bieten kann. Denn das ist das beste Rezept, um eine effiziente Weiterentwicklung des Produkts
              sicherzustellen.
            </TextBlock>
            <TextBlock title="Unsere Lösung">
              Vor der Umsetzung kommt der Plan, und wer eine Übersicht hat, macht bessere Pläne. Also haben wir mit einem{' '}
              <Link href="/angebot/solution-review">Solution-Review</Link> angefangen und die bestehende Lösung analysiert.
              So konnte der bin-Eigenverlag einen Eindruck von unserer Arbeitsweise gewinnen und wir legten eine solide Basis
              für die längerfristige Zusammenarbeit.
            </TextBlock>
          </Grid>
        </Section>
        <Section>
          <Keyfigure
            background="cornflower"
            image={<Image src={images.screenshot} alt="Mobile User Interface" height="2265" width="1080" />}
          >
            <UnorderedList
              title="Kurz und knackig"
              items={[
                "Über 5'000 User*innen",
                'Verfügbar auf Android, iOS, macOS und Windows',
                'Komplett offlinefähig',
                'Automatisierte Auslieferung in die App Stores',
              ]}
              markerColor="apricot"
            />
          </Keyfigure>
        </Section>
        <Section title="Und was haben wir dazu beigetragen?">
          <Grid cols={2}>
            <TextBlock title="Das neue Backend">
              Nach dem <Link href="/angebot/solution-review">Solution-Review</Link> war klar, dass wir das existierende
              Backend durch ein flexibleres System austauschen mussten. Dabei haben wir viel Wert darauf gelegt, dass nach
              der Umstellung noch alle Daten vorhanden waren und die Anwender*innen wie gewohnt weiterarbeiten konnten.
            </TextBlock>
            <TextBlock title="Die Zukunftspläne">
              Seit dem Sommer 2021 läuft die binApp nun stabil mit dem neuen, selbstgebauten Backend. Die eigentliche App ist
              zwar noch mehr oder weniger dieselbe. Das neue Backend war nur der erste Schritt. Nachdem das Backend nun für
              alles* gerüstet ist, kommt die eigentliche App dran. (*genau, alles.) Sie kann nun durch eine
              multi-Mandanten-fähige App abgelöst werden, neu gemacht mit <Link href="/was-ist/flutter">Flutter</Link>.
            </TextBlock>
          </Grid>
        </Section>

        <Section>
          <Testimonial background="apricot" blobs={BlobVariations.apricot[0]} quote={quote} />
        </Section>

        <Section title="Ein paar Insights">
          <Grid cols={3}>
            <TextBlock title="Technology">
              Das neue Backend haben wir mit <Link href="/was-ist/dot-net">dotnet</Link> und einer PostgreSQL-Datenbank
              umgesetzt. Du willst mehr Details? Und du hast ein Telefon? ☎{' '}
              <TextLink href="tel:+41 44 552 55 92">
                Call us <s>maybe</s> now!
              </TextLink>
            </TextBlock>
            <TextBlock title="Der Login">
              Für die Benutzerverwaltung kommt die Schweizer IAM Plattform{' '}
              <TextLink href="https://zitadel.ch">ZITADEL</TextLink> zum Einsatz. Wofür das gut ist? Mach dich schlau:{' '}
              <Link href="/was-ist/iam">IAM</Link>.
            </TextBlock>
            <TextBlock title="Douglas-Peucker 😍🥰">
              Dank des Douglas-Peucker Algorithmus konnten wir die Daten bei der{' '}
              <Explainer title="Die Linie, die errechnet wird, wenn in der App eine Textmarkierung angebracht wird.">
                Polyline-Berechnung
              </Explainer>{' '}
              im Schnitt um Faktor 1000 (in Worten: tausend!) reduzieren.
            </TextBlock>
          </Grid>
        </Section>
        <Section>
          <Contact contact={contact}>
            Auch heute unterstützt {contact.firstname} den bin-Eigenverlag noch. Interessiert?
            <br /> Buch dir einen Kennenlern-Termin.
          </Contact>
        </Section>

        <Section title="Das haben wir mit dem bin-Eigenverlag gemacht:">
          <PackageList packages={packages} />
        </Section>
        <Section title="Weitere Erfolgsgeschichten">
          <Grid cols={3}>
            {teasers.map((teaser) => (
              <NextImageCard key={teaser.title} {...teaser} />
            ))}
          </Grid>
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = STATIC_IMAGES;
  const teasers = getRandomTeasers(3, Teasers['binapp'].title);
  const packages = [Packages['solution-review'], Packages['scale-up']];
  const contact = await getEmployeeByName('Josh Wirth');

  return {
    props: {
      packages,
      images,
      teasers,
      contact,
      quote: Quotes['markus-bin'],
    },
  };
};

export default BinApp;
