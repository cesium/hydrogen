import { type MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://cesium.di.uminho.pt",
    },
    {
      url: "https://cesium.di.uminho.pt/about",
      priority: 0.8,
    },
    {
      url: "https://cesium.di.uminho.pt/about/become-a-member",
      priority: 0.7,
    },
    {
      url: "https://cesium.di.uminho.pt/about/become-a-collaborator",
      priority: 0.6,
    },
    {
      url: "https://cesium.di.uminho.pt/about/team",
      priority: 0.5,
    },
    {
      url: "https://cesium.di.uminho.pt/events",
      priority: 0.4,
    },
  ];
}
