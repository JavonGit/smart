import { BlobVariations, Clock, Copy, Grid, Heading2, Label, PageHeaderVariants, UnorderedList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Contact } from '../../components/contact';
import { NextImageCard } from '../../components/image-card';
import { PageHeader } from '../../compositions/page-header';
import { Employee, getEmployeeByName } from '../../data/employees';

import Packages from '../../data/packages';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';

type Props = {
  contact: Employee;
  teasers: Teaser[];
};

const ScaleUp: NextPage<Props> = ({ contact, teasers }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Scale Up"
        description="Bau dein MVP entlang der messbaren Ziele aus und erweitere den Umfang deines Produkts."
        variant={PageHeaderVariants.Card}
        background={Packages['scale-up'].background}
        blobs={BlobVariations.cornflower[3]}
      >
        <Label className="inline-flex flex-row items-center mb-8">
          <Clock className="h-6 w-6 mr-2 inline" />
          2-3 Monate
        </Label>
        <Copy>Bau dein MVP entlang der messbaren Ziele aus und erweitere den Umfang deines Produkts.</Copy>
      </PageHeader>

      <main>
        <Section>
          <Heading2>Was ist Scale Up?</Heading2>
          <Copy>
            Du hast dein Produkt als MVP am Markt. Du möchtest es entweder verbessern oder weiterentwickeln. Die angestrebten
            Ziele sind definiert und werden gemessen. Anhand dieser Ziele legen wir gemeinsam deine nächsten Zwischenziele
            fest und arbeiten auf diese hin. Die Umsetzung erfolgt in agilen zweiwöchigen Sprints, wobei du laufend den
            Fortschritt siehst.
          </Copy>
          <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 bg-white-100 rounded p-8 mt-16">
            <UnorderedList
              title="Das hast du davon"
              items={[
                'Ein ausgereiftes Produkt mit der Möglichkeit, den Erfolg deiner Ziele zu messen.',
                'Agiles und leanes Vorgehen zum Ausbau deines Produkts.',
                'Definition deiner wichtigsten Customer Journeys.',
              ]}
            />
            <UnorderedList
              title="Das brauchen wir von dir"
              items={[
                'Du oder ein*e Entscheidungsträger*in aus deinem Team kann wöchentlich an Planning- und Review-Meetings teilnehmen.',
                'Du bist gewillt, sehr schnell vorwärts zu machen und Entscheide zu treffen.',
              ]}
            />
          </div>
        </Section>
        <Section>
          <Contact contact={contact} />
        </Section>
        <Section>
          <Heading2>Skaliert haben wir unter anderem schon:</Heading2>
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
  const contact = await getEmployeeByName('Thilo Haas');

  return {
    props: {
      contact,
      teasers: [Teasers.subsidia, Teasers['supply-chain']],
    },
  };
};

export default ScaleUp;
