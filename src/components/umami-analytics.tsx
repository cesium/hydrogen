import Script from "next/script";

export default function UmamiAnalytics() {
  const websiteId = process.env.UMAMI_WEBSITE_ID;
  const url = process.env.UMAMI_URL;
  if (!websiteId || !url) return <></>;
  return (
    <Script
      defer
      src={url}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  );
}
