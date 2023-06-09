import { BlobVariations, Copy, Grid, LinkList, TextBlock } from '@smartive/guetzli';
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
  app: '/images/projekte/kasparund/app.png',
  card: '/images/projekte/kasparund/card-upsidedown.svg',
  mood: '/images/projekte/kasparund/KasparUND-Projektfoto.jpg',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
  packages: Package[];
};

const Kasparund: NextPage<Props> = ({ quote, contact, teasers, images, packages }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Kaspar& stellt die _Finanzwelt_ auf den Kopf."
        description="Das Startup aus der Ostschweiz macht das Anlegen für alle zugänglich. Mit ihrer App kannst du bereits ab einem Franken Geld investieren. Wir begleiten Kaspar&amp; seit den Anfängen und unterstützen das ETH Spin-off bei technischen Fragen."
      >
        <Copy>
          Das Startup aus der Ostschweiz macht das Anlegen für alle zugänglich. Mit ihrer App kannst du bereits ab einem
          Franken Geld investieren. Wir begleiten Kaspar&amp; seit den Anfängen und unterstützen das ETH Spin-off bei
          technischen Fragen. Bei regelmässigen <Link href="/angebot/mentoring">Mentoring-Treffen</Link> diskutieren wir von
          Software-Architektur über Infrastruktur bis hin zu Security über alles von Belang, damit bei Kaspar&amp; die
          richtigen Entscheidungen für ein stabiles Produkt getroffen werden.
        </Copy>
        <LinkList links={[{ label: 'Zu Kaspar&', href: 'https://kasparund.ch/' }]} />
      </PageHeader>

      <main>
        <Section>
          <Image
            src={images.mood}
            alt="Frau hält die Karte von Kaspar& in die Höhe"
            priority
            variant={ImageVariant.FillContainer}
            width={1504}
            height={800}
          />

          <Grid cols={2}>
            <div className="h-[500px] md:h-[700px]">
              <Image
                src={images.card}
                alt="Kasparund Karte auf dem Kopf"
                priority
                width={420}
                height={260}
                variant={ImageVariant.Centered}
              />
            </div>
            <div className="h-[500px] md:h-[700px]">
              <Image
                src={images.app}
                alt="Kasparund App Preview"
                priority
                width={400}
                height={711}
                variant={ImageVariant.Centered}
              />
            </div>
          </Grid>
        </Section>
        <Section title="Und was haben wir dazu beigetragen?">
          <Grid cols={2}>
            <TextBlock title="Die Herausforderung">
              Kaspar&amp; hat ein eigenes Software-Entwicklungsteam. Die wissen auch, wie sie ihre Produktidee auf den Markt
              bringen. Aber manchmal tauchen unterwegs Fragen auf, die eine Antwort suchen. Ohne grosses Budget für externe
              Entwicklungsunterstüzung möchte das Team bei Kaspar&amp; für einschneidende Entscheidungen aber trotzdem auf
              externes Wissen zugreifen können. Wichtig war auch, das Knowhow des eigenen Teams weiterhin nachhaltig zu
              steigern.
            </TextBlock>
            <TextBlock title="Unsere Lösung">
              Deshalb ist für Kaspar& unser Mentoring-Programm die richtige Lösung. Bei unseren regelmässigen
              Jourfix-Meetings diskutieren wir Fragen aller Art. Wir haben zum Beispiel über Fragen zum Betrieb mit{' '}
              <Link href="/was-ist/kubernetes">Kubernetes</Link> gesprochen, was die Best-Practices von neueren Technologien
              wie <Link href="/was-ist/grpc">gRPC</Link> sind oder was unserer Meinung nach bei{' '}
              <Link href="/was-ist/agile">Scrum</Link> gut und eben nicht gut funktioniert. Da wir jederzeit unsere
              Spezialist*innen für User Experience, DevOps und Software Entwicklung beiziehen können, finden wir auf jede
              Frage eine Antwort.
            </TextBlock>
          </Grid>
        </Section>
        <Section>
          <Testimonial background="mint" blobs={BlobVariations.mint[2]} quote={quote} />
        </Section>
        <Section>
          <Grid cols={3}>
            <TextBlock title="Postgres oder CockroachDB">
              Da bei PosgreSQL bereits Knowhow vorhanden war, fiel die Entscheidung schnell. Die enorme Skalierbarkeit von
              CockroachDB, welches zur Debatte stand, war nicht nötig. So können wir die Datenbank sehr konfortabel direkt
              bei Google Cloud SQL beziehen.
            </TextBlock>
            <TextBlock title="REST oder gRPC">
              Gestartet haben wir ausschliesslich mit REST-APIs. Mittlerweile kommen aber beide Technologien zum Einsatz:{' '}
              <Link href="/was-ist/grpc">gRPC</Link> für die serverseitige Service-to-service-Kommunikation und REST in
              Richtung Client.
            </TextBlock>
            <TextBlock title="Flutter oder PWA">
              <Link href="/was-ist/pwa">PWAs</Link> haben gegenüber nativen Apps leider immernoch ein paar Nachteile (looking
              at you, Apple). In diesem Projekt ist die App-Entwicklung mit <Link href="/was-ist/flutter">Flutter</Link>{' '}
              deshalb eindeutig die bessere Entscheidung.
            </TextBlock>
          </Grid>
        </Section>
        <Section>
          <Contact contact={contact}>
            Auch heute unterstützt {contact.firstname} Kaspar& noch.
            <br /> Interessiert? Er gibt gern Auskunft!
          </Contact>
        </Section>

        <Section title="Und hier noch der Link zum Päckli:">
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
  const teasers = getRandomTeasers(3, Teasers.kaspar.title);
  const packages = [Packages['mentoring']];
  const contact = await getEmployeeByName('Josh Wirth');

  return {
    props: {
      images,
      teasers,
      contact,
      packages,
      quote: Quotes['lauro-kasparund'],
    },
  };
};

export default Kasparund;
