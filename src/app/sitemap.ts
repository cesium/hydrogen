import { type MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://cesium.di.uminho.pt",
    },
    {
      url: "https://cesium.di.uminho.pt/about",
      priority: 0.8,
      alternates: {
        languages: {
          en: "https://cesium.di.uminho.pt/en-US/about",
          pt: "https://cesium.di.uminho.pt/pt-PT/about",
        },
      },
    },
    {
      url: "https://cesium.di.uminho.pt/team",
      priority: 0.7,
      alternates: {
        languages: {
          en: "https://cesium.di.uminho.pt/en-US/team",
          pt: "https://cesium.di.uminho.pt/pt-PT/team",
        },
      },
    },
    {
      url: "https://cesium.di.uminho.pt/partners",
      priority: 0.6,
      alternates: {
        languages: {
          en: "https://cesium.di.uminho.pt/en-US/partners",
          pt: "https://cesium.di.uminho.pt/pt-PT/partners",
        },
      },
    },
    {
      url: "https://cesium.di.uminho.pt/events",
      priority: 0.5,
      alternates: {
        languages: {
          en: "https://cesium.di.uminho.pt/en-US/events",
          pt: "https://cesium.di.uminho.pt/pt-PT/events",
        },
      },
    },
    {
      url: "https://cesium.di.uminho.pt/about/become-a-member",
      priority: 0.4,
      alternates: {
        languages: {
          en: "https://cesium.di.uminho.pt/en-US/about/become-a-member",
          pt: "https://cesium.di.uminho.pt/pt-PT/about/become-a-member",
        },
      },
    },
    {
      url: "https://cesium.di.uminho.pt/about/become-a-collaborator",
      priority: 0.3,
      alternates: {
        languages: {
          en: "https://cesium.di.uminho.pt/en-US/about/become-a-collaborator",
          pt: "https://cesium.di.uminho.pt/pt-PT/about/become-a-collaborator",
        },
      },
    },
  ];
}
