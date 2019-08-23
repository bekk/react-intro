# Introduksjon til React – en workshop

Dette er en workshop for deg som vil lære React fra bunnen av. Workshopen består av et sett med oppgaver, med gode forklaringer etter hver oppgave.

Når du har jobbet deg gjennom denne workshopen vil du ha en god, grunnleggende forståelse av hvordan React fungerer, og hvordan du kan lage webapper på null komma niks.

> ## En workshop i _moderne_ React
>
> Denne workshopen fokuserer kun på moderne APIer som funksjonskomponenter og hooks. Vi går ikke igjennom klasser, livssyklus-metoder eller `this`. Du vil mest sannsynlig treffe på disse i eksisterende prosjekter, men som helt ny React-utvikler mener vi at du burde fokusere på måten du kommer til å skrive React på - ikke hvordan det har blitt skrevet.

🎉 [Gå til oppgavene](#oppgaver) 🎉

## Antatte forkunnskaper

Vi kommer til å anta at deltakerne i denne workshopen har en grunnleggende forståelse for webutvikling generelt, og moderne JavaScript spesielt. Om du føler at du trenger en oppfriskning i dette, har [Johanne Horn](https://github.com/johhorn) et al skrevet [en fantastisk introduksjonsbok om HTML, CSS og JavaScript](https://johhorn.gitbooks.io/web-intro/). Om du virkelig vil dykke dypt ned, så kan vi også anbefale [JavaScript.info](https://javascript.info/), en fantastisk guide til JavaScript.

Det er helt okei å ikke kunne alt dette før du begynner. Webutvikling er et stort felt, og selv vi som har laget denne workshopen kan bare en brøkdel av hva det er å kunne. Det betyr ikke at du ikke har noe å bidra med! **Stup inn, og begynn reisen din som React-utvikler!**

### Ressurser du kan lese

Det finnes utrolig mye god introduksjonslektyre om React allerede, og hvis du aldri har rørt React før, anbefaler vi at du tar en titt på noen av disse artiklene eller videokursene. Vi går igjennom noen av disse konseptene i workshopen, men om du tar denne workshopen på egenhånd, eller ikke har mulighet til å være fysisk tilstede, så anbefaler vi at du blar deg gjennom disse tre ressursene:

- [Main Concepts](https://reactjs.org/docs/hello-world.html)-delen av React-dokumentasjonen er en fantastisk innføring i de mest grunnleggende konseptene i React.
- [React Tutorial For Beginners](https://egghead.io/courses/the-beginner-s-guide-to-react)-kurset til Kent C. Dodds er en strålende introduksjon til hvordan React fungerer, og forklarer hva React faktisk gjør på en veldig enkel og grei måte.
- [Den offisielle tutorialen](https://reactjs.org/tutorial/tutorial.html) til React er også en veldig lærerik opplevelse.

[Slidesene fra workshop-introduksjonen finner du her](https://slides.com/markusra/react-intro/fullscreen)

### React på 2 minutter

React baserer seg på konseptet om at brukergrensesnittet ditt er en funksjon av data. Gitt litt data, så vil React gi deg tilbake det samme brukergrensesnittet. React kaller denne dataen `props` (en forkortelse for properties).

Med andre ord:

```js
brukergrensesnitt = f(props);
```

React baserer seg på at hver bit av brukergrensesnittet ditt er en funksjon. Denne funksjonen tar et objekt med data - `props` - som argument, og returnerer et brukergrensesnitt tilbake. I React kaller man denne typen funksjon for en **komponent**.

En komponent kan se slik ut:

```js
function MinKomponent(props) {
  return <h1>Hei verden</h1>;
}
```

, eller med en annen syntaks for å lage funksjoner:

```js
const MinKomponent = props => {
  return <h1>Hei verden</h1>;
};
```

Synes du den HTML-lignende syntaksen er rar? Det er greit - den _er_ litt rar. Den heter JSX, og er en type XML som React bruker for å beskrive brukergrensesnitt. Man bruker et verktøy som heter [Babel](https://babeljs.io) til å gjøre det om til vanlig JavaScript. JSX er egentlig bare syntaktisk sukker for funksjonen `React.createElement`! Dette er samme komponent som over, i helt vanlig JavaScript:

```js
const MinKomponent = props => {
  return React.createElement('h1', {}, 'Hei verden');
};
```

Du kommer nok sjelden til å skrive kode som dette for hånd, da det å bruke JSX er å foretrekke i så godt som alle situasjoner. Men nå vet du i alle fall hva som egentlig skjer!

Du kan (og bør!) lese mer om JSX i [Reacts dokumentasjon](https://reactjs.org/docs/introducing-jsx.html).

Dette er i svært korte trekk det grunnleggende du trenger å vite om React. I løpet av oppgavene kommer du til å møte på mange flere konsepter, som tilstand (state), sideeffekter og kontekster - men nå vet du i alle fall litt om det mest grunnleggende!

# Om workshopen

Workshopen består av et sett med oppgaver, som du kan løse lokalt på din egen maskin eller i en CodeSandbox.

Hvis du vil gjøre oppgavene lokalt, kan du åpne terminalen din, laste ned repoet med `git clone git@github.com:bekk/react-intro.git` og kjøre `npm install`. Du kan starte en utviklingsserver ved å kjøre `npm start` - denne vil laste inn appen din på nytt hver gang du gjør en endring.

> ## ⚠️ Husk! Installer node og git
>
> Hvis du vil løse oppgavene lokalt, kreves det at du har `node` installert. Hvis du ikke har det, kan du laste det ned fra [nodejs.org](https://nodejs.org). Du trenger også `git`, som du kan laste ned [herifra](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

Hvis du vil løse oppgavene i nettleseren, kan du gjøre det også. Gå inn på [denne CodeSandbox-lenken](https://codesandbox.io/s/github/bekk/react-intro), så får du opp en editor med live-preview og alt du trenger rett i nettleseren.

## Løsningsforslag

Står du fast? Du finner et løsningsforslag til hver oppgave under hver av oppgaven ved å trykke på "🚨Løsningsforslag". Her står det også litt nøyere beskrevet hva man skal gjøre og hvorfor. Det anbefales å ta en titt på hvert av disse når du er ferdig, om ikke annet bare for å få forklart at du hadde helt rett.

# Oppgaver

I denne workshopen skal vi lage den neste SoMe-hypen: **Bekkstagram**! 🎉

Appen kommer til å implementere en forenkla versjon av Instagram, hvor du kan legge ut bilder, og like og kommentere andre sine bilder. Og ta det med ro - vi gjør det hele steg for steg, med gode forklaringer i hver oppgave.

Trenger du hjelp, så er det bare å rekke opp hånda. Husk – ingen spørsmål er for enkle!

## Del 1: React 101 - De grunnleggende byggesteinene!

### Oppgave 1: Hei verden!

La oss starte med litt basics. Få React til å skrive ut en `<h1 />`-tag med teksten "Bekkstagram" inni.

<details><summary>🚨Løsningsforslag</summary>
Vi gjør alt arbeidet vårt i `App`-funksjonen.

```js
function App() {
  return <h1>Bekkstagram</h1>;
}
```

Den HTML-lignende syntaksen er hva vi kaller JSX, og er egentlig bare en fin måte å skrive `React.createElement('h1', null, 'Bekkstagram');` på.

Funksjonen `App` blir kjørt lenger nede, her:

```js
ReactDOM.render(<App />, rootElement);
```

Her ber vi React plassere resultatet av hva `App`-funksjonen returnerer inn i `rootElement`, som er en `<div />`-tag i HTML-en vår.

</details>

### Oppgave 2: Din første komponent!

På tide å refaktorere litt. Lag en ny komponent, `<Header />`, som skriver ut en `<h1 />`-tag med teksten "Bekkstagram" inni, og bruk den i appen din.

Husk: En React-komponent er en funksjon som starter med `StorForbokstav`, og som returnerer litt JSX.

<details><summary>🚨Løsningsforslag</summary>

Vi flytter koden vi skrev i oppgave 1 til en funksjon vi kaller `Header`. `Header` er en komponent.

```js
function Header() {
  return <h1>Bekkstagram</h1>;
}
```

Vi kan bruke `<Header />`-komponenten vår som om det var en vanlig HTML-tag! La oss bruke den nye komponenten vår i `<App />`-komponenten vår:

```js
function App() {
  return <Header />;
}
```

Det er en grei huskeregel at DOM-komponenter starter med liten forbokstav, og React-komponenter starter med Stor forbokstav. `<header />` er med andre ord et HTML-element, mens `Header` er en referanse til `Header`-funksjonen vi akkurat skrev.

Det fine med komponenter er at de kan brukes gang på gang - du har laget noe som er gjenbrukbart!</details>

### Oppgave 3: Bilde-komponent

Komponenter er morsommere når man bruker props. Lag en ny komponent `<Image />` som tar i mot to props, `src` og `alt`, og som lager en `<img />`-tag som bruker disse to propsa.

Legg på css-klassen `image` på `<img />`-taggen, så får den tilogmed riktig design!

<details><summary>🚨Løsningsforslag</summary>
Alle komponenter mottar et objekt som første argument. Verdiene i dette objektet kaller vi `props`. Derifra kan vi hente ut attributtene vi sendte med komponenten vår!

```js
function Image(props) {
  return <img src={props.src} alt={props.alt} className="image" />;
}
```

Merk også at vi skriver `className` istedenfor `class` når vi skal legge til en CSS-klasse. Det er fordi `className` er navnet på attributten man bruker for å sette klassenavn på en DOM-node i JavaScript (og det er sånn React fungerer).

Når vi skal bruke komponenten vår, må vi sende med de props-ene som vi bruker. Det ser du vi har gjort allerede, i `<App />`-komponenten vår:

```js
<Image
  src="https://media.giphy.com/media/pa37AAGzKXoek/giphy.gif"
  alt="Carlton from Fresh Prince in Bel Air is dancing"
/>
```

Husk at en prop kan være hva som helst - en tekststreng, et tall, et objekt, en liste og tilogmed en funksjon!

</details>

### Oppgave 4: En liste med bilder

Det beste med komponenter er at man kan bruke dem gang på gang. I denne oppgaven skal du loope ut en liste med bilder. Listen finner du i `src/data/images.js`

Du kan bruke `Image`-komponenten du laget i forrige oppgave til å skrive ut bildet - husk å sende inn riktige props!

Husk at du trenger en unik `key` for hvert element i lista - ellers vet ikke React hvilket element som endrer seg!

<details><summary>🚨Løsningsforslag</summary>

Hvis vi vil utføre JavaScript inni JSX, så kan vi "escape" oss ut med krøllparanteser. I dette tilfellet vil vi loope gjennom alle URLene i `images`-arrayet, og bruke `<Image />`-komponenten vår til å vise frem dataen.

En måte å loope gjennom en liste og "gjøre" dem om til React-komponenter kan være den innebygde array-metoden "map". Den tar i mot en funksjon som kjøres for hvert element i lista, hvor den får elementet som argument, og så returneres et React-element.

```js
function App() {
  return (
    <div className="App">
      <Header />
      <div className="images">
        {images.map(image => (
          <Image key={image.id} src={image.url} alt={image.description} />
        ))}
      </div>
    </div>
  );
}
```

Hvert bilde i `images`-arrayen er et objekt med tre verdier - `id`, `url` og `description`. Vi bruker `id` som `key`, siden vi antar at den er unik per bilde. `url` sender vi inn som `src`-prop og `description` høres perfekt ut som en alt-tekst.

`key`-propen i React er viktig, og er påkrevd når du skal lage lister av ting på denne måten. Det er React sin måte å vite hva som endret seg, om listen skulle endre seg i fremtiden (om man skulle fjerne, legge til eller sortere, for eksempel).

Et viktig poeng med keys i React er at de bare trenger å være unike innen én liste, ikke hele appen. Derfor kan du gjerne bruke enhver verdi som er unik innad i datasettet man lister ut.

Om du lurer på keys og hvorfor man trenger dem, så kan vi anbefale denne artikkelen:
https://dev.to/jtonzing/the-significance-of-react-keys---a-visual-explanation--56l7

</details>

### Oppgave 5: Sett sammen komponenter med children

På tide å gjøre innleggene våre litt mer innholdsrike. Wrap hver av `Image`-komponentene du lister ut i en `Post`-komponent.

Post-komponenten skal skrive ut følgende DOM-struktur:

```html
<div className="post">
  <div className="author">...</div>
  <!-- bilde -->
  <div className="timestamp">...</div>
</div>
```

Hvordan du får til nettopp det er opp til deg - men vi anbefaler at du bruker `children` prop-en. Du kan lese mer om `props.children` i [dokumentasjonen til React](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx).

Vi kan anbefale funksjonen [`distanceInWordsToNow`](https://date-fns.org/v1.9.0/docs/distanceInWordsToNow) fra biblioteket `date-fns` for å vise timestamp-informasjonen.

<details><summary>🚨Løsningsforslag</summary>
`children` er en spesiell prop. Når du skrive koden din slik:

```js
<MinKomponent>Hei og hallo</MinKomponent>
```

, så dukker innholdet mellom taggene (i dette tilfellet "Hei og hallo") opp i denne prop-en.

Dette kan man bruke til å sette sammen flere komponenter, og lage hierarkier, slik som HTML har fra før av.

I denne oppgaven skulle vi implementere tre komponenter. La oss ta en av gangen.

```js
function Timestamp(props) {
  return (
    <div className="timestamp">{distanceInWordsToNow(props.timestamp)} ago</div>
  );
}
```

Her er det ikke veldig mye nytt. Vi kaller funksjonen `distanceInWordsToNow` for å gjøre om et dato-objekt til en tekststreng.

```js
function Author(props) {
  return <div className="author">{props.children}</div>;
}
```

Her bruker vi `props.children` for første gang! Det betyr at vi plasserer hva enn man plasserer mellom `<Author>` og `</Author>` inni en `<div />` med et klassenavn på. Dette "hva enn" kan være en tekst, et tall eller mer JSX.

```js
function Post(props) {
  return (
    <div className="post">
      <Author>{props.author}</Author>
      {props.children}
      <Timestamp timestamp={props.timestamp} />
    </div>
  );
}
```

`<Post />`-komponenten vår bruker alt på en gang! Her sender vi inn `props.author` som `children`-propen til `<Author />`-komponenten, etterfulgt av at vi plasserer `Post`'s egne `props.children`-prop under. Til slutt plasserer vi `<Timestamp />`-komponenten nederst, og vidersender `timestamp`-propen.

Henger du med? Hvis ikke er det helt okei. Spør spørsmål til de som går rundt og hjelper.

</details>

### Oppgave 6: Vis ett og ett bilde

Alle de kule appene har forskjellige sider og URLer. Det burde vi også få oss. I denne oppgaven skal vi bruke biblioteket `react-router` til å lage to forskjellige sider i applikasjonen vår - `FeedPage` og `DetailPage`.

Begynn med å ta en titt på [dokumentasjonen til React Router](https://reacttraining.com/react-router/web/guides/quick-start) for en rask introduksjon til de forskjellige funksjonene du finner der.

https://codesandbox.io/s/oppgave-6-routing-7bmtd

### Bonus: Skift utseende

Hadde det ikke vært kult å kunne bytte utseende på Bekkstagram? Flaks for deg: dette har vi allerede lagt til rette for! Fra og med oppgave 6 kan du bruke metodene i `theme-util.js` til å sette et predefinert tema – eller bare lage ditt eget. 🌈

## Del 2: Tilstand og sideeffekter

### Oppgave 7: Legg til likes som lokal state på hvert bilde

La oss gjøre Bekkstagram litt mer avhengighetsskapende ved å introdusere likes. Antall likes et bilde har kan ses på som en tilstand, og dette er en perfekt anledning til å ta i bruk [hooks](https://reactjs.org/docs/hooks-state.html).

https://codesandbox.io/s/oppgave-7-statelikes-cy91z

### Oppgave 8: Sideeffekter

I oppgave 8 skal vi fokusere på å utføre forskjellige side-effekter. Side-effekter er handlinger som påvirker noe utenfor "React-verdenen" - som å kalle DOM-APIer, hente data og så videre

### 8A: Oppdater tittel

Når man går inn på et bilde burde man oppdatere tittelen til websiden (det som står oppe i fanen). Bruk hooken `useEffect` til å oppdatere den!

https://codesandbox.io/s/oppgave-8-min-forste-side-effekt-o5xlp

### 8B: Oppdater tittel (del 2)

Oppgave 8A innførte en liten bug - når man returnerer til feed-siden (hovedsiden) resetter man ikke tittelen! Det bør vi gjøre noe med. Refaktorer ut en funksjon som setter tittelen for deg, og kall den `useTitle`. Dette er hva man kaller en [custom hook](https://reactjs.org/docs/hooks-custom.html).

Bruk din første custom hook både på `DetailsPage` og `FeedPage`.

https://codesandbox.io/s/oppgave-8b-custom-hooks-379e8

### 8C: Oppdater tittel (del 3)

Custom Hooken vår ser fin ut - men den setter tittelen hver eneste gang vi rendrer siden vår. Det er kanskje ikke noe problem akkurat nå - men det kan det fort bli. Oppdater `useTitle` med et `dependency array` som andre argument. ([Her er dokumentasjonen](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects))

https://codesandbox.io/s/oppgave-8c-dependency-arrays-kwmrr

### Oppgave 9: Hent data fra backenden

Akkurat nå leser vi bare statisk data som vi har hardkodet inn i appen. La oss hente data fra APIet vårt!

Vi har laget en funksjon `getFeed` som henter data fra APIet vårt. Dette kallet er asynkront, det vil si at man må vente litt på å få svar. Du kan lese mer om hvordan du kan hente data med hooks i [denne artikkelen](https://itnext.io/how-to-create-react-custom-hooks-for-data-fetching-with-useeffect-74c5dc47000a).

> Tips: Lag en custom hook `useFeed` som lagrer dataen vi henter i en `useState`, og henter data én gang i en `useEffect`

https://codesandbox.io/s/oppgave-9-hente-data-fra-api-9ze3b

### Oppgave 10: Sideeffekt - oppdater likes fra/til backend

Frem til nå har vi bare brukt en lokal statevariabel for å telle likes. Nå er det på tide å oppdatere likes-komponenten, slik at den kan vite hvem som har liket, og persistere alle likes til serveren! Bruk det nye endepunktet `putLike()` for å oppdatere likes backend. Det betyr at i denne oppgaven skal vi erstatte den gamle likes-funksjonaliteten som kun er tall, med nye like-objekter.

I denne oppgaven vil du bli bedt om å oppgi et brukernavn når du går inn på appen. Det er for å gi deg en slags brukerkonto underveis.

> Tips: `putLike()` returnerer det nye like-objektet async (ved et vellykket kall) og kan kalles slik i en async funksjon: `const likeResponse = await putLike(props.imageId, username);`

https://codesandbox.io/s/oppgave-10-oppdatere-sende-likes-til-backend-kggcn

**Merk: Herfra og utover trenger du ikke tenke på å få testene grønne (fordi de resterende oppgavene ikke har tester).**

### Oppgave 11 a) Legg til kommentarer

På tide å legge til det morsomste med internett: kommentarfelt! Både mulighet for å vise kommentarer og legge til nye. Kommentarer ligger lagret som et array på hvert bildeobjekt som vi hentet fra backend i oppgave 9, så vi har allerede tilgang til det som ligger lagret i databasen fra før. Her er det bare å eksperimentere med nye komponenter og gjenbruke det dere hittil har lært! `<button>` og `<input>` er nyttige html-tags i denne oppgaven.

> Tips til oppsett: En "container"-komponent `<Comments>` rendret under hvert bilde som går gjennom alle kommentarene til bildet og rendrer en `<Comment>` for hver kommentar og til slutt en `<CommentForm>`-komponent.

https://codesandbox.io/s/oppgave-11a-legg-til-kommentarer-hkrjg

### Oppgave 11 b) Rendre kommentarfeltet automatisk når man legger til ny kommentar

Hvis du ikke allerede har implementert det: Det er fint å slippe å refreshe siden for at en ny kommentar skal dukke opp i kommentarfeltet. Fiks dette!

> Tips: En funksjonskomponent blir rendret på nytt hvis staten endres. Prøv å legg til kommentarene som en state i `<Comments>` som oppdateres når man klikker på post-knappen i `<CommentForm>`. Funksjoner kan også bli sendt med som props.

https://codesandbox.io/s/oppgave-11b-kommentarer-kqs66

### Oppgave 12: Vis bildebeskrivelsen

Hvis du ikke har gjort det allerede: Legg til bildebeskrivelsen (`description`) under hvert bilde.

https://codesandbox.io/s/oppgave-12-vis-bildebeskrivelsen-s8btp

### Oppgave 13: Legg til nye bilder

APIet vårt har også støtte for å legge til nye bilder i Bekkstagram. Et bilde kan legges til vha. en `POST` til https://bekkstagram-api.herokuapp.com/api/media med følgende body:

| Key         | Value                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------- |
| url         | https://res.cloudinary.com/bekkimg/w_768,h_1024,c_fill/d_default_image_departmentId4.png/26 |
| description | Mr. Bossman                                                                                 |
| username    | Olav Folkestad                                                                              |

Metoden `postImage(imageUrl, description)` er allerede implementert i api'et som kan kalles for å legge til et bilde. Metoden sjekker at bilde-URLen er gyldig og returnerer `undefined` samt sender en errormelding til consolen om url'en er ugyldig. Hvis ikke returnerer den det nye bildeobjektet som har blitt lagt til backend.

#### Oppgave 13 a)

Legg til funksjonalitet for å legge til et bilde, for eksempel en knapp som åpner en modal/dialog hvor man kan skrive inn en bildeurl og bildebeskrivelse.

#### Oppgave 13 b)

Sørg for at bildefeeden refresher seg og oppdateres med det nye bildet etter at det har blitt lagt til.

Bruk linken under for å gjøre begge deloppgavene:

https://codesandbox.io/s/oppgave-13-legg-til-nye-bilder-2f9m9

#### Tips

> Tips 1: Importer et bildeikon av et kamera for å bruke som legg-til-bilde-knapp fra [react-icons](https://www.npmjs.com/package/react-icons), her et ikon fra [Font Awesome](https://fontawesome.com/icons?d=gallery&q=camera):

```js
import { FaCameraRetro } from 'react-icons/fa';
```

> Tips 2: Importer <Dialog> med følgende kodelinjer for å få tilgang til Reach UI sin [Dialog-komponent](https://ui.reach.tech/dialog/):

```js
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
```

### Oppgave 14: Toggle likes

Løsningsforslaget i oppgave 10 legger opp til at man kan like et bilde en gang, men når man først har gjort det er det ingen vei tilbake! Endre dette slik at annethvert klikk er like og unlike. Marker gjerne dette visuelt med to forskjellige emojis: Like 💛 og unlike 💔.

Vi har allerede laget en funksjon deleteLikes() for dere som tar inn imageId. Som dere kan bruke når dere skal slette en like.

https://codesandbox.io/s/oppgave-14-toggle-likes-oi2s4

### Oppgave 15: Legg til støtte for å like en kommentar

Ved å bruke Bekkstagram-APIet kan man legge til funksjonalitet for å like en kommentar på et bilde. Likes på en kommentar kan hentes med en `GET` til https://bekkstagram-api.herokuapp.com/api/media/{mediaId}/comments/{commentId}/likes (`{mediaIDN}` og `{commentID}` erstattes med hver sin tallverdi). Denne listen med likes kommer dessuten med når man henter et bilde med de eksisterende api-kallene (sjekk va du får i network i dev tools). Nye likes kan registeres med en `PUT` til samme adresse. Bodyen må da har følgende innhold:

| Key      | Value        |
| -------- | ------------ |
| username | ola.nordmann |

Vi ar allerede implementert en funksjon i api.js for dere, putCommentLike(imageId, commentId), som kan brukes i løsningen av oppgaven.

https://codesandbox.io/s/oppgave-15-likes-for-kommentarer-0tyij

## Bonusoppgaver

Har du kommet helt hit, er vi virkelig imponert! Da har vi noen bonusoppgaver til deg, som du kan bryne deg på helt på slutten. Det er bare å fortsette fra den siste codesandbox'en du åpnet, her får du nemlig ingen løsningsforslag, men bare spør instruktørene om det er noe du lurer på! 🙌

Merk at bonusoppgavene ikke trengs å gjøres i rekkefølge, her kan du bare plukke det som virker mest interessant. Helt til sist er en oppgave som er helt uavhengig av det vi har gjort til nå, hvis du har gått lei av å knote med Bekkstagram! 😁

### Bonusoppgave: Søkefelt

Implementer et søkefelt på start/feed-siden, som du kan bruke til å filtrere feeden. For eksempel å kunne søke på "fjell", og kun få bilder med teksten "fjell" i description-feltet.

### Bonusoppgave: Hashtags

Her kan du for eksempel endre koden for visning av bildebeskrivelser så ord som starter på "#" blir mulig å trykke på. Når man trykker på en hashtag kan man sendes til en egen feed som kun viser bilder som har den hashtagen i beskrivelsen (eller også i kommentarene under?).

Et alternativ til å bare filtrere feeden i denne og den neste oppgaven er å f.eks vise bildene til en valgt bruker eller hashtag som klikkbare tiles, med bildebeskrivelsen som hover-tekst.

### Bonusoppgave: Brukerspesifikk feed

Brukernavnet til personen som lastet opp et bilde kan gjøres klikkbart, og om du klikker på det kan du f.eks. tas til en feed som kun viser bilder lagt ut av den personen. Her kan du også inkludere en egen liste under/over/ved siden av feeden av kommentarene som brukeren har lagt inn under andre bilder.

Et alternativ til å bare filtrere feeden i denne og den forrige oppgaven er å f.eks vise bildene til en valgt bruker eller hashtag som klikkbare tiles, med bildebeskrivelsen som hover-tekst.

### Bonusoppgave: "Paginering"

Etterhvert som bildefeeden består av flere og flere bilder vil appen bruke lengre og lengre tid på å rendre alt, men dette kan løses med noe som heter paginering! Paginering her vil basically si å kun vise et begrenset antall bilder av gangen, og rendre flere bilder når man gjør en eller annen handling. Det kan være å ha sidetall i toppen av feeden og rendre f eks de 10 første på sidetall 1, de 10 neste på sidetall 2 osv. Mer passende kanskje i denne appen vil være å rendre flere bilder etterhvert som man scroller nedover ("rendre 10+x bilder, hvor x økes med 10 hver gang man scroller til bunns").

> Tips: [Denne artikkelen](https://upmostly.com/tutorials/build-an-infinite-scroll-component-in-react-using-react-hooks) beskriver hvordan man kan detektere at man har scrollet til bunns og hente nye data når det skjer. Merk: Api'et vårt støtter ikke å kunne fetche kun et visst antall bilder fra backenden. Man må derfor uansett fetche alle bildene først som før, men hvor mange bilder som rendres kan man styre med dette.

### Bekkstagram-uavhengig bonusoppgave: TODO-app

Lag din egen TODO-app fra scratch! Typiske ting en vanlig TODO-app burde kunne gjøre:

- Legge til TODOs
- Krysse av og markere en TODO som gjort
- Filtrere på ugjorte TODOs
