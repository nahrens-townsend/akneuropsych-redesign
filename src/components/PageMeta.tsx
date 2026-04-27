import { Helmet } from "react-helmet-async";

interface PageMetaProps {
  title: string;
  description: string;
  canonical: string;
}

const BASE_URL = "https://www.akneuropsych.com";

export default function PageMeta({ title, description, canonical }: PageMetaProps) {
  const canonicalUrl = `${BASE_URL}${canonical}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="AK Neuropsych" />
    </Helmet>
  );
}
