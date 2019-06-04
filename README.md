# Introduksjon til React - en workshop

Dette er en workshop for deg som vil lære React, eller som vil få en litt mer strukturert introduksjon til dette rammeverket.

## Ressurser du kan lese

Det finnes utrolig mye god introduksjonslektyre om React allerede, og hvis du aldri har rørt React før, anbefaler vi at du tar en titt på noen av disse artiklene eller video-kursene. Vi går igjennom noen av disse konseptene i workshopen, men om du tar denne workshopen på egenhånd, eller ikke har mulighet til å være fysisk tilstede, så anbefaler vi at du blar deg gjennom disse tre ressursene:

- [Main Concepts](https://reactjs.org/docs/hello-world.html)-delen av React-dokumentasjonen er en fantastisk innføring i de mest grunnleggende konseptene i React.
- [React Tutorial For Beginners](https://egghead.io/courses/the-beginner-s-guide-to-react)-kurset til Kent C. Dodds er en fantastisk introduksjon til hvordan React fungerer, og forklarer hva React faktisk gjør på en veldig enkel og grei måte.
- [Den offisielle tutorialen](https://reactjs.org/tutorial/tutorial.html) til React er også en veldig lærerik opplevelse. 

## Oppgaver
Vi skal lage den neste SoMe-hypen: Bekkstagram! 

Hver oppgave har en lenke til en CodeSandbox der du kan implementere oppgaven. Oppgaven er løst når testene under "Tests"-fanen blir grønne. Du kan også gå inn på filen "SOLUTION.md" i hver CodeSandbox for å få løsningen (om du skulle sitte fast).

### Del 1: React 101 - De grunnleggende byggesteinene!

#### Oppgave 1: Hei verden!
La oss starte med basics. Få React til å skrive ut en `<h1 />`-tag med teksten "Bekkstagram" inni.

https://codesandbox.io/s/64xvkjl7k3

#### Oppgave 2: Din første komponent!
Lag en ny komponent, Header, som skriver ut en `<h1 />`-tag med teksten "Bekkstagram" inni, og bruk den i appen din.

https://codesandbox.io/s/nwlvzqzm3p

#### Oppgave 3: Bilde-komponent
Komponenter er morsommere når man bruker props. Lag en ny komponent `Image` som tar i mot to props, `src` og `alt`, og som lager en `<img />`-tag som bruker disse to propsa.

Legg også på css-klassen `image` på `<img />`-taggen, så får den tilogmed riktig design!

https://codesandbox.io/s/8njr15z4x8

#### Oppgave 4: En liste med bilder
Det beste med komponenter er at man kan bruke dem gang på gang. I denne oppgaven skal du loope ut en liste med bilder. Listen finner du i code-sandboxen.

Husk at du trenger en unik `key` for hvert element i lista - ellers vet ikke React hvilket element som endrer seg!

https://codesandbox.io/s/w0n3nr56ww

#### Oppgave 5: Sett sammen komponenter med children
På tide å gjøre innleggene våre litt mer innholdsrike. I denne oppgaven skal vi lage tre nye komponenter, og sende inn data ved hjelp av en ny prop - `children`. 

https://codesandbox.io/s/myxn92wm6x

#### Oppgave 6: Vis ett og ett bilde
Alle de kule appene har forskjellige sider og URLer. Det burde vi også få oss. I denne oppgaven skal vi bruke biblioteket `react-router` til å lage to forskjellige sider i applikasjonen vår - `FeedPage` og `DetailPage`.

Begynn med å ta en titt på [dokumentasjonen til React Router](https://reacttraining.com/react-router/web/guides/quick-start) for en rask introduksjon til de forskjellige funksjonene du finner der.

https://codesandbox.io/s/l77qzql7z9

### Del 2: Tilstand og sideeffekter

#### Oppgave 7: Legg til likes som lokal state på hvert bilde
La oss gjøre Bekkstagram litt mer avhengighetsskapende ved å introdusere likes. Antall likes et bilde har kan ses på som en tilstand, og dette er en perfekt anledning til å ta i bruk [hooks](https://reactjs.org/docs/hooks-state.html). 

https://codesandbox.io/s/8kryjnmk10

#### Oppgave 8: Sideeffekter

I oppgave 8 skal vi fokusere på å utføre forskjellige side-effekter. Side-effekter er handlinger som påvirker noe utenfor "React-verdenen" - som å kalle DOM-APIer, hente data og så videre

#### 8A: Oppdater tittel
Når man går inn på et bilde burde man oppdatere tittelen til websiden (det som står oppe i fanen). Bruk hooken `useEffect` til å oppdatere den!

https://codesandbox.io/s/oppgave-8-min-forste-sideeffekt-yom3rj5j9

#### 8B: Oppdater tittel (del 2)
Oppgave 8A innførte en liten bug - når man returnerer til feed-siden (hovedsiden) resetter man ikke tittelen! Det bør vi gjøre noe med. Refaktorer ut en funksjon som setter tittelen for deg, og kall den `useTitle`. Dette er hva man kaller en [custom hook](https://reactjs.org/docs/hooks-custom.html).

Bruk din første custom hook både på `DetailsPage` og `FeedPage`.

https://codesandbox.io/s/bygku

#### 8C: Oppdater tittel (del 3)
Custom Hooken vår ser fin ut - men den setter tittelen hver eneste gang vi rendrer siden vår. Det er kanskje ikke noe problem akkurat nå - men det kan det fort bli. Oppdater `useTitle` med et `dependency array` som andre argument. ([Her er dokumentasjonen](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects))

https://codesandbox.io/s/oppgave-8c-dependency-arrays-rpsdg


#### Oppgave 9: Hent data fra backenden
Akkurat nå leser vi bare statisk data som vi har hardkodet inn i appen. La oss hente data fra APIet vårt!

Koble appen opp mot backend. Lage api/noen endepunkter? Hente og vise bilder fra backend?

https://codesandbox.io/s/oppgave-9-hente-data-fra-api-e9i9w

#### Oppgave 10: Sideeffekt - oppdater likes fra/til backend
Lag et endepunkt for å hente likes til et bilde og oppdater staten til bildene hver gang de rendres ved å bruke sideeffekt-hooken `useEffect()` 

https://codesandbox.io/s/64m12olno3

### Del 3: Avansert React

#### TODO

### Del 4: Bonusoppgaver

Har du kommet deg helt hit er du åpenbart en kløpper i React allerede. Kjempebra jobba! 

Her har du et par ekstraoppgaver du kan bryne deg på om du kommer helt i mål

#### TODO

## Løsningsforslag

Står du fast? Løsningsforslag til hver oppgave ligger i hver CodeSandbox-link i filen `SOLUTION.md`. Her står det også litt nøyere beskrevet hva man skal gjøre og hvorfor. Det anbefales å ta en titt på hvert av disse når du er ferdig, om ikke annet bare for å få forklart at du hadde helt rett.
