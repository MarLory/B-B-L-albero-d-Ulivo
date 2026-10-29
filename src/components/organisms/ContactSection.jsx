import Title from "../atoms/Title"
import Subtitle from "../atoms/Subtitle"
import Telephone from "../atoms/Telephone"

export default function ContactSection ({id}) {

return (
    <>
    <section id="contatti" className="mt-16 py-16 border-t-2 border-[var(--bg-foo)] relative">
      <div className="max-w-7xl mx-auto px-6">
        

        <div className="text-center mb-12">
          <Title>Contatti</Title>
          <Subtitle>Contattaci per ricevere informazioni!</Subtitle>
        </div>

        {/* Layout 2 colonne */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Mappa */}
          <div className="w-full h-[400px]">
            <iframe
              title="Mappa di Isola di Capo Rizzuto"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99278.9547020138!2d16.994761953007522!3d38.95899565861368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134039f54d97e625%3A0x40b95ae4ee27540!2s88841%20Isola%20di%20Capo%20Rizzuto%20KR!5e0!3m2!1sit!2sit!4v1793265826150!5m2!1sit!2sit"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
           
          </div>

          <div className=" p-6 rounded-2xl shadow-xl text-about mb-10">
            <Telephone></Telephone>
            <form className="space-y-4 text-about font-semibold">
              <label htmlFor="nome">Nome</label>
              <input id="nome" type="text" placeholder="Nome" className="w-full border p-3 rounded-lg" />
              <label htmlFor="cognome">Cognome</label>
              <input id="cognome" type="text" placeholder="Cognome" className="w-full border p-3 rounded-lg" />
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Email" className="w-full border p-3 rounded-lg" />
              <label htmlFor="messaggio">Messaggio</label>
              <textarea id="messaggio" placeholder="Messaggio" className="w-full border p-3 rounded-lg h-32"></textarea>
              <button type="submit" className="bg-[var(--text-primario)] text-white px-6 py-3 rounded-lg hover:bg-[var(--accento)] transition">
                Invia
              </button>
            </form>
          </div>  
        </div>
      </div>

      <a href="#top" className="absolute bottom-6 right-6 bg-[var(--text-primario)] text-white p-2 rounded-full shadow-lg md:hover:bg-[var(--accento)] transition">
        ↑
      </a>
    </section>
    </>
    )
}



