
import Image from 'next/image';
import { FunctionComponent } from 'react';

import { Tilt } from '@arkam/components/Tilt';


interface EventProps {
  image: string;
  title: string;
  date: string;
  lieu: string;
  patients: string;
  description: string;
};

export const Event: FunctionComponent<EventProps> = ({ image, title, date, lieu, patients, description }) => {

  return (
    <Tilt className="h-full bg-black/60 rounded-lg backdrop-blur-md border border-white/20 flex flex-col w-[240px] md:gap-2 text-white">
      <Image src={image} alt="event1" width="240" height="240" className="rounded-t-lg"/>
      <h3 className="text-left font-semibold text-2xl mx-2 my-1 md:my-0">{title}</h3> 
      <h4 className="text-left md:text-lg mx-2">{date}</h4>
      <p className="mx-2 text-slate-300 text-sm md:text-base">
        {lieu}<br/>
        {patients} patients
      </p>
      <p className="mx-2 mb-4 text-sm md:text-base">{description}</p>
    </Tilt>
  );
};