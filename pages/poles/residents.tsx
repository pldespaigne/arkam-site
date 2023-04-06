
import { NextPage } from "next";
import Image from "next/image";
import { PolesLayout } from "../../components/PolesLayout";
import { ResidentsCard } from "../../components/ResidentsCard";


const Residents: NextPage = () => {

  return (
    <>
    <PolesLayout>
      <section className="bg-black min-h-screen pt-20 relative pb-20">
        <div style={{ backgroundImage: ' url("/logo.png")' }} className="z-0 bg-center bg-contain bg-no-repeat absolute inset-0 opacity-20"/>    
        
        <div className="flex flex-row gap-2 mt-10 mx-40">
          <h1 className="text-white font-semibold text-5xl whitespace-nowrap">Pôle Résidents</h1>
          <div className="w-full mb-2 border-b border-white"/>
        </div>
      
        <ResidentsCard
          faceDj="/images/BNY.png"
          nomDj="BNY"
          styleMusic="Hardtrance | Hardcore | Hardstyle"
          influence="Influences : Tatanka, TNT, The Sickest Squad, Second Identity"
          descriptionDj="► Résident et co-créateur d’ARKAM, BNY vous embarque dans son laboratoire électronique. Concepteur de profession, c’est le soir venu qu’il laisse place aux expérimentations de tout genre sur les machines. Venant d’un univers Acid, il vous plongera cette fois-ci dans les plus sombres recoins de son esprit avec une sélection énergique et mélodique sur base de gros kick et basse lourde."
          boutonMusic="https://www.mixcloud.com/ARK_A_M/bny-set/"
          texteBouton="J'écoute un set de BNY"
        />

        <ResidentsCard
          faceDj="/images/max.png"
          nomDj="Dr Watzmann"
          styleMusic="Euphoric Frenchcore"
          influence="Influences : Sefa, Dr. Peacok, Rayvolt, Crypton"
          descriptionDj="► Résident et co-créateur de ARKAM, Dr. Watzmann a pour ambition de surprendre l'auditeur au travers de sets énergiques, brutaux et mélodiques. Il a pour crédo de défier le public en lui transmettant son énergie infernale. D'humeur excessive, tout est dans la provocation et le non consenti. Ses influences musicales ne trouvent pas de stabilité tant qu'elles lui permettent de s’immiscer dans votre sauvagerie innée."
          boutonMusic="https://www.mixcloud.com/ARK_A_M/dr-watzmann-hiphop-murder/"
          texteBouton="J'écoute un set de Dr Watzmann"
          reverse
        />

        <ResidentsCard
          faceDj="/images/nico.png"
          nomDj="Makiae"
          styleMusic="Rave | Early hardstyle"
          influence="Influences : AnD, Rave Alert, Banzai Records, Insolent Rave Records, SAIKE"
          descriptionDj="► DJ résident à ARKAM depuis leurs débuts, Makiae puise ses dernières inspirations à travers l’indus, la hard techno et le gabber. Il aime donner de l’énergie à travers ses sets grâce à des drops foudroyants et des sons percutants.
          Entre sonorités aussi bien stridentes que mélodiques, le tout agrémenté par des puissants kicks, c’est un véritable cocktail explosif qu’il vous proposera à St So. On a hâte de le voir pour ce closing qui, on l’espère, ne vous laissera clairement pas indifférent !
          soundcloud.com/makiae
          "
          
          // TODO !!!!
          boutonMusic="https://www.mixcloud.com/ARK_A_M/dr-watzmann-hiphop-murder/"
          texteBouton="J'écoute un set de Makiae"
        />

        <ResidentsCard
          faceDj="/images/max.png"
          nomDj="Neuronn"
          styleMusic="Euphoric Frenchcore"
          influence="Influences : Sefa, Dr. Peacok, Rayvolt, Crypton"
          descriptionDj="► Résident et co-créateur de ARKAM, Dr. Watzmann a pour ambition de surprendre l'auditeur au travers de sets énergiques, brutaux et mélodiques. Il a pour crédo de défier le public en lui transmettant son énergie infernale. D'humeur excessive, tout est dans la provocation et le non consenti. Ses influences musicales ne trouvent pas de stabilité tant qu'elles lui permettent de s’immiscer dans votre sauvagerie innée."
          boutonMusic="https://www.mixcloud.com/ARK_A_M/dr-watzmann-hiphop-murder/"
          texteBouton="J'écoute un set de Dr Watzamm"
          reverse
        />

        <ResidentsCard
          faceDj="/images/max.png"
          nomDj="TeseracT"
          styleMusic="Euphoric Frenchcore"
          influence="Influences : Sefa, Dr. Peacok, Rayvolt, Crypton"
          descriptionDj="► Résident et co-créateur de ARKAM, Dr. Watzmann a pour ambition de surprendre l'auditeur au travers de sets énergiques, brutaux et mélodiques. Il a pour crédo de défier le public en lui transmettant son énergie infernale. D'humeur excessive, tout est dans la provocation et le non consenti. Ses influences musicales ne trouvent pas de stabilité tant qu'elles lui permettent de s’immiscer dans votre sauvagerie innée."
          boutonMusic="https://www.mixcloud.com/ARK_A_M/dr-watzmann-hiphop-murder/"
          texteBouton="J'écoute un set de Dr Watzamm"
        />

        <ResidentsCard
          faceDj="/images/max.png"
          nomDj="Dr Watzmann"
          styleMusic="Euphoric Frenchcore"
          influence="Influences : Sefa, Dr. Peacok, Rayvolt, Crypton"
          descriptionDj="► Résident et co-créateur de ARKAM, Dr. Watzmann a pour ambition de surprendre l'auditeur au travers de sets énergiques, brutaux et mélodiques. Il a pour crédo de défier le public en lui transmettant son énergie infernale. D'humeur excessive, tout est dans la provocation et le non consenti. Ses influences musicales ne trouvent pas de stabilité tant qu'elles lui permettent de s’immiscer dans votre sauvagerie innée."
          boutonMusic="https://www.mixcloud.com/ARK_A_M/dr-watzmann-hiphop-murder/"
          texteBouton="J'écoute un set de Dr Watzamm"
          reverse
        />
      </section>
    </PolesLayout>
    </>
  );
};

export default Residents;
