import Head from "next/head";
import LogoAzul from "/public/logo-azul-svg.svg";
import Favicon from "/public/logo-curto-bold-azul-svg.svg";

interface IMeta {
  title: string;
  description: string;
  url: string;
  keywords: string;
}

export function Meta({ title, description, url, keywords }: IMeta) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={LogoAzul} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={LogoAzul} />
      <meta
        name="author"
        content="Matheus Cunha - Desenvolvimento de software"
      />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content="#001734" />
      <link rel="icon" type="image/svg+xml" href={Favicon} />
      <link rel="apple-touch-icon" href={Favicon} />
    </Head>
  );
}
