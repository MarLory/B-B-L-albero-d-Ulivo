# React + Vite
Ho scelto di non usare React Router DOM poiché la landing è single-page con ancore interne, ma sono in grado di integrarlo rapidamente per navigazione multi-pagina.

- per il ridimensionamento su smartphone ho inserito nell'index.html questa linea di codice: <meta name="viewport" content="width=device-width, initial-scale=1" />

- Ho creato un componente ContactSection anche se non verrà riutilizzato altrove perchè voglio mantenere il codice pulito.

- html {
  scroll-behavior: smooth; --> serve per lo scroll dolce verso la sezione corrispondente 
}