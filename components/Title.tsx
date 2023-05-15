
import Image from 'next/image';
import { FunctionComponent, ReactNode } from 'react';


interface TitleProps {
  className?: string;
  children?: ReactNode;
};

export const Title: FunctionComponent<TitleProps> = ({ className = '', children }) => {

  return (
    <div className={`mx-4 mt-4 flex flex-row items-center gap-4 ${className}`}>
      <Image src="/logo.png" width="46" height="46" alt="Arkam Logo" />
      <h2 className="font-semibold text-xl md:text-3xl text-white text-glow">{children}</h2> 
      <div className="w-full h-0 mt-4 md:mt-7 border-b border-white/40"/>       
    </div>
  );
};