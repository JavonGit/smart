import { BrandColor } from '@smartive/guetzli';
import { ReactNode } from 'react';

export type Package = {
  label: string | ReactNode;
  title: string;
  content: string;
  link: { label: string; href: string };
  background: BrandColor;
};

export default {
  feasibility: {
    label: 'Ein Nachmittag',
    title: 'Feasibility Workshop',
    content:
      'Steck den Rahmen für dein MVP ab und schaff Klarheit, was die technischen, wirtschaftlichen und zeitlichen Bedingungen sind.',
    link: {
      label: 'Was, wie?',
      href: '/angebot/feasibility-workshop',
    },
    background: 'mint',
  },
  'design-sprint': {
    label: '1 Woche',
    title: 'Design Sprint',
    content: 'Gewinn ein besseres Verständnis für die Bedürfnisse deiner Nutzer und zieh daraus umsetzbare Ideen.',
    link: {
      label: 'Wie geht das?',
      href: '/angebot/design-sprint',
    },
    background: 'apricot',
  },
  ldj: {
    label: '1 Tag',
    title: 'Lightning Decision Jam',
    content: 'Der Lightning Decision Jam ist die schnellste Möglichkeit, damit du trotz lauter Bäumen den Wald siehst.',
    link: {
      label: 'Lightning was?',
      href: '/angebot/lightning-decision-jam',
    },
    background: 'cornflower',
  },
  speedboat: {
    label: '6 Wochen',
    title: 'Speedboat',
    content:
      'Lancier in kurzer Zeit dein MVP (Minimum Viable Product) und teste anhand messbarer Ziele, wie dein Produkt ankommt.',
    link: {
      label: 'Lass uns loslegen!',
      href: '/angebot/speedboat',
    },
    background: 'mint',
  },
  jetski: {
    label: '3 Wochen',
    title: 'Jetski',
    content:
      'Lancier in kurzer Zeit dein MVP (Minimum Viable Product) und teste anhand messbarer Ziele, wie dein Produkt ankommt.',
    link: {
      label: 'Zeig mir mehr!',
      href: '/angebot/jetski',
    },
    background: 'cornflower',
  },
  'scale-up': {
    label: '2–3 Monate',
    title: 'Scale Up',
    content: 'Bau dein MVP entlang der messbaren Ziele aus und erweitere den Umfang deines Produkts.',
    link: {
      label: 'Wie genau?',
      href: '/angebot/scale-up',
    },
    background: 'cornflower',
  },
  'solution-review': {
    label: '2–5 Tage',
    title: 'Solution Review',
    content:
      'Erhalte eine objektive Einschätzung der Chancen und Risiken deines digitalen Produkts sowie einen klaren Massnahmenplan.',
    link: {
      label: 'Weitere Infos',
      href: '/angebot/solution-review',
    },
    background: 'mint',
  },
  mentoring: {
    label: 'Laufend',
    title: 'Mentoring',
    content:
      'Tausch dich in regelmässigen Jour fixes mit unseren Digital Strategists über dein Produkt und deine Strategie aus.',
    link: {
      label: 'Mehr zum Mentoring',
      href: '/angebot/mentoring',
    },
    background: 'apricot',
  },
  'agile-playday': {
    label: 'Ein Nachmittag',
    title: 'Agile Playday',
    content:
      'Du und dein Team lernt Scrum und agile Methoden auf eine verspielte und doch realitätsnahe Weise (besser) kennen.',
    link: {
      label: 'Mehr zum Agile Workshop',
      href: '/angebot/agile-playday',
    },
    background: 'cornflower',
  },
} as Record<string, Package>;
