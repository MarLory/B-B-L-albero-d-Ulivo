import Description from "../atoms/Description";
import Image from "../atoms/Image";
import Subtitle from "../atoms/Subtitle";


export default function RoomCard({ imageSrc, imageName, price, description }) {

    return (

        <>
            <article aria-label={imageName} className="flex flex-col md:relative md:group shadow-lg rounded-lg overflow-hidden ">

             
                <Image
                    link={imageSrc}
                    alt={imageName}
                    className="w-full h-80 md:h-96 object-cover"
                />
           
                

            <div className="hidden md:block absolute inset-0 group-hover:bg-black/40 " />

            {/* Prezzo in alto a sx */}
            <div className="hidden md:block absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-lg font-bold">
                {price} € / notte
            </div>

            {/* Nome della camera in basso a sx */}
            <div className="hidden md:block absolute bottom-4 left-4 text-white text-2xl font-bold">
                {imageName}
            </div>

                {/* Pulsante per DESKTOP, centrato sopra il nome della camera */}
            <div className="hidden md:flex absolute inset-x-0 bottom-16 justify-center">
                <a
                    href="#contatti"
                    aria-label={`Richiedi disponibilità per ${imageName}`}
                    className="bg-white text-[var(--text-primario)] px-5 py-2 rounded-md font-semibold shadow-md hover:bg-gray-100 transition"
                >
                    Richiedi disponibilità
                </a>
            </div>
 </article>
            {/* Contenuto per MOBILE */}
            <div className="md:hidden bg-white p-4">
                <Subtitle className="not-italic font-bold">{imageName}</Subtitle>
                <Description className="mt-1">{description}</Description>
                <p className="text-[var(--text-primario)] font-semibold">{price} € / notte</p>

                 {/* Pulsante per MOBILE */}
                <a
                    href="#contatti"
                    aria-label={`Richiedi disponibilità per ${imageName}`}
                    className="mt-3 block w-full text-center bg-[var(--text-primario)] text-white px-4 py-2 rounded-md font-semibold"
                >
                    Richiedi disponibilità
                </a>
            </div>

    
        </>
    );
}







