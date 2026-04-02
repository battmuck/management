export interface CompetitorConfig {
  slug: string;
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  metaTitle: string;
  metaDescription: string;
  formId?: string;
  formName?: string;
}

export const competitors: Record<string, CompetitorConfig> = {
  myperfectstays: {
    slug: "myperfectstays",
    name: "MyPerfectStays",
    tagline: "MyPerfectStays vs Hawaii Vacation Homes",
    heroHeadline: "Choosing the Right",
    heroSubheadline: "Maui Property Manager?",
    metaTitle: "Hawaii Vacation Homes vs MyPerfectStays",
    metaDescription: "Compare Hawaii Vacation Homes to MyPerfectStays. Boutique Maui vacation rental management with 32% higher revenue, 100% owner retention, and transparent pricing.",
    formId: "NIkdCb3EJxwZ7DtCplGq",
    formName: "Property Management - MyPerfectStays",
  },
  vacasa: {
    slug: "vacasa",
    name: "Vacasa",
    tagline: "Vacasa vs Hawaii Vacation Homes",
    heroHeadline: "Choosing the Right",
    heroSubheadline: "Maui Property Manager?",
    metaTitle: "Hawaii Vacation Homes vs Vacasa",
    metaDescription: "Compare Hawaii Vacation Homes to Vacasa. Boutique Maui vacation rental management with 32% higher revenue, 100% owner retention, and transparent pricing.",
    formId: "JXIHFP8UKDl66myqY3K5",
    formName: "Property Management - Vacasa",
  },
};

export const getCompetitor = (slug: string): CompetitorConfig | undefined => {
  return competitors[slug.toLowerCase()];
};

export const getAllCompetitorSlugs = (): string[] => {
  return Object.keys(competitors);
};
