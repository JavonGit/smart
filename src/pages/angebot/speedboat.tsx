import { BlobVariations, Clock, Copy, Grid, Heading2, Label, PageHeaderVariants, UnorderedList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Contact } from '../../components/contact';
import { NextImageCard } from '../../components/image-card';
import { PackageList } from '../../compositions/package-list';
import { PageHeader } from '../../compositions/page-header';
import { Employee, getEmployeeByName } from '../../data/employees';

import Packages, { Package } from '../../data/packages';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Testimonial } from '../../components/testimonial';

type Props = {
  contact: Employee;
  packages: Package[];
  teasers: Teaser[];
  quote: Quote;
};

const Speedboat: NextPage<Props> = ({ contact, packages, teasers, quote }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Speedboat"
        description="Lancier in kurzer Zeit dein MVP (Minimum Viable Product) und teste anhand messbarer Ziele, wie dein Produkt ankommt."
        variant={PageHeaderVariants.Card}
        background={Packages['speedboat'].background}
        blobs={BlobVariations.mint[0]}
      >
        <Label className="inline-flex flex-row items-center mb-8">
          <Clock className="h-6 w-6 mr-2 inline" />6 Wochen
        </Label>
        <Copy>
          Lancier in kurzer Zeit dein MVP (Minimum Viable Product) und teste anhand messbarer Ziele, wie dein Produkt
          ankommt.
        </Copy>
      </PageHeader>

      <main>
        <Section>
          <Heading2>Was ist ein Speedboat?</Heading2>
          <Copy>
            Du hast eine Idee. Dir ist schon recht klar, wie das Produkt aussehen und funktionieren könnte. Du willst wissen,
            ob es trägt. In einer agilen Umsetzung mit Lean UX Ansätzen entwickeln wir dein MVP kollaborativ in sechs Wochen
            und bringen es auf den Markt. Die definierten Ziele und Kennzahlen (Key Performance Indicators oder kurz KPI)
            behalten wir dabei laufend im Auge. Mit modernen Tracking-Methoden werden diese KPI nach der Lancierung gemessen
            und ausgewertet. So weisst du stets, welche Hypothesen korrekt waren und welche überarbeitet werden müssen.
          </Copy>
          <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 bg-white-100 rounded p-8 mt-16">
            <UnorderedList
              title="Das hast du davon"
              items={[
                'In einem interdisziplinären Team bringen wir dein Produkt in sechs Wochen auf den Markt.',
                'Das Produkt hat eine solide technologische Basis und kann in Zukunft einfach skaliert und ausgebaut werden.',
                'Du weisst dank den definierten KPI und den Auswertungen stets, welche Teile deines Produkts gut funktionieren.',
                'Du hast eine konkrete Vorstellung davon, wie es weitergeht und wie der Prozess zur Skalierung deines Produktes aussieht.',
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
          <Testimonial background="apricot" quote={quote} />
        </Section>
        <Section>
          <Contact contact={contact} />
        </Section>
        <Section>
          <Heading2>Diese Projekte sind mit einem Speedboat durchgestartet:</Heading2>
          <Grid cols={3}>
            {teasers.map((teaser) => (
              <NextImageCard key={teaser.title} {...teaser} />
            ))}
          </Grid>
          <Heading2>Und damit könnte es nach deinem Speedboat weiter gehen:</Heading2>
          <PackageList packages={packages} />
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const packages = [Packages.mentoring, Packages['scale-up']];
  const contact = await getEmployeeByName('Robert Vogt');

  return {
    props: {
      packages,
      contact,
      teasers: [Teasers.subsidia, Teasers['supply-chain']],
      quote: Quotes['simon-domicura'],
    },
  };
};

export default Speedboat;
