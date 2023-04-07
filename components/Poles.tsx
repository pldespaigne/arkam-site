
import Link from 'next/link';
import { FunctionComponent } from 'react';


interface PolesProps {
  image: string;
  nom: string;
  description: string;
  url: string;
};

export const Poles: FunctionComponent<PolesProps> = ({ image, nom, description, url }) => {

  return (
    <Link href={url} className="w-1/5">
      <div className="rounded-md w-full h-60 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("${image}")` }} />
      <h2 className="text-2xl font-semibold text-center mt-4">{nom}</h2>
      <p className="text-center mt-4">{description}</p>
    </Link>
  );
};
