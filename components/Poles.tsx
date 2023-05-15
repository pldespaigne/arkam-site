
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
    <Link href={url} className="md:w-1/4 border border-transparent hover:border-slate-800 hover:bg-slate-900/30 p-4 rounded-xl">
      <div className="rounded-md w-full h-60 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("${image}")` }} />
      <h2 className="text-xl md:text-2xl font-semibold text-center mt-4">{nom}</h2>
      <p className="text-center md:mt-4 text-sm md:text-base">{description}</p>
    </Link>
  );
};
