# Introduksjon til React - en workshop

Dette er en workshop for deg som vil lære React, eller som vil få en litt mer strukturert introduksjon til dette rammeverket.

Workshopen er **ikke ferdig enda**, men tar sikte på å ferdigstilles innen sommeren 2019. 

## Oppgaver
Vi skal lage den neste SoMe-hypen: Bekkstagram! 

Hver oppgave har en lenke til en CodeSandbox der du kan implementere oppgaven. Oppgaven er løst når testene under "Tests"-fanen blir grønne.

### Oppgave 1: Hei verden!
La oss starte med basics. Få React til å skrive ut en `<h1 />`-tag med teksten "Bekkstagram" inni.

https://codesandbox.io/s/64xvkjl7k3

### Oppgave 2: Din første komponent!
Lag en ny komponent, Header, som skriver ut en `<h1 />`-tag med teksten "Bekkstagram" inni, og bruk den i appen din.

https://codesandbox.io/s/nwlvzqzm3p

### Oppgave 3: Bilde-komponent
Komponenter er morsommere når man bruker props. Lag en ny komponent `Image` som tar i mot to props, `src` og `alt`, og som lager en `<img />`-tag som bruker disse to propsa.

Legg også på css-klassen `image` på `<img />`-taggen, så får den tilogmed riktig design!

https://codesandbox.io/s/8njr15z4x8

### Oppgave 4: En liste med bilder
Det beste med komponenter er at man kan bruke dem gang på gang. I denne oppgaven skal du loope ut en liste med bilder. Listen finner du i code-sandboxen.

Husk at du trenger en unik `key` for hvert element i lista - ellers vet ikke React hvilket element som endrer seg!

https://codesandbox.io/s/w0n3nr56ww

## Oppsett

### Klone repoet
Åpne en terminal, naviger til mappen du vil lagre kildekoden i og kjør følgende kommando for å klone github-repoet:

`git clone git@github.com:bekk/react-intro.git`

### Osv.

## Løsningsforslag

Står du fast? Løsningsforslag til hver oppgave ligger under /løsningsforslag.
