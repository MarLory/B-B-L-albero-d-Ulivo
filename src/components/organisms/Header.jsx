import copertina from "../../assets/media/isolacapo.jpg";
import Button from "../atoms/Button";

export default function Header() {
  return (
    <header className="relative w-full h-[80vh] pt-32 overflow-hidden">
      {/* Immagine di sfondo */}
      <img
        src={copertina}
        alt="cover sito"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay trasparente scuro */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenuto centrato sopra l’immagine */}
      <div className="relative z-20 flex flex-col justify-center items-center text-white text-center h-full px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Soggiorna al B&B L’albero d’Ulivo
        </h1>
        <h2 className="text-xl md:text-2xl mb-6">
          Scopri la Calabria autentica
        </h2>

        <Button
          href="#" >
          Contattaci su WhatsApp
        </Button>
      </div>
    </header>
  );
}



