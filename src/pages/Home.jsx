import "../App.css"
import Header from "../components/organisms/Header"
import Navbar from "../components/organisms/Navbar"
import RoomsSection from "../components/organisms/RoomSection"
import CardSection from "../components/organisms/CardsSection"
import Title from "../components/atoms/Title"
import ContactSection from "../components/organisms/ContactSection"
import Footer from "../components/organisms/Footer"
import chiS1 from '../assets/media/ChiS1.png'
import chiS2 from '../assets/media/ChiS2.png'
import serv1 from '../assets/media/Serv1.png'
import serv2 from '../assets/media/Serv2.png'


export default function Home() {

  return (

    <>
      <div className="body">
        <Navbar />

        <Header></Header>

        {/**sezione Chi Siamo */}
        <CardSection
          id="chi-siamo"
          title="Chi siamo"
          subtitle="Accoglienza e comfort"
          description="Nel cuore della Calabria ionica, il B&B L'Albero d'Ulivo nasce dal desiderio di offrire un’accoglienza autentica, familiare e immersa nella natura. 
                        Siamo a pochi minuti dal mare, in un angolo di pace dove relax e semplicità si incontrano.
                       Ogni dettaglio del nostro B&B è pensato per farti sentire a casa: camere curate, colazioni con prodotti locali, e il calore di una gestione fatta col cuore."
          images={[
            { src: chiS1, alt: "Immagine tavolo b&b", className: "md:w-4/5" },
            { src: chiS2, alt: "Immagine esterno b&b", className: "md:max-w-[55%] md:mr-58 md:absolute md:mt-36 " }
          ]}

        />



        {/**card camere */}
        <RoomsSection
        id="camere"
        ></RoomsSection>

        {/**card servizi */}
        <CardSection
          id="servizi"
          title="I servizi"
          subtitle="Controlla i nostri servizi inclusi!"
          description="Al B&B L’Albero d'Ulivo curiamo ogni dettaglio per offrirti un soggiorno rilassante e senza pensieri.
          Tutti i nostri ospiti possono usufruire dei seguenti servizi, inclusi nella prenotazione."
          images={[
            { src: serv1, alt: "Immagine tavolo b&b", className: "md:w-4/5" },
            { src: serv2, alt: "Immagine esterno b&b", className: "md:max-w-[55%] md:absolute md:mr-70 md:mt-60" }
          ]}
          className="min-h-[530px]"
        >
          <ol className="list-none text-about mt-4 space-y-2 md:flex md:justify-between font-semibold">
            <li>Colazione calabrese</li>
            <li>Parcheggio</li>
            <li>Wi-Fi</li>
            <li>Spazio Bambini</li>
            <li>Aria condizionata</li>
          </ol>
        </CardSection>

        {/**sezione recensioni */}

        <div className="text-center mt-10 mb-10 p-2">
          <Title>Recensioni</Title>
          <p className="text-about">
            <span className="italic">“Accoglienza calorosa e camere pulite”</span> – Giulia, Milano
          </p>
          <p className="text-about mt-2">
            <span className="italic">“Camere pulite e spaziose, colazione ricca e poi un mare meraviglioso, ci tornerò il prossimo anno!”</span> – Marco, Puglia
          </p>
        </div>

        {/**Sezione contatti */}
        <ContactSection></ContactSection>
       

        <Footer></Footer>
      </div>



    </>
  )
}






