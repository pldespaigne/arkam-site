
import { NextPage } from 'next';

import { Head } from '@arkam/components/Head';
import { PolesLayout } from '@arkam/components/PolesLayout';
import { ResidentsCard } from '@arkam/components/ResidentsCard';


const Residents: NextPage = () => {

  return (
    <>
      <Head />
      <PolesLayout>
        <section className="bg-black min-h-screen relative py-32">
          <div style={{ backgroundImage: 'url("/logo.png")' }} className="z-0 bg-center bg-contain bg-no-repeat absolute inset-0 opacity-5"/>    
          
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
            boutonMusic="https://soundcloud.com/bnyxz"
            texteBouton="J'écoute un set de BNY"
          />

          <ResidentsCard
            faceDj="/images/sand.png"
            nomDj="Sand"
            styleMusic="VJing"
            influence=""
            descriptionDj="► Armée de son sable numérique, Sand construit un monde étrange et poétique où les opposés s’enlacent. Elle vous invite à lâcher le fil du temps pour déambuler avec elle dans un dédale mouvant où les concepts répondent aux sons. Alors n’ayez pas peur, gardez les yeux ouverts et laissez vous guider par la lumière."
            boutonMusic="https://www.facebook.com/Trickart.visual"
            texteBouton="Voir les création de Sand"
            instagram="https://www.instagram.com/sand_ashes"
            reverse
          />

          <ResidentsCard
            faceDj="/images/max.png"
            nomDj="Dr Watzmann"
            styleMusic="Euphoric Frenchcore"
            influence="Influences : Sefa, Dr. Peacok, Rayvolt, Crypton"
            descriptionDj="► Résident et co-créateur de ARKAM, Dr. Watzmann a pour ambition de surprendre l'auditeur au travers de sets énergiques, brutaux et mélodiques. Il a pour crédo de défier le public en lui transmettant son énergie infernale. D'humeur excessive, tout est dans la provocation et le non consenti. Ses influences musicales ne trouvent pas de stabilité tant qu'elles lui permettent de s’immiscer dans votre sauvagerie innée."
            boutonMusic="https://soundcloud.com/dr-watzmann"
            texteBouton="J'écoute un set de Dr Watzmann"
          />

          <ResidentsCard
            faceDj="/images/yo.png"
            nomDj="La Potion"
            styleMusic="VJing"
            influence=""
            descriptionDj="► Yohan, aka La Potion, a intégré l’équipe Arkam en 2018. En tant que graphiste de l’équipe, Yohan réalise les affiches et bannières de nos évènements pour vous attirer dans notre univers. Vous le retrouverez également sur scène, derrière les platines de vjing pour mixer ses créations visuelles et mettre en lumière nos DJs."
            boutonMusic="https://www.facebook.com/Trickart.visual"
            texteBouton="Voir les création de La potion"
            instagram="https://www.instagram.com/lapotion.fr/"
            reverse
          />

          <ResidentsCard
            faceDj="/images/nico.png"
            nomDj="Makiae"
            styleMusic="Rave | Early hardstyle"
            influence="Influences : AnD, Rave Alert, Banzai Records, Insolent Rave Records, SAIKE"
            descriptionDj="► DJ résident à ARKAM depuis leurs débuts, Makiae puise ses dernières inspirations à travers l’indus, la hard techno et le gabber. Il aime donner de l’énergie à travers ses sets grâce à des drops foudroyants et des sons percutants.
            Entre sonorités aussi bien stridentes que mélodiques, le tout agrémenté par des puissants kicks, c’est un véritable cocktail explosif qu’il vous proposera à St So. On a hâte de le voir pour ce closing qui, on l’espère, ne vous laissera clairement pas indifférent !"
            boutonMusic="https://soundcloud.com/makiae/"
            texteBouton="J'écoute un set de Makiae"
            instagram="https://www.instagram.com/makiae_br/"
          />

          <ResidentsCard
            faceDj="/images/vinc.png"
            nomDj="Neuronn"
            styleMusic="Euphoric Frenchcore"
            influence="Influences : Sefa, Dr. Peacok, Rayvolt, Crypton"
            descriptionDj="► Résident et co-créateur de ARKAM, Neurone est fortement influencé par la scène UK. Ses sets s’articulent autour de la House, Bass House et Techno. S'occupant bien souvent des warm up, il passe progressivement des sonorités chaudes et groovy à d'autres plus sombres et déstructurées."
            boutonMusic="https://soundcloud.com/neurone-arkam"
            texteBouton="J'écoute un set de Neuron"
            instagram="https://www.instagram.com/neurone5/"
            reverse
          />

          <ResidentsCard
            faceDj="/images/fab.png"
            nomDj="TeseracT"
            styleMusic="Euphoric Frenchcore"
            influence="Influences : Sefa, Dr. Peacok, Rayvolt, Crypton"
            descriptionDj="► Le plus ancien d’entre nous a forcément une vision plus globale de la musique électronique. Il gomme les écarts générationnels au travers de son set, et ce n’est pas les drops qu’il lâche qui diront le contraire. Il puise son inspiration d’un objet en 4 dimensions, TesseracT vous fera voyager de l’origine de la techno à la hard techno actuelle. Un voyage temporel pour vos oreilles et vos pieds qui n’arrêteront pas de gesticuler."
            boutonMusic="https://on.soundcloud.com/sCZqG"
            texteBouton="J'écoute un set de Dr Watzamm"
            instagram="https://www.instagram.com/tesseract_arkam/"
          />
        </section>
      </PolesLayout>
    </>
  );
};

export default Residents;
