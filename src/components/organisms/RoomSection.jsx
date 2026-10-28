import Title from '../atoms/Title';
import Subtitle from '../atoms/Subtitle';
import Description from '../atoms/Description';
import RoomCard from '../molecules/RoomCard';
import stanza1 from '../../assets/media/Stanza1.png'
import stanza2 from '../../assets/media/Stanza2.png'
import stanza3 from '../../assets/media/Stanza3.png'


const roomsData = [
  {
    imageSrc: stanza1,
    imageName: 'Camera Olivo',
    price: 80,
    description: 'Calda e rilassante, con vista sul giardino.'
  },
  {
    imageSrc: stanza2,
    imageName: 'Camera Mare',
    price: 90,
    description: 'Toni azzurri e freschi, ispirati alla costa.'
  },
  {
    imageSrc: stanza3,
    imageName: 'Camera Terra',
    price: 90,
    description: 'Atmosfera rustica e accogliente, perfetta per disconnettersi.'
  }
];

export default function RoomsSection({id}) {
  return (
    <section id={id} className="mt-16 py-12" aria-labelledby="rooms-title">

      <div className="max-w-7xl mx-auto px-6">
        {/* Intestazione della sezione */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-end">

          <div>
            <Title id="rooms-title">Le nostre camere</Title>
            <Subtitle>Le migliori camere solo per te!</Subtitle>
          </div>

          <div>
            <Description>
              Accoglienti, luminose e arredate con uno stile essenziale ispirato alla natura calabrese, le nostre camere offrono tutto il comfort per un soggiorno rilassante.
              Ogni stanza è dotata di bagno privato, Wi-Fi gratuito, aria condizionata e un’atmosfera intima e tranquilla — ideale per coppie, viaggiatori solitari o piccoli nuclei familiari.
            </Description>
          </div>
        </div>

        {/* Griglia delle camere dinamica */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <RoomCard
              key={room.imageName}
              imageSrc={room.imageSrc}
              imageName={room.imageName}
              price={room.price}
              description={room.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


