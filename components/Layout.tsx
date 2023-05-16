
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FunctionComponent, ReactNode, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons';


interface LayoutProps {
  brandText?: string;
  children: ReactNode;
};

export const Layout: FunctionComponent<LayoutProps> = ({ children, brandText = '' }) => {

  const router = useRouter();
  const isActive = (value: string) => router.asPath.includes(value);

  const [ open, setOpen ] = useState(false);

  return (
    <main className="relative">
      <header className="fixed w-screen z-20 text-white flex flex-col bg-black/60 backdrop-blur-lg md:px-40 md:py-4 border-b border-b-white/20">
          
        {
          open
            ? <div className="flex md:hidden flex-col gap-2 m-4">
                <Link onClick={() => setOpen(o => !o)} href="#evenements" scroll={false} className="bg-white/10 px-4 py-4 rounded-lg text-glow font-semibold">Events</Link>
                <Link onClick={() => setOpen(o => !o)} href="#projets" scroll={false} className="bg-white/10 px-4 py-4 rounded-lg text-glow font-semibold">Projets</Link>
                <Link onClick={() => setOpen(o => !o)} href="#poles" scroll={false} className="bg-white/10 px-4 py-4 rounded-lg text-glow font-semibold">Pôles</Link>
                <Link onClick={() => setOpen(o => !o)} href="#contact" scroll={false} className="bg-white/10 px-4 py-4 rounded-lg text-glow font-semibold">Contact</Link>
              </div>
            : ''
        }
        
        
        <div className="flex flex-row justify-between md:justify-start items-center gap-4">
          <Link href="/" className="pl-4 md:pl-0 flex items-center gap-4" onClick={() => window.scrollTo({ top: 0 })}>
            <Image src="/logo.png" width="46" height="46" alt="Arkam Logo" />
            <p className="font-semibold text-xl">{brandText}</p>
          </Link>
          
          <button className="md:hidden px-6 py-6" onClick={() => setOpen(o => !o)}>
            {
              open
                ? <FontAwesomeIcon icon={faTimes} size="2x" className="opacity-50" />
                : <FontAwesomeIcon icon={faBars} />
            }
          </button>

          <div className="hidden md:block grow" />
          <Link href="#evenements" scroll={false} className={`hidden md:block hover:underline hover:font-bold hover:scale-105 ${ isActive('#evenements') ? 'font-bold text-glow' : 'scale-105 text-slate-300' }`}>Events</Link>
          <Link href="#projets" scroll={false} className={`hidden md:block hover:underline hover:font-bold hover:scale-105 ${ isActive('#projets') ? 'font-bold text-glow' : 'scale-105 text-slate-300' }`}>Projets</Link>
          <Link href="#poles" scroll={false} className={`hidden md:block hover:underline hover:font-bold hover:scale-105 ${ isActive('#poles') ? 'font-bold text-glow' : 'scale-105 text-slate-300' }`}>Pôles</Link>
          <Link href="#contact" scroll={false} className={`hidden md:block hover:underline hover:font-bold hover:scale-105 ${ isActive('#contact') ? 'font-bold text-glow' : 'scale-105 text-slate-300' }`}>Contact</Link>
        </div>
      </header>

      {children}
  
      <footer className="fixed inset-x-0 z-10 bottom-0 text-white flex flex-row justify-center gap-8 bg-black/10 backdrop-blur-lg px-40 py-4 border-b border-b-white/20">
        <a href="https://www.facebook.com/ARKAMLILLE/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x"/>
          </a>
          <a href="https://www.instagram.com/arkamrecords/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x"/>
          </a>
          <a href="https://soundcloud.com/arkamrecords" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faSoundcloud} size="2x"/>
          </a>
      </footer>
    </main>
  );
};