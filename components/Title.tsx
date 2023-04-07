
import Image from 'next/image';
import { FunctionComponent, ReactNode } from 'react';


interface TitleProps {
  className?: string;
  children?: ReactNode;
};

export const Title: FunctionComponent<TitleProps> = ({ className = '', children }) => {

  return (
    <div className={`mt-4 flex flex-row items-center gap-4 ${className}`}>
      <Image src="/logo.png" width="46" height="46" alt="Arkam Logo" />
      <h2 className="font-semibold text-3xl text-white">{children}</h2> 
      <div className="w-full h-0 mt-7 border-b border-white/40"/>       
    </div>
  );
};