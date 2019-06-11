# Introduksjon til React - en workshop

Dette er en workshop for deg som vil lære React fra bunnen av. Workshopen består av et sett med oppgaver, med gode forklaringer etter hver oppgave.

Når du har jobbet deg gjennom denne workshopen vil du ha en grunnleggende forståelse av hvordan React fungerer, og hvordan du kan lage webapper på null komma niks.

> ## En workshop i moderne React
> Denne workshopen fokuserer kun på moderne APIer som funksjonskomponenter og hooks. Vi går ikke igjennom klasser, livssyklus-metoder og `this`. Du vil mest sannsynlig treffe på disse på eksisterende prosjekter, men som helt ny React-utvikler mener vi at du burde fokusere på måten du kommer til å skrive React på - ikke hvordan det har blitt skrevet.

## Antatte forkunnskaper

Vi kommer til å anta at deltakerne i denne workshopen har en grunnleggende forståelse for webutvikling generelt, og moderne JavaScript spesielt. Om du føler at du trenger en oppfriskning til dette, har [@johhorn](https://github.com/johhorn) et al skrevet [en fantastisk introduksjonsbok om HTML, CSS og JavaScript](https://johhorn.gitbooks.io/web-intro/). Om du virkelig vil dykke dypt ned, så kan vi også anbefale [JavaScript.info](https://javascript.info/), en fantastisk guide til JavaScript.

Det er helt okei å ikke kunne alt dette før du begynner. Webutvikling er et stort felt, og selv vi som har laget denne workshopen kan bare en brøkdel av hva det er å kunne. Det betyr ikke at du ikke har noe å bidra med! Stup inn, og begynn reisen din som webutvikler!

## Ressurser du kan lese

Det finnes utrolig mye god introduksjonslektyre om React allerede, og hvis du aldri har rørt React før, anbefaler vi at du tar en titt på noen av disse artiklene eller video-kursene. Vi går igjennom noen av disse konseptene i workshopen, men om du tar denne workshopen på egenhånd, eller ikke har mulighet til å være fysisk tilstede, så anbefaler vi at du blar deg gjennom disse tre ressursene:

- [Main Concepts](https://reactjs.org/docs/hello-world.html)-delen av React-dokumentasjonen er en fantastisk innføring i de mest grunnleggende konseptene i React.
- [React Tutorial For Beginners](https://egghead.io/courses/the-beginner-s-guide-to-react)-kurset til Kent C. Dodds er en fantastisk introduksjon til hvordan React fungerer, og forklarer hva React faktisk gjør på en veldig enkel og grei måte.
- [Den offisielle tutorialen](https://reactjs.org/tutorial/tutorial.html) til React er også en veldig lærerik opplevelse. 

## React på 2 minutter

React baserer seg på konseptet om at brukergrensesnittet ditt er en funksjon av data. Gitt litt data, så vil React gi deg tilbake det samme brukergrensesnittet. React kaller denne dataen `props` (en forkortelse for properties).

Med andre ord: 

```js
brukergrensesnitt = f(props)
```

React baserer seg på at hver bit av brukergrensesnittet ditt er en funksjon. Denne funksjonen tar et objekt med data - `props` - som argument, og returnerer et brukergrensesnitt tilbake. I React kaller man denne typen funksjon for en **komponent**.

En komponent kan se slik ut:

```js
function MinKomponent(props) {
  return <h1>Hei verden</h1>
}
```
, eller med en annen syntaks for å lage funksjoner:

```js
const MinKomponent = props => {
  return <h1>Hei verden</h1>
};
```

Synes du den HTML-lignende syntaksen er rar? Det er greit - den er litt rar. Den heter JSX, og er en type XML som React bruker for å beskrive brukergrensesnitt. Man bruker et verktøy som heter Babel til å gjøre det om til vanlig JavaScript. JSX er egentlig bare syntaktisk sukker for funksjonen `React.createElement`! Dette er samme komponent som over, i helt vanlig JavaScript:

```js
const MinKomponent = props => {
  return React.createElement('h1', {}, 'Hei verden');
};
```

Du kommer nok sjelden til å skrive kode som dette for hånd, da det å bruke JSX er å foretrekke i så godt som alle situasjoner. Men nå vet du i alle fall hva som egentlig skjer!

Du kan (og bør) lese mer om JSX i [Reacts dokumentasjon](https://reactjs.org/docs/introducing-jsx.html).

Det er i svært korte trekk det grunnleggende du trenger å vite om React. I løpet av oppgavene kommer du til å møte på mange flere konsepter, som tilstand (state), sideeffekter og kontekster - men nå vet du i alle fall litt om det mest grunnleggende!

## Oppgaver
I denne workshopen skal vi lage den neste SoMe-hypen: **Bekkstagram**! 🎉

Appen kommer til å implementere en forenkla versjon av Instagram, hvor du kan legge ut bilder, og like og kommentere andre sine bilder. Og ta det med ro - vi gjør det hele steg for steg, med gode forklaringer i hver oppgave. 

Hver oppgave har en lenke til en CodeSandbox der du kan implementere oppgaven rett i nettleseren. Oppgaven er løst når testene under "Tests"-fanen blir grønne. Du kan også gå inn på filen "SOLUTION.md" i hver CodeSandbox for å få løsningen (om du skulle sitte fast).

Trenger du hjelp, så er det bare å rekke opp hånda - eller om du gjør dette oppgavesettet utenfor en workshopsetting, skriv til [@selbekk](https://twitter.com/selbekk) på Twitter. Husk - ingen spørsmål er for enkle!

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

https://codesandbox.io/s/oppgave-5-children-htdv0

#### Oppgave 6: Vis ett og ett bilde
Alle de kule appene har forskjellige sider og URLer. Det burde vi også få oss. I denne oppgaven skal vi bruke biblioteket `react-router` til å lage to forskjellige sider i applikasjonen vår - `FeedPage` og `DetailPage`.

Begynn med å ta en titt på [dokumentasjonen til React Router](https://reacttraining.com/react-router/web/guides/quick-start) for en rask introduksjon til de forskjellige funksjonene du finner der.

https://codesandbox.io/s/oppgave-6-routing-f9x4l

### Del 2: Tilstand og sideeffekter

#### Oppgave 7: Legg til likes som lokal state på hvert bilde
La oss gjøre Bekkstagram litt mer avhengighetsskapende ved å introdusere likes. Antall likes et bilde har kan ses på som en tilstand, og dette er en perfekt anledning til å ta i bruk [hooks](https://reactjs.org/docs/hooks-state.html). 

https://codesandbox.io/s/oppgave-7-statelikes-9o5qu

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

https://codesandbox.io/s/oppgave-8c-dependency-arrays-gxmou

#### Oppgave 9: Hent data fra backenden
Akkurat nå leser vi bare statisk data som vi har hardkodet inn i appen. La oss hente data fra APIet vårt!

Vi har laget en funksjon `getFeed` som henter data fra APIet vårt. Dette kallet er asynkront, det vil si at man må vente litt på å få svar. Du kan lese mer om hvordan du kan hente data med hooks i [denne artikkelen](https://itnext.io/how-to-create-react-custom-hooks-for-data-fetching-with-useeffect-74c5dc47000a).

> Tips: Lag en custom hook `useFeed` som lagrer dataen vi henter i en `useState`, og henter data én gang i en `useEffect`

https://codesandbox.io/s/oppgave-9-hente-data-fra-api-yokt0

#### Oppgave 10: Sideeffekt - oppdater likes fra/til backend
Lag et endepunkt for å hente likes til et bilde og oppdater staten til bildene hver gang de rendres ved å bruke sideeffekt-hooken `useEffect()` 

#### Oppgave 11: Legg til kommentarer WIP
Vis kommentarer under hvert bilde samt legge til funksjonalitet for å skrive en kommentar.
Bendik: Prøvd å implementere kommentarer, wip:

https://codesandbox.io/s/oppgave-8c-dependency-arrays-g9b68

### Del 3: Avansert React

#### TODO

### Del 4: Bonusoppgaver

Har du kommet deg helt hit er du åpenbart en kløpper i React allerede. Kjempebra jobba! 

Her har du et par ekstraoppgaver du kan bryne deg på om du kommer helt i mål

#### TODO

## Løsningsforslag

Står du fast? Løsningsforslag til hver oppgave ligger i hver CodeSandbox-link i filen `SOLUTION.md`. Her står det også litt nøyere beskrevet hva man skal gjøre og hvorfor. Det anbefales å ta en titt på hvert av disse når du er ferdig, om ikke annet bare for å få forklart at du hadde helt rett.
