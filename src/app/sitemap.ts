import { type MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.URL}`,
    },
    {
      url: `${process.env.URL}/about`,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${process.env.URL}/en/about`,
          pt: `${process.env.URL}/pt/about`,
        },
      },
    },
    {
      url: `${process.env.URL}/team`,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${process.env.URL}/en/team`,
          pt: `${process.env.URL}/pt/team`,
        },
      },
    },
    {
      url: `${process.env.URL}/departments`,
      priority: 0.6,
      alternates: {
        languages: {
          en: `${process.env.URL}/en/departments`,
          pt: `${process.env.URL}/pt/departments`,
        },
      },
    },
    {
      url: `${process.env.URL}/partners`,
      priority: 0.5,
      alternates: {
        languages: {
          en: `${process.env.URL}/en/partners`,
          pt: `${process.env.URL}/pt/partners`,
        },
      },
    },
    {
      url: `${process.env.URL}/events`,
      priority: 0.4,
      alternates: {
        languages: {
          en: `${process.env.URL}/en/events`,
          pt: `${process.env.URL}/pt/events`,
        },
      },
    },
    {
      url: `${process.env.URL}/about/become-a-member`,
      priority: 0.3,
      alternates: {
        languages: {
          en: `${process.env.URL}/en/about/become-a-member`,
          pt: `${process.env.URL}/pt/about/become-a-member`,
        },
      },
    },
    {
      url: `${process.env.URL}/about/become-a-collaborator`,
      priority: 0.2,
      alternates: {
        languages: {
          en: `${process.env.URL}/en/about/become-a-collaborator`,
          pt: `${process.env.URL}/pt/about/become-a-collaborator`,
        },
      },
    },
  ];
}
