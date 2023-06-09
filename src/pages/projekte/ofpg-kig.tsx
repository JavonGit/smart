import { BlobVariations, Copy, Grid, Heading3, Keyfigure, LinkList, TextBlock, UnorderedList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Contact } from '../../components/contact';
import { Image, ImageVariant } from '../../components/image';
import { NextImageCard } from '../../components/image-card';
import { Testimonial } from '../../components/testimonial';
import { PageHeader } from '../../compositions/page-header';
import { Employee, getEmployeeByName } from '../../data/employees';

import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Link } from '../../elements/link';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';
import { getRandomTeasers } from '../../utils/teasers';

const STATIC_IMAGES = {
  gummistiefel: '/images/projekte/ofpg-kig/ben-wicks-iDCtsz-INHI-unsplash.jpg',
  tisch: '/images/projekte/ofpg-kig/dylan-gillis-KdeqA3aTnBY-unsplash.jpg',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
};

const OfpgKig: NextPage<Props> = ({ quote, contact, teasers, images }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Aus über 1ʼ700 Angeboten die richtige _Hilfe_ finden."
        description="Das Ostschweizer Forum für Psychische Gesundheit hat ein grosses Netzwerk an Anbietern für Unterstützungsangebote im Bereich Gesundheit und Soziales. Bisher gab es keinen einfachen Zugang zu diesen Angeboten. Hier schufen wir Abhilfe mit einem zentralen Tool zur Verwaltung und einem Widget für den Zugriff."
      >
        <Copy>
          Das Ostschweizer Forum für Psychische Gesundheit hat ein grosses Netzwerk an Anbietern für Unterstützungsangebote
          im Bereich Gesundheit und Soziales. Bisher gab es keinen einfachen Zugang zu diesen Angeboten. Hier schufen wir
          Abhilfe mit einem zentralen Tool zur Verwaltung und einem Widget für den Zugriff.
        </Copy>
        <Copy>
          Der Vorteil an einem Widget: Das Anzeigen und Durchsuchen der Angebote ist nicht an eine Website gebunden, sondern
          das Widget kann überall eingebunden eingebunden werden. Angebote von Kantonen, Gemeinden und Organisationen werden
          neu mit einem zentralen Tool einheitlich verwaltet.
        </Copy>
        <LinkList
          links={[
            { label: 'Zur Angebotssuche', href: 'https://ofpg.ch/notfall-hilfe-finden' },
            { label: 'Zur Website', href: 'https://ofpg.ch/' },
          ]}
        />
      </PageHeader>

      <main>
        <Section>
          <Grid cols={2}>
            <Image
              src={images.gummistiefel}
              alt="Kinderfüsse in Gummistiefeln"
              priority
              variant={ImageVariant.FillContainer}
              width={720}
              height={383}
            />
            <Image
              src={images.tisch}
              alt="Leute sitzen an einem Tisch und besprechen sich"
              priority
              variant={ImageVariant.FillContainer}
              width={720}
              height={383}
            />
          </Grid>
        </Section>
        <Section>
          <Keyfigure>
            <UnorderedList
              title="Auf einen Blick"
              items={[
                'Über 1ʼ700 Angebote von 1ʼ000 Anbietern',
                'Kann als React-Widget im Nu auf jeder beliebigen Webseite eingebunden werden',
                'Elasticsearch für eine schnelle, fehlertolerante und standortbezogene Suche',
                'Hohe Datenqualität dank Publikations-Workflow',
              ]}
              markerColor="apricot"
            />
          </Keyfigure>
        </Section>

        <Section>
          <Grid cols={2}>
            <div>
              <Heading3>Schritt für Schritt vorwärts</Heading3>
              <Copy>
                Auch bei diesem Projekt sind wir iterativ vorgegangen — mit <Link href="/was-ist/agile">Scrum</Link>.
                Regelmässig wurden neue Features getestet und evaluiert. Das erlaubte dem Kanton und uns, auf neue oder sich
                ändernde Anforderungen einzugehen und diesen gerecht zu werden.
              </Copy>
              <Copy>
                Das iterative Vorgehen macht es einfach, auf die Bedürfnisse der Nutzer*innen einzugehen. Das macht auch uns
                und dem Kunden Freude. So wurde die Anzeige von Resultaten in einer Karte auf Wunsch der Nutzer*innen
                implementiert.
              </Copy>
            </div>
            <div>
              <Heading3>Eine Suche, aber auf vielen Seiten</Heading3>
              <Copy>
                Ein Suchangebot hilft nur, wenn es gut verankert ist. Gerade in schwierigen Situationen greift man gern auf
                bereits bekannte Angebote zurück. Also haben wir die Suche so konzipiert und entwickelt, dass sie genau dort
                platziert werden kann, wo sie gebraucht wird. Das Einbetten auf einer Seite ist ein Kinderspiel.
              </Copy>
              <Copy>
                Die Resultate können so vorgefiltert werden, dass sie auf die Zielgruppe der einbindenden Website passen:
                Eine Beratungsstelle für Jugendliche kann beispielsweise die Resultate auf Angebote für Kinder und Jugedliche
                einschränken.
              </Copy>
            </div>
          </Grid>
          <Testimonial background="cornflower" blobs={BlobVariations.cornflower[2]} quote={quote} />
        </Section>
        <Section>
          <Heading3>Schnelle und nutzerfreundliche Suche</Heading3>
          <Copy>
            Wir benutzen gerne Elasticsearch für Suchprojekte. Damit bekommen wir die schnellen Suchergebnisse schon mal
            geschenkt. Mit der Pflege von Synonymen und einer gewissen Fehlertoleranz können wir sogar passende Angebote
            anzeigen, wenn sich Nutzer*innen vertippen (gerade auf dem Snartphonr 🙄).
          </Copy>
          <Copy>
            Zusätzlich zur cleveren Volltextsuche und gängigen Filtern ist die Distanz zum Anbieter wichtig. Wenn wir den
            Standort der Nutzer*innen kennen, gewichten wir nahe gelegene Angebote höher.
          </Copy>
        </Section>
        <Section>
          <Grid cols={2}>
            <TextBlock title="Verteilte Daten, zentral verwaltet">
              Mehrere Kantone und Organisationen sind im Backend aktiv. Jeder Mandant pflegt seine eigenen Anbieter-Kreise,
              was zu einer Vielfalt von Angeboten führt. Jeder Mandant ist für seine Anbieter und somit die Daten und
              Angebote verantwortlich und kann spezifische, auf ihn angepasste Konfigurationen vornehmen.
            </TextBlock>
            <TextBlock title="Vier-Augen-Prinzip">
              Eine hohe Datenqualität der Inhalte ist für das Angebotsverzeichnis entscheidend. Die Anbieter haben die
              Möglichkeit, ihre Daten selber zu pflegen um Aktualität und Attraktivität zu gewährleisten. Der Review-Prozess
              spielt dabei eine zentrale Rolle - die verantworlichen Personen müssen Änderungsanträge prüfen und
              anschliessend mit Hinweisen zur Verbesserung zurückweisen oder direkt freigeben und somit ins Verzeichnis
              aufnehmen.
            </TextBlock>
          </Grid>
        </Section>
        <Section>
          <Contact contact={contact} />
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
  const teasers = getRandomTeasers(3, Teasers.ofpg.title);
  const contact = await getEmployeeByName('Marco Bohler');

  return {
    props: {
      images,
      teasers,
      contact,
      quote: Quotes['fabrina-kig'],
    },
  };
};

export default OfpgKig;
