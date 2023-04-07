
import { FunctionComponent } from 'react';


interface ResidentsCardProps {
  faceDj: string;
  nomDj: string;
  styleMusic: string;
  influence: string;
  descriptionDj: string;
  boutonMusic: string;
  texteBouton: string;
  reverse?: boolean;
};

export const ResidentsCard: FunctionComponent<ResidentsCardProps> = ({ faceDj, nomDj, styleMusic, influence, descriptionDj, boutonMusic, texteBouton, reverse = false }) => {

  return (
    <div className={`flex ${ reverse ? 'flex-row-reverse' : 'flex-row' } gap-4 text-white mx-40 mt-16`}>
      {/* <Image src={faceDj} width="250" height="250" alt="BNY" className="rounded-full" style={{ minWidth: '250px' }} /> */}
      <div
        className="z-10 bg-center bg-no-repeat rounded-full shrink-0"
        style={{ backgroundImage: `url(${faceDj})`, width: '250px', height: '250px' }}
      />
      <div className={`flex flex-col ${ reverse ? 'items-end' : 'items-start' }`}>
        <h2 className="font-extrabold text-2xl">{nomDj}</h2>
        <h3 className="text-lg">{styleMusic}</h3>
        <h3 className="text-lg">{influence}</h3>
        <p className="pt-4 justify-start">{descriptionDj}</p>
        <a href={boutonMusic} target="_blank" rel="noreferrer" className="mt-10 text-white border font-semibold border-white/40 rounded-md bg-white/5 backdrop-blur-lg  items-center gap-3 px-8 py-4 hover:bg-white/10 hover:scale-105 uppercase">
          <span>{texteBouton}</span>
        </a>          
      </div>
    </div>
  );
};