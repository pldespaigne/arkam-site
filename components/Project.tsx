
import { FunctionComponent, ReactNode } from 'react';

import { Tilt } from '@arkam/components/Tilt';


interface ProjectProps {
  image?: string;
  title?: string;
  date?: string;
  lieu?: string;
  patients?: string;
  description?: string;
  children?: ReactNode;
};

export const Project: FunctionComponent<ProjectProps> = ({ image, title, date, lieu, patients, description, children }) => {

  return (
    <Tilt className="bg-black/60 rounded-xl backdrop-blur-md border border-white/20 flex flex-col md:gap-2 md:w-1/2" angle="6">
      <div className="rounded-t-md w-full h-80 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("${image}")` }} />

      <h3 className="px-4 mt-2 text-2xl font-semibold">{title}</h3>
      <p className="px-4 text-sm text-slate-300">{date}</p>
      <p className="px-4">{lieu}</p>
      { patients && <p className="px-4 text-sm text-slate-300">{patients} patients</p> }
      <p className="px-4 text-sm md:text-base">
        {description}
      </p>
      <div className="grow"/>
      <div className="flex flex-row flex-wrap justify-start gap-1 m-4">
        {children}
      </div>
    </Tilt>
  );
};