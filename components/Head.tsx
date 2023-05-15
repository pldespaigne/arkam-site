
import NextHead from 'next/head';
import React, { FunctionComponent } from 'react';


interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  alt?: string;
  url?: string;
};

export const Head: FunctionComponent<HeadProps> = ({
  title = 'Arkam - Musical Event and Digital Events',
  description = `Arkam est une association de loi 1901 créée en 2017 par des adeptes de musique, d'art visuel et de nouvelles technologies.`,
  image = 'https://arkam-experience.fr/logo_black.png',
  alt = `Logo d'Arkam: en blanc sur fond noir, un cable jack formant un cercle et écrivant les lettres A.R.K.A.M`,
  url = 'https://arkam-experience.fr',
}) => {

  return(
    <>
      <NextHead>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={alt} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Arkam" />
      </NextHead>
    </>
  );
};
