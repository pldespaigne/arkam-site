import { faFacebook, faInstagram, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

interface PolesLayoutProps {
 children: ReactNode;
};

export const PolesLayout: FunctionComponent<PolesLayoutProps> = ({children}) => {

  return (
    <main className="relative" style={{ fontFamily: 'Futura' }}>
    <header className="fixed inset-x-0 z-10 text-white flex flex-row items-center gap-4 bg-black/40 backdrop-blur-lg px-40 py-4 border-b border-b-white/20">
      <Image src="/logo.png" width="46" height="46" alt="Arkam Logo" />
      <p className="font-semibold text-xl">Musical Event and Digital Events</p>
      <div className="grow" />
      <Link href="/#evenements" className="hover:underline">Events</Link>
      <Link href="/#projets" className="hover:underline">Projets</Link>
      <Link href="/#poles" className="hover:underline">Pôles</Link>
      <Link href="/#contact" className="hover:underline">Contact</Link>
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