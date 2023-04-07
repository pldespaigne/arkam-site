
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
    <Tilt className="h-full bg-black/40 rounded-lg backdrop-blur-md border border-white/20 flex flex-col w-[240px] gap-2 text-white">
      <Image src={image} alt="event1" width="240" height="240" className="rounded-t-lg"/>
      <h3 className="text-left font-semibold text-2xl mx-2">{title}</h3> 
      <h4 className="text-left text-lg mx-2">{date}</h4>
      <p className="text-justify mx-2">
        {lieu}<br/>
        {patients} patients
      </p>
      <p className="text-justify mx-2 mb-4">{description}</p>
    </Tilt>
  );
};