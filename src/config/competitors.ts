export interface CompetitorConfig {
  slug: string;
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  metaTitle: string;
  metaDescription: string;
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
  },
  // Add more competitors here as needed
  // example: {
  //   slug: "example",
  //   name: "Example Company",
  //   tagline: "Example Company vs Hawaii Vacation Homes",
  //   heroHeadline: "Looking for Better",
  //   heroSubheadline: "Property Management?",
  //   metaTitle: "Hawaii Vacation Homes vs Example Company",
  //   metaDescription: "Compare Hawaii Vacation Homes to Example Company...",
  // },
};

export const getCompetitor = (slug: string): CompetitorConfig | undefined => {
  return competitors[slug.toLowerCase()];
};

export const getAllCompetitorSlugs = (): string[] => {
  return Object.keys(competitors);
};
