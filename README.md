B&B L'Albero d'Ulivo

Landing page dimostrativa per un bed & breakfast immaginario sulla costa ionica calabrese. È un progetto di esercitazione: il nome della struttura e tutti i dati (indirizzo, telefono, email, partita IVA) sono fittizi.

Guarda la landing page online: https://b-b-l-albero-d-ulivo.vercel.app/

Anteprima della landing page
<img width="1349" height="600" alt="Screenshot 2026-10-28 alle 18 05 17" src="https://github.com/user-attachments/assets/07f7165d-b82f-4d39-a338-b50af53e075a" />


Obiettivo:

Realizzare una landing page su una sola pagina, pensata per presentare una struttura ricettiva e invitare il visitatore a contattarla. Con questo progetto mi sono esercitata su tre aspetti:

organizzazione del codice in componenti riutilizzabili
layout responsive con Tailwind CSS
navigazione tra le sezioni all'interno della stessa pagina

Sezioni della pagina:
Header con logo e menu fisso (Home, Chi siamo, Camere, Servizi, Contatti)
Hero con titolo, sottotitolo e pulsante per contattare la struttura su WhatsApp
Chi siamo: presentazione della struttura
Camere: tre camere con prezzo per notte
Servizi: elenco dei servizi inclusi
Contatti: mappa, numero di telefono e modulo di contatto
Footer con recapiti, social e informazioni legali

Tecnologie usate:
React
Vite
Tailwind CSS
Organizzazione del codice

Ho seguito il metodo Atomic Design: si parte da elementi piccoli e si combinano in elementi sempre più grandi, fino alla pagina completa.

src/
├── assets/media/        immagini
├── components/
│   ├── atoms/           elementi base (Button, Title, Subtitle, Image...)
│   ├── molecules/       combinazioni di elementi base
│   └── organisms/       sezioni (Header, Navbar, RoomSection, ContactSection, Footer...)
├── layouts/
└── pages/               Home

Nota:

Progetto realizzato a scopo didattico e dimostrativo, senza finalità commerciali. Ogni riferimento a strutture, persone o attività reali è puramente casuale.

Autrice

Maria Rotiroti · Profilo GitHub
