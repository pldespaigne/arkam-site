
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

import { Head } from '@arkam/components/Head';
import { Title } from '@arkam/components/Title';
import { Event } from '@arkam/components/Event';
import { Poles } from '@arkam/components/Poles';
import { Project } from '@arkam/components/Project';
import { Carousel } from '@arkam/components/Carousel';




export default function Home() {

  const router = useRouter();
  const isActive = (value: string) => router.asPath.includes(value);

  const [ open, setOpen ] = useState(false);

  return (
    <>
      <Head />
      <main className="relative">
        <header className="fixed w-screen z-10 text-white flex flex-col bg-black/60 backdrop-blur-lg md:px-40 md:py-4 border-b border-b-white/20">
          
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


        <footer className="fixed w-screen z-10 bottom-0 text-white flex flex-row justify-around md:justify-center gap-8 bg-black/10 backdrop-blur-lg md:px-40 py-4 border-b border-b-white/20">
          <Link href="https://www.facebook.com/ARKAMLILLE/" target="_blank" rel="noreferrer" className="hover:text-white/60">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </Link>
          <Link href="https://www.instagram.com/arkamrecords/" target="_blank" rel="noreferrer" className="hover:text-white/60">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Link>
          <Link href="https://soundcloud.com/arkamrecords" target="_blank" rel="noreferrer" className="hover:text-white/60">
            <FontAwesomeIcon icon={faSoundcloud} size="2x" />
          </Link>
        </footer>

        <section
          className="relative h-screen bg-black bg-cover bg-left md:bg-center bg-no-repeat flex flex-col justify-center items-center gap-4"
          style={{ backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 30%), url("/images/hero.jpg")' }}
        >

          <div className="mx-2 px-4 md:px-8 pt-4 pb-6 bg-black/60 rounded-lg backdrop-blur-sm border border-white/20">
            <h1 className="text-center md:text-left text-3xl md:text-9xl uppercase text-white text-glow font-extrabold">Musical Events</h1>
            <h2 className="text-center md:text-right font-semibold text-lg md:text-5xl text-white text-glow">and Digital Scenography</h2>
            <div className="border-b border-white pt-6" />
            <p className="mt-6 text-white text-center text-sm md:text-xl">Arkam est une association de loi 1901 créée en 2017 par des adeptes de musique, d&apos;art visuel et de nouvelles technologies.</p>
          </div>

          <Link href="/#asso" scroll={false} className="mt-16 text-white text-glow border border-white/20 rounded-md flex flex-row items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/10 hover:scale-105 uppercase">
            <span>Decouvrir</span>
            <FontAwesomeIcon icon={faChevronDown} size="sm" />
          </Link>
        </section>

        <section id="asso" className="bg-black md:px-40 pt-20 md:pt-32 pb-16 md:pb-24 text-white">
          <Title>L&apos;association</Title>
          <p className="mt-8 mx-4 md:mx-32 text-white text-justify md:text-center text-sm md:text-lg">Notre association souhaite promouvoir les arts nouveaux qu&apos;ils soient sonores ou visuels. Le collectif constitué d&apos;ingénieurs, de graphistes, de développeurs ou scénographes nous permet des approches transversales et novatrices d&apos;événements. Car il n&apos;y a pas plus ennuyeux qu&apos;une nuit sans folie, le nom du collectif s&apos;inspire du plus célèbre des asiles : c&apos;est par l&apos;art que nous souhaitons exalter les sens de nos patients. </p>
        </section>

        <section
          id="evenements"
          className="relative h-screen bg-black pt-20 bg-conver bg-center bg-no-repeat flex flex-col "
          style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 30%), linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 30%), url("/images/hero 2.jpg")' }}
        >
          <Title className="md:px-40 md:mb-16">Evènements</Title>

          <Carousel
            gapWidth={[32, 124]}
            elementWidth={[240, 240]}
            elements={[
              <Event
                key={0}
                image="/images/varkam3.png"
                title="Varkam #3"
                date="24/09/2022"
                lieu="La Griffe (Lille)"
                patients="200"
                description="Les patients de l'asyle ont été rassemblés pour un nouvel essai thérapeutique."
              />,
              <Event
                key={0}
                image="/images/vents.png"
                title="Les Vents Contraires"
                date="16/09/2022"
                lieu="Parc des Aubépines (Faches Thumesnil)"
                patients="Inconnu"
                description="Nos scientifiques sont invités pour répendre leur thérapie."
              />,
              <Event
                key={0}
                image="/images/factory.png"
                title="Factory"
                date="27/08/2022"
                lieu="La Base Arrière (Lille)"
                patients="80"
                description="Nos médecins conjuguent leurs savoirs pour une tri-thérapie."
              />,
              <Event
                key={0}
                image="/images/derdesraves.jpg"
                title="La Der des Raves"
                date="23/02/2022"
                lieu="Bistrot Saint So (Lille)"
                patients="1000"
                description="Patients fortement troublés par la perspective d'un changement de propriétaire, la dose de traitement a dû être doublée pour assurer un retour au calme."
              />,
              <Event
                key={0}
                image="/images/experience.jpg"
                title="Arkam Experience"
                date="13/11/2021"
                lieu="Bistrot Saint So (Lille)"
                patients="1000"
                description="Suite à la pandémie mondiale de Covid-19, le collectif s'est vu inviter pour soigner le manque de folie d'un millier de Lillois. Utilisation de la chloroquine inutile."
              />,
              <Event
                key={0}
                image="/images/event 2.jpg"
                title="Backyard"
                date="17/06/2021"
                lieu="L'hirondelle (Lille)"
                patients="200"
                description="Nouvelle thérapie testée durant cette séance organisée dans les jardins de l'asile, d'autres sessions sont à prévoir."
              />,
              <Event
                key={0}
                image="/images/event 1.jpg"
                title="LBAT w/ ARKAM"
                date="09/10/2020"
                lieu="Le Billionaire (Lille)"
                patients="100"
                description="Dernier souffle avant refermeture des bars, patients déchainés dans une cave sombre."
              />,
              <Event
                key={0}
                image="/images/event 3.png"
                title="Silent Party"
                date="06/03/2020"
                lieu="Hybride (Lille)"
                patients="150"
                description="Hypnose thérapeutique inoculée via un dispositif intra auriculaire. Bonne réaction des patients testés."
              />,
              <Event
                key={0}
                image="/images/room.jpg"
                title="Arkam invite Jan Vercauteren (Rave Alert)"
                date="05/03/2020"
                lieu="The Room (Lille)"
                patients="200"
                description="Transformation d'un lieu de la nuit lilloise en ersatz d'asile Arkam. Collaboration avec Jan Vercauteren concluante."
              />,
              <Event
                key={0}
                image="/images/bny.jpg"
                title="BNY ST SO UNDERRATED"
                date="23/11/2019"
                lieu="Bistrot Saint So (Lille)"
                patients="1000"
                description="Notre résident BNY a sorti ses instruments afin de tester une nouvelle expérience en live."
              />,
              <Event
                key={0}
                image="/images/fetemu.jpg"
                title="Braderie 2019"
                date="31/08/2019"
                lieu="Le Relax (Lille)"
                patients="Inconnu"
                description="Interventions de praticiens externes de la scène locale, sélectionné.e.s par l'équipe Arkam."
              />,
              <Event
                key={0}
                image="/images/karnage.png"
                title="Karnage"
                date="13/07/2019"
                lieu="Resto Soleil (Lille)"
                patients="100"
                description="Première expérimentation visuelle avancée ; réaction positive des patients."
              />,
              <Event
                key={0}
                image="/images/asilomar.png"
                title="Asilomar"
                date="11/07/2019"
                lieu="L'université catholique de Lille (Lille)"
                patients="50"
                description="Pour appuyer les propos du colloque international: Ethique et transhumanisme. Hypnothérapie par visuel animé afin de capter l'auditoire."
              />,
              <Event
                key={0}
                image="/images/fetemu.jpg"
                title="Fête de la musique"
                date="21/06/2019"
                lieu="Le Relax (Lille)"
                patients="Inconnu"
                description="Demande gouvernementale d'utiliser nos compétences pour soigner la population. Résultat concluant."
              />,
              <Event
                key={0}
                image="/images/Vakarm2.png"
                title="Varkam #2"
                date="20/04/2019"
                lieu="Circus(Lille)"
                patients="120"
                description="Notre analyse est formelle : nos médecins sont suffisamment formés pour étendre notre champ d'action."
              />,
              <Event
                key={0}
                image="/images/future.png"
                title="Shape the Future"
                date="13/04/2019"
                lieu="Gare Saint Sauveur (Lille)"
                patients="1000"
                description="Investissement du lieu emblématique de la vie lilloise. Test de Résistance face à une percussion intense."
              />,
              <Event
                key={0}
                image="/images/nuit.png"
                title="Les nuits de l'archi"
                date="06/04/2019"
                lieu="Cimenterie Delwart (Tournai)"
                patients="400"
                description="Première exportation de notre thérapie, qui prend une tournure Européenne."
              />,
              <Event
                key={0}
                image="/images/house.jpg"
                title="In Da House"
                date="05/04/2019"
                lieu="Chez Ben (Lille)"
                patients="120"
                description="Nouvelle médication qui a permis à la foule d'entrer en état de transe, possibilité d'élargir l'essai."
              />,
              <Event
                key={0}
                image="/images/asylum2.png"
                title="Arkam Asylum #2"
                date="02/03/2019"
                lieu="Open Bar café(Lille)"
                patients="80"
                description="Retour au labo souterrain principal pour un 2e essai."
              />,
              <Event
                key={0}
                image="/images/Varkam1.png"
                title="Varkam #1"
                date="01/02/2019"
                lieu="Circus(Lille)"
                patients="100"
                description="La musique semble être efficace pour soulager les maux du quotidien de nos patients."
              />,
              <Event
                key={0}
                image="/images/asylum1.jpg"
                title="Arkam Asylum #1"
                date="13/10/2018"
                lieu="Open Bar café (Lille)"
                patients="60"
                description="Patients réceptifs, premier essai clinique satisfaisant.
              La thérapie semble continuer son action méliorative, notre organisation est prête pour accueillir plus de cobayes."
              />,
            ]}
          />

        </section>

        <section
          id="projets"
          className="bg-black md:px-40 pt-20 md:pt-32 pb-16 text-white bg-conver bg-center bg-no-repeat"
          style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 30%), linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 30%), url("/images/hero.jpg")' }}
        >
          <Title className="md:mt-20">Projets</Title>

          <div className="flex flex-col md:flex-row gap-4 md:gap-32 mx-2 mt-8 md:mt-32">

            <Project
              patients="50"
              date="12/02/2022"
              title="Labo d'Arkam"
              image="/images/project-0.jpg"
              lieu="Cinéma l'Unisvers (Lille)"
              description="Semaine de résidence artistique audiovisuelle au cinéma l'Univers. Exposition d'installations vidéo interactives, audio réactives."
            >
              <span className="cursor-default inline-block px-2 py-0.5 bg-white/20 hover:bg-white/40 rounded-full border border-white/20 text-sm md:text-base">Cinéma l&apos;Univers</span>
              <span className="cursor-default inline-block px-2 py-0.5 bg-white/20 hover:bg-white/40 rounded-full border border-white/20 text-sm md:text-base">Jules Huvig</span>
              <span className="cursor-default inline-block px-2 py-0.5 bg-white/20 hover:bg-white/40 rounded-full border border-white/20 text-sm md:text-base">Simon Cauwelier</span>
              <span className="cursor-default inline-block px-2 py-0.5 bg-white/20 hover:bg-white/40 rounded-full border border-white/20 text-sm md:text-base">Paul Gracia</span>
              <span className="cursor-default inline-block px-2 py-0.5 bg-white/20 hover:bg-white/40 rounded-full border border-white/20 text-sm md:text-base">Rimak Frimakry</span>
              <span className="cursor-default inline-block px-2 py-0.5 bg-white/20 hover:bg-white/40 rounded-full border border-white/20 text-sm md:text-base">Thomas Chevalier</span>
              <span className="cursor-default inline-block px-2 py-0.5 bg-white/20 hover:bg-white/40 rounded-full border border-white/20 text-sm md:text-base">Trickart</span>
            </Project>

            <Project
              title="Regard Sonore"
              image="/images/project-1.jpg"
              description="Collaboration entre Yannic Seddiki et Arkam pour proposer un live audiovisuel piano solo / vidéomapping. Fabrication de capteurs interactifs pour piano à queue. Visuel temps réel sur les morceaux du pianiste. Volonté de visualiser la musique. Le projet vise également un public de sourds et malentendants."
            >
              <span className="inline-block px-2 py-0.5 bg-white/20 hover:bg-white/40 rounded-full border border-white/20">Yannic Seddiki</span>
              <span className="inline-block px-2 py-0.5 bg-white/20 hover:bg-white/40 rounded-full border border-white/20">Trickart</span>
              <span className="inline-block px-2 py-0.5 bg-white/20 hover:bg-white/40 rounded-full border border-white/20">Jazz en Nord</span>
              <span className="inline-block px-2 py-0.5 bg-white/20 hover:bg-white/40 rounded-full border border-white/20">Crédit mutuel</span>
            </Project>
          </div>
        </section>

        <section id="poles" className="bg-black md:px-40 pt-20 md:pt-16 pb-12 text-white">
          <Title>Pôles</Title>

          <div className="flex flex-col md:flex-row justify-between pt-8 md:pt-32">
            <Poles
              image="/images/residents.jpg"
              nom="Pôle Résidents"
              description="Artistes fous, créatifs névrosés et insomniaques à leurs heures, ils font de chaque événement une expérience unique."
              url="/poles/residents"
            />
            <Poles
              image="/images/admin.jpg"
              nom="Pôle Administratif"
              description="Dirigeants d'une main de fer, ils rendent possibles les actions imaginées par le collectif."
              url=""
            />
            <Poles
              image="/images/com.jpg"
              nom="Pôle Communication"
              description="Graphistes, écrivains et instagrammers , ils assurent le lien entre vous et nous."
              url=""
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between pt-10">
            <Poles
              image="/images/logistique.jpg"
              nom="Pôle Technique"
              description="Gros bras et génies de l'orga, ils font prendre vie à nos événements."
              url=""
            />
            <Poles
              image="/images/programmation.jpg"
              nom="Pôle Programmation"
              description="Dénicheurs de talents de l'extrême, ils trouvent toujours la perle rare..."
              url=""
            />

            <Poles
              image="/images/diffusion.jpg"
              nom="Pôle Diffusion"
              description="Adeptes du téléphone aux capacités oratoires sans limites, dénicheurs de “place to be”, ils rendent visible l'association. "
              url=""
            />
          </div>
        </section>

        <section id="contact" className="bg-black md:px-40 pt-20 md:pt-24 pb-16 text-white"
          style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 30%), linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 30%), url("/images/hero 2.jpg")' }}
        >
          <Title>Contact</Title>

          <p className="bg-black/30 rounded-lg backdrop-blur-md md:text-lg text-center mx-2 mt-16 md:mt-32 p-4">
            Vous êtes intéressés par notre association, vous souhaitez nous rejoindre, ou vous aimeriez nous produire, rien de plus simple, contactez-nous !
          </p>

          <div className="flex flex-row justify-center">
            <Link href="mailto:contact.arkam@gmail.com" target="_blank" rel="noreferrer" className="mt-16 text-white text-sm md:text-base border font-semibold border-white/40 rounded-md bg-black/60 backdrop-blur-lg flex flex-row items-center gap-3 px-8 py-4 hover:bg-white/10 hover:scale-105 uppercase">
              <span>Contactez nous</span>
              <FontAwesomeIcon icon={faPaperPlane} />
            </Link>
          </div>

          <div className="flex flex-row justify-center gap-16 mt-16">
            <Link href="https://www.facebook.com/ARKAMLILLE/" target="_blank" rel="noreferrer" className="hover:text-white/60">
              <FontAwesomeIcon icon={faFacebook} size="4x"  className="hidden md:block" />
              <FontAwesomeIcon icon={faFacebook} size="2x"  className="block md:hidden" />
            </Link>

            <Link href="https://www.instagram.com/arkamrecords/" target="_blank" rel="noreferrer" className="hover:text-white/60">
              <FontAwesomeIcon icon={faInstagram} size="4x"  className="hidden md:block" />
              <FontAwesomeIcon icon={faInstagram} size="2x"  className="block md:hidden" />
            </Link>

            <Link href="https://soundcloud.com/arkamrecords" target="_blank" rel="noreferrer" className="hover:text-white/60">
              <FontAwesomeIcon icon={faSoundcloud} size="4x"  className="hidden md:block" />
              <FontAwesomeIcon icon={faSoundcloud} size="2x"  className="block md:hidden" />
            </Link>
          </div>

        </section>

        <section className="bg-black text-white md:px-40 pt-8 pb-24">

          <p className="text-center text-xl mt-8">Notre association compte sur vous !</p>

          <div className="flex flex-row justify-center">
            <Link href="https://www.helloasso.com/associations/ark-a-m" target="_blank" rel="noreferrer" className="mt-8 text-white border font-semibold border-white rounded-md bg-black backdrop-blur-lg flex flex-row items-center gap-3 px-8 py-4 hover:bg-white/10 hover:scale-105 uppercase">
              <span>Soutenez nous</span>
            </Link>
          </div>

          <Link href="/" className="flex flex-row justify-center mt-8" onClick={() => window.scrollTo({ top: 0 })}>
            <Image src="/logo.png" width="80" height="80" alt="Arkam Logo" />
          </Link>

        </section>
      </main>
    </>
  )
}
