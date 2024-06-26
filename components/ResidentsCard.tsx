
import { FunctionComponent } from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface ResidentsCardProps {
  faceDj: string;
  nomDj: string;
  styleMusic: string;
  influence: string;
  descriptionDj: string;
  boutonMusic: string;
  texteBouton: string;
  instagram?: string;
  reverse?: boolean;
};

export const ResidentsCard: FunctionComponent<ResidentsCardProps> = ({ faceDj, nomDj, styleMusic, influence, descriptionDj, boutonMusic, texteBouton, instagram, reverse = false }) => {

  return (
    <div className={`flex ${ reverse ? 'md:flex-row-reverse' : 'md:flex-row' } flex-col items-center md:items-start gap-4 text-white mx-4 md:mx-40 mt-16`}>
      <div
        className="z-10 bg-center bg-contain bg-no-repeat rounded-full shrink-0"
        style={{ backgroundImage: `url(${faceDj})`, width: '250px', height: '250px' }}
      />
      <div className={`flex flex-col ${ reverse ? 'items-end' : 'items-start' }`}>
        <h2 className={`w-full font-extrabold text-2xl text-glow text-center ${ reverse ? 'md:text-right' : 'md:text-left' }`}>{nomDj}</h2>
        <h3 className={`w-full text-xl text-center ${ reverse ? 'md:text-right' : 'md:text-left' }`}>{styleMusic}</h3>
        <h3 className={`w-full md:text-lg text-slate-500 text-center ${ reverse ? 'md:text-right' : 'md:text-left' }`}>{influence}</h3>
        <p className={`text-slate-300 pt-4 justify-start text-sm text-justify ${reverse ? 'md:pl-32' : 'md:pr-32'}`}>{descriptionDj}</p>
        <div className={`w-full mt-6 flex items-center gap-6 justify-center md:justify-start ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
          <a href={boutonMusic} target="_blank" rel="noreferrer" className="text-white text-glow text-xs md:text-sm border font-semibold border-white/40 rounded-lg bg-white/5 backdrop-blur-lg items-center gap-3 px-4 md:px-8 py-3 md:py-4 hover:bg-white/10 hover:scale-105 uppercase">
            <span>{texteBouton}</span>
          </a>
          {
            instagram
              ? <a href={instagram} target="_blank" rel="noreferrer" className="relative group h-10 w-10 md:h-14 md:w-14 border border-white/40 rounded-lg bg-white/5 backdrop-blur-lg hover:bg-white/10 hover:scale-105">
                  <FontAwesomeIcon icon={faInstagram} size="2x" className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 group-hover:opacity-100" />
                  <FontAwesomeIcon icon={faInstagram} size="lg" className="block md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 group-hover:opacity-100" />
                </a>
              : ''
          }
        </div>
      </div>
    </div>
  );
};