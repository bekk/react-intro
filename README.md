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

<details><summary>Klikk her for en rask introduksjon</summary>

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
const MinKomponent = (props) => {
  return <h1>Hei verden</h1>;
};
```

Synes du den HTML-lignende syntaksen er rar? Det er greit - den _er_ litt rar. Den heter JSX, og er en type XML som React bruker for å beskrive brukergrensesnitt. Man bruker et verktøy som heter [Babel](https://babeljs.io) til å gjøre det om til vanlig JavaScript. JSX er egentlig bare syntaktisk sukker for funksjonen `React.createElement`! Dette er samme komponent som over, i helt vanlig JavaScript:

```js
const MinKomponent = (props) => {
  return React.createElement("h1", {}, "Hei verden");
};
```

Du kommer nok sjelden til å skrive kode som dette for hånd, da det å bruke JSX er å foretrekke i så godt som alle situasjoner. Men nå vet du i alle fall hva som egentlig skjer!

Du kan (og bør!) lese mer om JSX i [Reacts dokumentasjon](https://reactjs.org/docs/introducing-jsx.html).

Dette er i svært korte trekk det grunnleggende du trenger å vite om React. I løpet av oppgavene kommer du til å møte på mange flere konsepter, som tilstand (state), sideeffekter og kontekster - men nå vet du i alle fall litt om det mest grunnleggende!

</details>

# Om workshopen

Workshopen består av et sett med oppgaver, som du kan løse lokalt på din egen maskin eller i en CodeSandbox.

## Jobbe i nettleser eller på din egen maskin?

Du trenger ikke å ha noe innstallert for å komme i gang med denne workshopen - kun en nettleser. Gå inn på [denne CodeSandbox-lenken](https://codesandbox.io/s/github/bekk/react-intro), så får du opp en moderne kode-editor, en live-oppdatert readme og alt du trenger rett i nettleseren.

**Vi anbefaler å jobbe i nettleseren**, så du slipper å bruke tid på oppsett og slikt.

Hvis du allikevel _vil_ løse oppgavene lokalt, kreves det at du har `node` installert. Hvis du ikke har det, kan du laste det ned fra [nodejs.org](https://nodejs.org).
Du trenger også `git`, som du kan laste ned [herifra](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
Du vil måtte jobbbe litt i terminalen også. Om du ikke er så bevandret i den verdenen, kan vi anbefale [denne artikkelen](https://www.git-tower.com/learn/git/ebook/en/command-line/appendix/command-line-101).

Hvis du vil gjøre oppgavene lokalt, kan du åpne terminalen din, laste ned repoet med `git clone git@github.com:bekk/react-intro.git` og kjøre `npm install`. Du kan starte en utviklingsserver ved å kjøre `npm start` - denne vil laste inn appen din på nytt hver gang du gjør en endring.

## Emoji-guide

Du kommer til å se noen emojis i oppgavene. De betyr ca det her:

- 🏆Oppgave: Her er hva du skal gjøre
- 💡Tips: Litt ekstra info som kan være greit å være for å løse en oppgave
- 🚨Løsningsforslag: Her finner du en komplett gjennomgang av hvordan du _kan_ løse oppgaven

# Oppgaver

I denne workshopen skal vi lage den neste SoMe-hypen: **Bekkstagram**! 🎉

Appen kommer til å implementere en forenklet versjon av Instagram, hvor du kan legge ut bilder, og like og kommentere andre sine bilder. Og ta det med ro - vi gjør det hele steg for steg, med gode forklaringer i hver oppgave.

Trenger du hjelp, så er det bare å rekke opp hånda. Husk – ingen spørsmål er for enkle, og det eneste dumme er å sitte og lure i 5 minutter før du spør!

## Del 1: React 101 - De grunnleggende byggesteinene!

### Oppgave 1: Hei verden!

La oss starte litt enkelt, med å få appen vår til å skrive ut noe som helst. Gå inn i `src/App.js`, og se hva som er der.

🏆 Få React til å skrive ut en `<h1 />`-tag med teksten "Bekkstagram" inni.

<details><summary>🚨Løsningsforslag</summary>
Vi gjør alt arbeidet vårt i `App`-funksjonen.

```js
function App() {
  return <h1>Bekkstagram</h1>;
}
```

Den HTML-lignende syntaksen er hva vi kaller JSX, og er egentlig bare en fin måte å skrive `React.createElement('h1', null, 'Bekkstagram');` på.

Funksjonen `App` blir kjørt i `src/index.js`, her:

```js
ReactDOM.render(<App />, rootElement);
```

Her ber vi React plassere resultatet av hva `App`-funksjonen returnerer inn i `rootElement`, som er en `<div />`-tag i HTML-en vår.

</details>

### Oppgave 2: Din første komponent!

React er egentlig bare en haug med funksjoner som returnerer JSX. Disse funksjonene kaller vi "komponenter".

🏆 Lag en ny komponent, `<Header />`, som skriver ut en `<h1 />`-tag med teksten "Bekkstagram" inni, og bruk den i appen din.

> 💡 En React-komponent er en funksjon som starter med `StorForbokstav`, og som returnerer litt JSX eller `null`.

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

Komponenter er morsommere når man sender inn litt data. Som vi husker fra over, er komponenter bare funksjoner som returnerer litt JSX. Disse funksjonene blir kalt med ett argument - et objekt vi kaller `props` .

Du sender inn props til en komponent ved å spesifisere dem som attributten på JSX-elementet - akkurat som på vanlig HTML.

🏆 Lag en ny komponent `<Image />` som tar i mot to props, `src` og `alt`, og som lager en `<img />`-tag som bruker disse to propsa.

🏆 Legg på css-klassen `image` på `<img />`-taggen, så får den tilogmed riktig design!

> 💡 I React så skriver man `className` istedenfor `class` - det er fordi JSX egentlig er JavaScript, og `class` er et såkalt reservert ord i JavaScript. Det er litt irriterende i starten, men man vender seg fort til det.

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

Det beste med komponenter er at man kan bruke dem gang på gang. I denne oppgaven skal du loope ut en liste med bilder, og bruke samme komponenten hver gang.

🏆 Skriv ut en liste med bilder til nettleseren. Listen finner du i `src/data/images.js`, og du kan bruke `Image`-komponenten du laget i forrige oppgave til å skrive ut bildet. Husk å sende inn riktige props!

> 💡 Husk at du trenger å sende inn en _unik_ `key` prop for hvert element i lista - ellers klarer ikke React å oppdatere lista di riktig.

<details><summary>🚨Løsningsforslag</summary>

Hvis vi vil utføre JavaScript inni JSX, så kan vi "escape" oss ut med krøllparanteser. I dette tilfellet vil vi loope gjennom alle URLene i `images`-arrayet, og bruke `<Image />`-komponenten vår til å vise frem dataen.

En måte å loope gjennom en liste og "gjøre" dem om til React-komponenter kan være den innebygde array-metoden "map". Den tar i mot en funksjon som kjøres for hvert element i lista, hvor den får elementet som argument, og så returneres et React-element.

```js
function App() {
  return (
    <div className="App">
      <Header />
      <div className="posts">
        {images.map((image) => (
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

På tide å gjøre innleggene våre litt mer innholdsrike.

🏆 Wrap hver av `Image`-komponentene du lister ut i en `Post`-komponent.

Post-komponenten skal skrive ut følgende DOM-struktur:

```html
<div className="post">
  <div className="author">...</div>
  <!-- bilde -->
  <div className="timestamp">...</div>
</div>
```

Hvordan du får til nettopp det er opp til deg - men vi anbefaler at du bruker `children` prop-en. Du kan lese mer om `props.children` i [dokumentasjonen til React](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx).

> 💡 Vi kan anbefale funksjonen [`formatDistanceToNow`](https://date-fns.org/v2.4.1/docs/formatDistanceToNow) fra biblioteket `date-fns` for å vise timestamp-informasjonen.

<details><summary>🚨Løsningsforslag</summary>
`children` er en spesiell prop. Når du skrive koden din slik:

```js
<MinKomponent>Hei og hallo</MinKomponent>
```

så dukker innholdet mellom taggene (i dette tilfellet "Hei og hallo") opp i denne prop-en. Med andre ord: `props.children === 'Hei og Hallo'`.

Dette kan man bruke til å sette sammen flere komponenter, og lage hierarkier, slik som HTML har fra før av.

I denne oppgaven skulle vi implementere tre komponenter. La oss ta en av gangen.

```js
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function Timestamp(props) {
  return (
    <div className="timestamp">{formatDistanceToNow(props.timestamp)} ago</div>
  );
}
```

Her er det ikke veldig mye nytt. Vi importerer og kaller funksjonen `formatDistanceToNow` for å gjøre om et dato-objekt til en tekststreng som beskriver hvor lenge siden tidspunktet var.

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

`<Post />`-komponenten vår bruker alt på en gang! Her sender vi inn `props.author` som `children`-propen til `<Author />`-komponenten, etterfulgt av at vi plasserer `Post`'s egne `props.children`-prop under. Til slutt plasserer vi `<Timestamp />`-komponenten nederst, og videresender `createdDate`-propen.

Hele `<App />`-koden blir slik:

```js
function App() {
  return (
    <div className="App">
      <Header />
      <div className="posts">
        {images.map((image) => (
          <Post
            key={image.id}
            author={image.username}
            timestamp={image.createdDate}
          >
            <Image src={image.url} alt={image.description} />
          </Post>
        ))}
      </div>
    </div>
  );
}
```

Henger du med? Hvis ikke er det helt okei. Still spørsmål til de som går rundt og hjelper.

</details>

### Oppgave 6: Vis ett og ett bilde

Alle de kule appene har forskjellige sider og URLer. Det burde vi også få oss. I denne oppgaven skal vi bruke biblioteket `react-router-dom` til å lage to forskjellige sider i applikasjonen vår - `FeedPage` og `DetailPage`.

> 💡 Begynn med å ta en titt på [dokumentasjonen til React Router](https://reacttraining.com/react-router/web/guides/quick-start) for en rask introduksjon til de forskjellige funksjonene du finner der.

🏆 Lag to nye komponenter - `FeedPage` og `DetailPage`. `FeedPage` bør vise listen over bilder du hadde fra før av. `DetailPage` bør vise bildet som har IDen i URLen.

Bruk `BrowserRouter`- og `Route`-komponentene fra `react-router-dom` til å spesifisere URLene de forskjellige sidene skal vises på. `FeedPage` bør vises på `/`, og `DetailPage` bør vises på `/post/:id`.

> 💡 `/post/:id` er en såkalt dynamisk route. Den vil treffe alle URLer på formen `/post/1`, `/post/1337`, `/post/ett-eller-annet`. Du kan hente ut verdien av `:id` med funksjonen [`useParams()`](https://reacttraining.com/react-router/web/api/Hooks/useparams).

🏆 Legg på en lenke rundt hvert bilde, slik at man kan navigere til detalj-siden for det bildet. URLen burde være `/post/iden-til-det-bildet`.

🏆 Legg på en lenke i `<h1 />`-taggen, slik at man kan trykke på "logoen" for å returnere til feeden igjen.

> 💡 For interne lenker er [`Link`](https://reacttraining.com/react-router/web/api/Link)-komponenten fra `react-router-dom` fin å bruke. For eksterne lenker ut av appen din kan du bruke vanlige `<a href />`-tags.

<details><summary>🚨Løsningsforslag</summary>
I denne oppgaven skal vi introdusere routing - det å kunne ha flere forskjellige URLer, og vise forskjellig innhold på hver av sidene.

Vi starter med å installere biblioteket `react-router-dom`, som er den mest populære måten å løse dette på i dag. Du kan finne dokumentasjonen på https://reacttraining.com/react-router/web/guides/quick-start. Det er allerede lagt til `package.json` for deg, så du trenger ikke slenge det på.

Dette biblioteket er egentlig ganske enkelt. Man spesifiserer en komponent, og for hvilke URLer man vil at denne komponenten skal vises.

Vi starter med å refaktorere koden som lister ut bilder i en ny komponent - `<FeedPage />`.

```js
function FeedPage() {
  return (
    <div className="posts">
      {images.map((image) => (
        <Post author={image.username} timestamp={image.createdDate}>
          <Image key={image.id} src={image.url} alt={image.description} />
        </Post>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <FeedPage />
    </div>
  );
}
```

Dette ser jo egentlig ganske ryddig ut! Neste vi må gjøre er å wrappe hele App-komponenten vår i en `<BrowserRouter />`-komponent.

```js
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <FeedPage />
      </div>
    </BrowserRouter>
  );
}
```

Vi skal vise to forskjellige sider - en på url-en "/" (altså på rotnivå), og en på urlen "/post/1", "/post/2" osv, avhengig av IDen til bildet vi skal vise. Vi kaller hver av disse to URLene en rute - eller route på engelsk. For å vise en komponent hvis URLen "matcher" `"/"`, for eksempel - trenger vi å bruke en `<Route />`-komponent (også fra `react-router-dom`-pakken):

```js
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/">
          <FeedPage />
        </Route>
      </div>
    </BrowserRouter>
  );
}
```

Her sender vi inn `path` som er URLen vi vil "matche", `exact` for at vi bare vil vise denne siden når urlen er _eksakt_ "/", og så sender vi inn det vi vil vise som `children` når URLen matcher.

Det gir ikke mye mening å bare ha en rute når man har en router, så la oss legge til detaljsiden også. Vi vil vise detaljsiden når URLen er "/post/1", "/post/2" osv - da kan vi bruke en såkalt "route parameter", og spesifisere path-en som "/path/:id".

```js
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/">
          <FeedPage />
        </Route>
        <Route exact path="/post/:id">
          <DetailPage />
        </Route>
      </div>
    </BrowserRouter>
  );
}
```

`DetailPage` ser ganske lik ut som `FeedPage`, bare at den lister ut en enkel side:

```js
import { useParams } from "react-router-dom";
function DetailPage() {
  const { id } = useParams();
  const image = images.find((image) => image.id === id);
  return (
    <div className="detail">
      <Post author={image.username} timestamp={image.createdDate}>
        <Image key={image.id} src={image.url} alt={image.description} />
      </Post>
    </div>
  );
}
```

Som du ser av koden over, kan man hente ut verdien av `:id` fra funksjonen `useParams` - hvor `id` er `tekstenEtterKolon` i `path`-parameteret. Så bruker vi den IDen til å slå opp riktig element i `images`-arrayet.

For at det skal være noe vits med slike ruter, trenger vi å lage noen lenker mellom dem også. Der må vi bruke nok en komponent fra `react-router-dom` - nemlig `<Link />`. Du kan se dokumentasjonen her: https://reacttraining.com/react-router/web/api/Link

Vi lager to lenker - logoen vår i `<Header />`-komponenten lenker til "/", og hvert bilde lenker til "/post/{iden-til-det-bildet}". Slik ser det ut:

```js
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="site-header">
      <h1>
        <Link to="/">Bekkstagram</Link>
      </h1>
    </header>
  );
}
```

```js
function FeedPage(props) {
  return (
    <div className="posts">
      {images.map((image) => (
        <Post
          key={image.id}
          author={image.username}
          timestamp={image.createdDate}
        >
          <Link to={`/post/${image.id}`}>
            <Image src={image.url} alt={image.description} />
          </Link>
        </Post>
      ))}
    </div>
  );
}
```

> 💡 Legg merke til at vi bruker "bakoverfnutter" når vi setter sammen lenken i `<Link to />`-propen. Dette kalles en "template string", og lar deg interpolere verdier i en string. Du kan lese mer om dem på [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

Til sammen har vi nå en app med to "sider". En feed-side, som egentlig bare er en feed-komponent som bare vises når URLen er "/", og en detaljside, som er en detalj-komponent som bare vises når URLen er "/post/1" osv.

</details>

## Del 2: Tilstand og sideeffekter

Mye av det vi har gjort til nå kunne vi fått til med mye mindre kode, og helt uten et rammeverk. Ingenting endrer seg jo! Heldigvis er det nettopp her React skinner.

React har innebygget funksjonalitet for å huske på tilstand, fyre av side-effekter og masse annet. Denne funksjonaliteten kalles for "hooks".

Du kan lese om hooks [her](https://reactjs.org/docs/hooks-intro.html), og finne et oppslagsverk [her](https://reactjs.org/docs/hooks-reference.html). Du trenger ikke lese gjennom det nå, men ha det gjerne tilgjengelig mens du løser oppgavene i del 2.

> 💡 Synes du App.js-filen din begynner å bli litt lang? Nå kan det være en god ide å refaktorere den ut i flere forskjellige filer. Man kan plassere en komponent i en fil, eller ha flere relaterte i samme fil - eller bare ha alt i en eneste fil også. Her er det dessverre ingen gale svar - finn den strukturen som fungerer for deg!

### Oppgave 7: Legg til likes som lokal state på hvert bilde

La oss gjøre Bekkstagram litt mer avhengighetsskapende ved å introdusere likes. Antall likes et bilde har kan ses på som en tilstand, og dette er en perfekt anledning til å ta i bruk hooken `useState`.

🏆 Bruk hooken `React.useState` til å holde styr på antall likes en post har fått. Den burde starte på 0.

> 💡 Synes du syntaksen `const [enTing, enAnnenTing] = React.useState()` er litt rar? Dette kalles array-destrukturering, og det kan du lese mer om i [denne artikkelen](https://dev.to/sarah_chima/destructuring-assignment---arrays-16f). Kort forklart henter det ut de to første elementene i et array, og lagrer dem som konstanter med egne navn.

🏆 Lag en knapp som har en "👍" inni seg, og gi den klassen "like-button".

> 💡 Send gjerne inn propen `aria-label` med en beskrivelse av hva knappen gjør også - da er det lettere for svaksynte å bruke appen din!

🏆 Når man trykker på knappen bør man oppdatere antall likes.

> 💡 Du kan sende inn en funksjon til propen `onClick` som kjøres hver gang noen klikker på knappen.

> 💡 Når man sender inn en funksjon, så må man huske på å _ikke_ kalle den med en gang! Med andre ord - istedenfor å skrive `onClick={handleClick()}`, så skriver du `onClick={handleClick}`. Når noen klikker på knappen vår, er det React sin jobb å kalle `handleClick`-funksjonen vår.

<details><summary>🚨 Løsningsforslag</summary>

I oppgave 7 skulle vi implementere å like bilder.

Vi starter med å lage en ny komponent - `<Likes />`:

```js
function Likes(props) {
  return <div className="likes" />;
}
```

Neste steg er å begynne å bruke den i `<Post />`-komponenten vår også:

```js
export default function Post(props) {
  return (
    <div className="post">
      <Author>{props.author}</Author>
      {props.children}
      <div className="post-details">
        <Timestamp timestamp={props.createdDate} />
        <Likes /> {/* ⬅️ her!*/}
      </div>
    </div>
  );
}
```

Siden vi nå skal innføre en tilstand (state) i appen vår, trenger vi å bruke hooken `React.useState`. Denne funksjonen tar i mot et argument, som er den initielle verdien. Den returnerer et array, hvor første element er verdien (tilstanden), og andre element er en funksjon som oppdaterer verdien. Man kan bruke en teknikk som heter destrukturering til å lage to variabler av disse.

```js
function Likes(props) {
  const [likes, setLikes] = React.useState(0);
  return <div className="likes" />;
}
```

Du kan også skrive det på denne måten om du vil:

```js
const state = React.useState(0);
const likes = state[0];
const setLikes = state[1];
```

(men ikke gjør det - det er ikke like lett å lese).

Neste steg er å vise antall likes:

```js
function Likes(props) {
  const [likes, setLikes] = React.useState(0);
  return <div className="likes">Likes: {likes}</div>;
}
```

Når vi ser på websiden, ser vi at det står "Likes: 0"

Del to av oppgaven består i å lage en knapp man kan trykke på, og som legger til en til antall likes.

```js
function Likes(props) {
  const [likes, setLikes] = React.useState(0);
  function incrementLikes() {
    setLikes(likes + 1);
  }
  return (
    <div className="likes">
      Likes: {likes}{" "}
      <button className="like-button" onClick={incrementLikes}>
        👍
      </button>
    </div>
  );
}
```

Vi lager først en ny funksjon `incrementLikes`, som kaller `setLikes`-funksjonen med antall likes + 1. Du kan også sende inn en funksjon som tar imot nåværende verdi, og som returnerer oppdatert verdi:

```js
function incrementLikes() {
  setLikes((currentLikes) => currentLikes + 1);
}
```

Man bør bruke sistnevnte om den nye verdien avhenger av den gamle verdien - for å garantere at ikke noe annet oppdaterer antall likes i mellomtiden.

Det var det! Vi kan nå like bildene våre! Om det bare var en måte å la serveren vår huske det på...

</details>

### Oppgave 8: Sideeffekter

React-komponenter er egentlig ganske vanlige "rene" eller "pure" funksjoner. De blir kalt med noen argumenter (props), og returnerer litt JSX (viewet vårt). Dette gjør React ganske enkelt å forstå seg på. Men av og til trenger vi å påvirke noe utenfor komponenten vår også.

I oppgave 8 skal vi fokusere på å utføre forskjellige side-effekter. Side-effekter er handlinger som påvirker noe utenfor "React-verdenen" - som å kalle DOM-APIer, hente data og så videre.

### 8A: Oppdater tittel

Når man går inn på et bilde burde man oppdatere tittelen til websiden (det som står oppe i fanen).

🏆 Bruk hooken `React.useEffect` til å oppdatere tittelen til å si "📷 av @brukernavn" når man går inn på en detaljside.

> 💡 Du kan sette sidetittelen med å endre `document.title`

<details><summary>🚨 Løsningsforslag</summary>
En side-effekt er noe som påvirker noe utenfor React-verdenen. Det kan være å kalle DOM-APIer, hente data eller noe helt annet. I dette tilfellet vil vi oppdatere dokument-tittelen - den tekststrengen som vises i nettleser-fanen.

Vi bruker den innebygde hooken `React.useEffect` for å kjøre denne side-effekten inni komponenten vår. `useEffect` tar i mot en funksjon som skal utføre side-effektene for oss. Vi kan implementere det slik:

```js
React.useEffect(() => {
  document.title = "Min nye tittel";
});
```

I vårt tilfelle vil vi at tekst-strengen skal gjenspeile hvilken bruker som har lastet opp bildet. Det er ikke noe vanskeligere enn vanlig:

```js
React.useEffect(() => {
  document.title = `📷 av ${image.username}`;
});
```

Når du navigerer fra ett bilde til et annet ser du at tittelen oppdaterer seg. Om du jobber i CodeSandbox, må du riktignok åpne panelet til høyre i ene egen fane for å se det.s

Sluttresultatet ser slik ut:

```js
function DetailPage(props) {
  const { id } = useParams();
  const image = images.find((image) => image.id === id);
  React.useEffect(() => {
    document.title = `📷 av ${image.username}`;
  });
  return (
    <div className="detail">
      <Post author={image.username} timestamp={image.createdDate}>
        <Image src={image.url} alt={image.description} />
      </Post>
    </div>
  );
}
```

</details>

### 8B: Oppdater tittel (del 2)

Oppgave 8A innførte en liten bug - når man returnerer til feed-siden (hovedsiden) resetter man ikke tittelen! Det bør vi gjøre noe med. Refaktorer ut en funksjon som setter tittelen for deg, og kall den `useTitle`. Dette er hva man kaller en [custom hook](https://reactjs.org/docs/hooks-custom.html).

> 💡 En custom hook er bare en helt vanlig funksjon som starter med `use`, og som kaller en eller flere hooks. Det er ikke noe mer magi!

> 💡 Husker du `useParams` fra da vi satt opp routing i oppgave 6? Det er en custom hook det også!

🏆 Bruk din første egenlagde custom hook både på `DetailPage` og `FeedPage`.

<details><summary>🚨 Løsningsforslag</summary>
Denne oppgaven er nesten bare copy paste.

Vi lager en ny fil - `useTitle.js`, og fyller inn følgende:

```js
import React from "react";

export default function useTitle(title) {
  React.useEffect(() => {
    document.title = title;
  });
}
```

Eller som pilfunksjon:

```js
import React from "react";

const useTitle = (title) => {
  React.useEffect(() => {
    document.title = title;
  });
};

export default useTitle;
```

Med andre ord så lager vi en funksjon som kaller en hook. Dette er hva man kaller en custom hook.

Vi kan nå endre koden vår i `DetailPage` til å kalle den nye hooken vår:

```js
import useTitle from './useTitle';

export default function DetailPage(props) {
  const image = images.find(
    image => image.id === Number(props.match.params.id),
  );
  useTitle(`📷 av ${image.username}`);
  return (...);
```

Vi kan også lett bruke samme funksjonalitet i `FeedPage`:

```js
import useTitle from './useTitle`;

export default function FeedPage(props) {
  useTitle(`Bekkstagram`);
  return (...)
}
```

</details>

### 8C: Oppdater tittel (del 3)

Custom Hooken vår ser fin ut - men den setter tittelen hver eneste gang vi rendrer siden vår. Det er kanskje ikke noe problem akkurat nå - men det kan det fort bli.

🏆 Oppdater `useTitle` med et `dependency array` som andre argument. ([Her er dokumentasjonen](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects))

> 💡 Konseptuelt så kan du tenke på dependency-arrayet som en liste over ting, som, hvis de endres, krever at man kjører funksjonen som sendes inn til `React.useEffect` en gang til. Man kan kalle det å "synkronisere en effekt med tilstanden". Lettere forklart: Om en ting i dependency-arrayet endrer seg, kjør funksjonen på nytt med nye verdier.

<details><summary>🚨 Løsningsforslag</summary>
Det eneste vi trenger å gjøre her er å legge til et array som andre argument i useEffect. Bruker man et tomt array trigges useEffect kun ved første render. Vi vil derimot at useEffect trigges hver gang `title` endrer seg, derfor legger vi `title` inni arrayet.

```js
export default function useTitle(title) {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
}
```

</details>

### Oppgave 9: Hent data fra backenden

Akkurat nå leser vi bare statisk data som vi har hardkodet inn i appen. La oss hente data fra APIet vårt!

Du kan kalle den asynkrone funksjonen `getFeed` fra `./server`-filen i prosjektet. Den returnerer et [Promise](https://medium.com/@PangaraWorld/an-introduction-to-understanding-javascript-promises-37eff85b2b08), som etterhvert returnerer en liste med bilder.

🏆 Hent en liste med bilder med `getFeed` funksjonen, og list dem ut på `FeedPage`.

> 💡 Du kan bruke `useEffect` til å hente data fra serveren. Husk å bare hente ny data når det trengs - i vårt tilfelle er det bare når vi laster siden!

> 💡 For å bare kjøre `useEffect` når man laster siden, så kan du spesifisere et tomt dependency array

> 💡 Du kan lagre dataen i en `useState`-hook.

<details><summary>🚨 Løsningsforslag</summary>

For å hente bildene lager vi en ny custom hook `useFeed` som kan implementeres slik:

```js
import { getFeed } from "./server";

const useFeed = () => {
  const [images, setImages] = React.useState(null);
  React.useEffect(() => {
    getFeed().then((data) => setImages(data));
  }, []);
  return images;
};
```

Denne hooken bruker `getFeed` metoden til APIet vårt for å hente alle bildene i feeden vår. Når serveren har sendt oss dataene, kalles funksjonen inni `then` - og der oppdaterer vi staten vår med den dataen.

> Denne måten å uttrykke asynkronitet - eller det å vente på noe - på, heter promises. Du kan lese litt mer om dem her om du er interessert: https://medium.com/@PangaraWorld/an-introduction-to-understanding-javascript-promises-37eff85b2b08

I denne custom hooken bruker vi flere hooks på en gang - både `useEffect` og `useState`. Det er helt innafor - og noe man gjør ganske ofte.

Vi sender inn et tomt array som andre argument til `useEffect`. Det betyr at denne sideeffekten kun skal kjøres en gang - når siden rendres for første gang. Vi vil jo bare hente listen over bilder når man går inn på siden - ikke hver gang man liker et bilde!

I slutten av custom hooken vår returnerer vi bildene våre. Første gang siden lastes vil denne verdien være `null`, og når dataen har blitt lagret, vil verdien være en liste av bildedetaljer.

I `FeedPage`-komponenten kan vi sette `images`-konstanten til å være lik resultatet fra `useFeed`.

```js
const images = useFeed();
```

Siden `images` kan være `null` nå, så er det viktig at vi sjekker om vi har bilder eller ei. Det kan vi gjøre slik:

```js
const images = useFeed();

if (!images) {
  return null;
}
```

Hvis du vil så kan du implementere en spinner her også - men det lar vi være en ekstraoppgave for den spesielt interesserte.

På samme måte kan vi lage en custom hook som henter akkurat det bildet du klikker deg inn på. Her legger vi også til et dependency array basert på bilde ID'en, slik at 'useImage' som bruker 'getImage', kjører hvis ID'en endrer seg.

```js
import { getImage } from "./server";

const useImage = (id) => {
  const [image, setImage] = React.useState(null);
  React.useEffect(() => {
    getImage(id).then((data) => setImage(data));
  }, [id]);
  return image;
};
```

En måte å tenke på `useEffect` er at den synkroniserer tilstand basert på de verdiene du plasserer i dependency arrayet. Hvis en verdi i den lista endrer seg, vel, da må side-effekten kjøres en gang til for at alt skal være riktig.

Denne henter vi i DetailPage komponenten vår.

```js
const image = useImage(id);
```

Det samme gjelder her - om vi får tilbake `null` fra `useImage`, så må vi passe på å returnere `null` fra komponenten vår også.

</details>

### Oppgave 10: Legg til bilder!

Ingen bilder er like kule som sine egne. I denne oppgaven skal du prøve å laste opp dine egne.

> 💡 Før du begynner denne oppgaven så anbefaler vi at du åpner filen `sett-brukernavnet-ditt-her.js`", og gir deg selv et unikt brukernavn!

For å gjøre det enkelt, lar vi deg kun legge til bilder som allerede ligger på internett. Finn en URL til et bilde du har rettighetene til, og vis det på siden!

🏆 Lag et brukergrensesnitt for å legge til bilder. Vi trenger en URL og en beskrivelse. Bruk `uploadImage`-funksjonen fra `./server`-filen for å laste opp bilder.

> 💡 Funksjonen `uploadImage` tar imot et objekt som argument:
>
> ```js
> import { uploadImage } from "./server";
> // ...
> uploadImage({
>   url: "https://placekitten.com/600/400",
>   description: "A very cute kitten",
> });
> ```

🏆 Legg til en knapp på siden for å vise "legg til bilde"-grensesnittet ditt. Du kan f.eks. vise denne brukerinputen med pakken `@reach/dialog`, eller skrive din egen.

> 💡 @reach/dialog er en ferdig installert pakke i dette prosjektet. Du finner dokumentasjonen til @reach/dialog på [hjemmesiden deres](https://ui.reach.tech/dialog/)
>
> ```js
> import { Dialog } from "@reach/dialog";
> import "@reach/dialog/styles.css";
> ```

> 💡 Importer et bildeikon av et kamera for å bruke som legg-til-bilde-knapp fra [react-icons](https://www.npmjs.com/package/react-icons), her et ikon fra [Font Awesome](https://fontawesome.com/icons?d=gallery&q=camera):
>
> ```js
> import { FaCameraRetro } from "react-icons/fa";
> ```
>
> Du kan også legge på klassen "camera-button" på knappen din for å få den til å se pen ut, og dukke opp nede i hjørnet :)

🏆 Hvis du sender inn en ugyldig URL til `uploadImage` vil den throwe en exception. Hvis dette skjer, si ifra til brukeren, og da dem prøve igjen!

🏆 Sørg for at bildefeeden refresher seg og oppdateres med det nye bildet etter at det har blitt lagt til.

<details><summary>🚨 Løsningsforslag</summary>
Denne oppgaven kan nok løses på flere måter, men vi har valgt å implementere en knapp som åpner en modal/dialog med to input-felter hvor man kan skrive inn en bildeurl og en beskrivelse. Det meste er laget i en ny `<AddImage>`-komponent.

Selve knappen vi har brukt er bare et ikon av et kamera vi har hentet fra et ekstern bibliotek, og kan importeres (som en komponent) slik:

```js
import { FaCameraRetro } from "react-icons/fa";
```

Denne har en `onClick`-prop som vi kan bruke for å åpne dialogen vi vil skal dukke opp. Vi kan importere en veldig fin Dialog-komponent fra biblioteket "reach" slik:

```js
import { Dialog } from "@reach/dialog";
```

Dialog-komponenten har en del props, deriblant `isOpen` og `onDismiss`, som det er naturlig å styre med en state i `<AddImage>`-komponenten vår. Et par states til er også naturlig å ha for å lagre url'en og beskrivelsen som man etterhvert skriver inn i input-feltene:

```js
const [showDialog, setShowDialog] = React.useState(false);
const [imageUrl, setImageUrl] = React.useState("");
const [imageDescription, setImageDescription] = React.useState("");
```

`isOpen`-propen til Dialog kan da settes til `showDialog` og `onDismiss` kaller `setShowDialog(false)`.

Alt innholdet i dialogen sendes inn som `children` til `Dialog`-komponenten. Det som dialogen blant annet må inneholde er en knapp som fyrer avgårde et api-kall til backenden for å lagre bilde med url'en og beskrivelsen som er spesifisert. Dette kan man gjøre direkte, f. eks bare:

```js
<button onClick={() => uploadImage(imageUrl, imageDescription)}>
  Publiser!
</button>
```

Men da vil ikke feeden oppdatere seg automatisk. <FeedPage> vil oppdateres hvis staten oppdateres. Hvis vi dermed legger bildene i en state og lager en funksjon for å legge til et bilde til staten, kan vi sende denne funksjonen ned til `<AddImage>`-komponenten og kalle denne herfra etter å ha sendt bildet til backenden med api'et (`uploadImage`-metoden vil returnere det nye bilde-objektet som har blitt lagt til). Da vil staten til `<FeedPage>` oppdateres med det nye bildet og komponenten vil rendres på nytt med det nye bildet.

Endringene som da kan gjøres i `<FeedPage>`:

```js
const [images, setImages] = React.useState(null);

const imagesFromFeed = useFeed();

React.useEffect(() => {
  setImages(imagesFromFeed);
}, [imagesFromFeed]);

const onAddImage = (image) => {
  setImages((prevImages) => [...prevImages, image]);
};
```

Samt legge til `<AddImage>`-komponenten helt nederst i `<FeedPage>`:

```js
<AddImage onAddImage={onAddImage} />
```

Hele den nye `<AddImage>`-komponenten:

```js
import React from 'react';
import { uploadImage } from './server';
import { FaCameraRetro } from 'react-icons/fa';
import { Dialog } from '@reach/dialog';

export const AddImage = props => {
  const [showDialog, setShowDialog] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState('');
  const [imageDescription, setImageDescription] = React.useState('');

  const addImage = async (url, description) => {
    const imageResponse = await uploadImage({
      url,
      description;
    });
    if (!imageResponse) {
      return;
    }
    props.onAddImage(imageResponse);
    resetAndCloseDialog();
  };

  const resetAndCloseDialog = () => {
    setImageUrl('');
    setImageDescription('');
    setShowDialog(false);
  };

  return (
    <div className="add-image-container">
      <button className="camera-button" onClick={() => setShowDialog(true)}>
        <FaCameraRetro />
      </button>
      <Dialog
        className="add-image-dialog"
        isOpen={showDialog}
        onDismiss={() => setShowDialog(false)}
      >
        <h3>Publiser et nytt bilde</h3>
        <input
          className="add-image-dialog-input"
          value={imageUrl}
          onChange={event => setImageUrl(event.target.value)}
          placeholder="Url'en til bildet..."
        />
        <input
          className="add-image-dialog-input"
          value={imageDescription}
          onChange={event => setImageDescription(event.target.value)}
          placeholder="Bildebeskrivelse..."
        />
        {imageUrl.length > 0 ? (
          <button
            className="add-image-dialog-publiserbutton"
            onClick={() => addImage(imageUrl, imageDescription)}
          >
            Publiser!
          </button>
        ) : (
          <button className="add-image-dialog-publiserbutton-disabled" disabled>
            Publiser!
          </button>
        )}

        <button
          className="add-image-dialog-avbrytbutton"
          onClick={() => {
            resetAndCloseDialog();
          }}
        >
          Avbryt
        </button>
      </Dialog>
    </div>
  );
};
```

</details>

### Oppgave 11: Kommentarer

På tide å legge til det morsomste med internett: kommentarfelt! Både mulighet for å vise kommentarer og legge til nye. Kommentarer ligger lagret som et array på hvert bildeobjekt som vi hentet fra backend i oppgave 9, så vi har allerede tilgang til det som ligger lagret i databasen fra før. Her er det bare å eksperimentere med nye komponenter og gjenbruke det dere hittil har lært! `<button>` og `<input>` er nyttige html-tags i denne oppgaven.

🏆 List ut kommentarer under hvert bilde.

> 💡 Tips: HTMLen din kan ha denne strukturen for styling:
>
> ```html
> <div class="comments">
>   <div class="comment">
>     <span class="comment-user">@selbekk</span>
>     <span class="comment-text">Sykt kult bilde!</span>
>     <span class="timestamp">2 days ago</span>
>   </div>
> </div>
> ```

🏆 Legg til mulighet for å legge til en ny kommentar. Du kan bruke `putComment`-funksjonen fra `./server`-filen.

> 💡 Funksjonen `putComment` tar imot to argumenter - bilde-iden kommentaren gjelder, og selve kommentaren:
>
> ```js
> import { putComment } from "./server";
> // ...
> putComment(imageId, comment);
> ```

🏆 Oppdater listen med kommentarer med den nye kommentaren!

> Tips til oppsett: En "container"-komponent `<Comments>` rendret under hvert bilde som går gjennom alle kommentarene til bildet og rendrer en `<Comment>` for hver kommentar og til slutt en `<CommentForm>`-komponent.

<details><summary>🚨 Løsningsforslag</summary>
I denne oppgaven trenger vi flere nye komponenter.

Først kan vi lage selve kommentar-komponenten, som skal vise hvem som postet kommentaren, kommentarteksten og en timestamp. Under har vi lagt kommentarteksten og brukeren i hver sin komponent:

```js
export const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <span className="comment-user">{comment.username}</span>
      <span className="comment-text">{comment.text}</span>
      <Timestamp timestamp={comment.createdDate} />
    </div>
  );
};
```

Det kan være lurt å ha en "container"-komponent som innkapsler underkomponenter for bl.a. å ha en felles, overordnet styling på komponentene og gjøre det hele mer ryddig, i dette tilfellet ´Comments.js´. Denne tar inn hele arrayet med kommentarer som children, itererer over disse og rendrer `Comment` for hver av kommentarene. I tillegg rendrer den `CommentForm` som håndterer skriving av nye kommentarer.`Comment` skal kun rendres hvis det finnes noen kommentarer, `CommentForm` skal alltid rendres (scroll lengre ned for forslag til hvordan den kan implementeres).

```js
export const Comments = (props) => {
  if (props.comments) {
    return (
      <div className="comments">
        {props.comments.map((comment, key) => (
          <Comment key={key} comment={comment} />
        ))}
        <CommentForm imageId={props.imageId} />
      </div>
    );
  }
  return <CommentForm imageId={props.imageId} />;
};
```

`Comments.js` kan vi rendre i `Post`-komponenten vår. Kommentarene har vi automatisk tilgang til etter at vi har hentet alle bildene med API'et, da hvert bildeobjekt har et `comments`-array. Vi sender også med bilde-id'en som en egen prop for senere å kunne hente kommentarene fra backenden hvis dette skulle endre seg (ved at noen legger til nye kommentarer).

```js
const Post = (props) => {
  return (
    <div className="post">
      <Author>{props.author}</Author>
      {props.children}
      <div className="post-details">
        <Timestamp timestamp={props.createdDate} />
        <Likes />
      </div>
      <Comments imageId={props.imageId} comments={props.comments} />
    </div>
  );
};
export default Post;
```

Nå vises alle kommentarene som allerede har blitt lagt til på hvert bilde, så da mangler det bare støtte for å skrive nye! Vi lager en ny komponent,`CommentForm.js`, og rendrer den rett under `Comments` i `Post`. `CommentForm` trenger et `<input />`-felt og en `<button>`.

Hittil har vi kun hentet data med api'et, nå skal vi også skrive til backenden. Det gjør vi med `putComment()`-funksjonen, som trenger en bilde-id og et kommentarobjekt. Denne skal kalles når man klikker på knappen, så vi lager en `onCommentSubmit()`-funksjon som vi refererer til i `onClick`-propen til `<button />` som igjen kaller `putComment()`. Denne blir da kalt når knappen klikkes på.

Vi bruker state til å lagre kommentaren man skriver i input-feltet som en streng, og oppdaterer state'en ved å kalle `setState`-funksjonen i `onChange`-funksjonen til `<input />`-feltet.

En validering som ikke tillater å poste en kommentar med mindre man har skrevet noe i input-feltet er også lurt å inkludere.

```js
import { putComment } from "./server";

export const CommentForm = (props) => {
  const [comment, setComment] = React.useState("");

  async function onCommentSubmit() {
    if (comment.length === 0) {
      return;
    }
    await putComment(props.imageId, comment);
    setComment("");
  }

  return (
    <div className="comment-form">
      <input
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="Add a comment..."
      />
      <button className="comment-form-button" onClick={onCommentSubmit}>
        Post
      </button>
    </div>
  );
};
```

Du legger kanskje merke til at du ikke får opp kommentaren du la til før du refreshet siden?

Vi kan løse dette ved å innføre state i `<Comments>` og lage en `addComment`-funksjon som setter denne staten, som vi igjen sender med til `<CommentForm>`-komponenten som kan kalle denne funksjonen når vi legger til en kommentar. Istedenfor å rendre propsene `<Comments>` mottar direkte rendrer vi heller denne staten. Derfor, når `<CommentForm>` endrer staten til `<Commen ts>`, vil det trigge en re-render av `<Comments>` med oppdatert comments-array siden staten har endret seg. Ved bruk av hooks/useState trigges det nemlig en re-render av komponenten når staten endres.

I `Comments.js`:

```js
export const Comments = (props) => {
  const [comments, setComments] = React.useState(props.comments);

  const addComment = (comment) => {
    setComments((prevState) => [...prevState, comment]);
  };

  if (comments) {
    return (
      <div className="comments">
        {comments.map((comment, key) => (
          <Comment key={key} comment={comment} />
        ))}
        <CommentForm
          addComment={(comment) => addComment(comment)}
          imageId={props.imageId}
        />
      </div>
    );
  }

  return <CommentForm imageId={props.imageId} />;
};
```

Endre `onCommentSubmit()` i `<CommentForm>` til.

```js
async function onCommentSubmit() {
  const commentsResponse = await putComment(props.imageId, comment);
  props.addComment(commentsResponse);
  setComment("");
}
```

Viktig å merke seg await'en, siden `putComment()` er en async funksjon må vi vente på svar før vi fortsetter.

</details>

## Ekstraoppgaver

Vi har endel ekstraoppgaver som du kan bryne deg på om du får tid, eller om du trenger noen ekstra utfordringer på et senere tidspunkt.

Vi har laget et API som har støtte for mye rart. Ta en titt på [koden om du vil](https://github.com/markusra/bekkstagram-api). Oppdater likes til backend, eller hva du vil egentlig :)

- Vis bildebeskrivelsen under hvert bilde
- Implementer at man bare kan like ett bilde per bruker
- Implementer støtte for å lagre et like til serveren
- Legg til støtte for hashtags
- List ut alle bildene til en bruker
- Søk etter innhold basert på hashtags, beskrivelser, brukernavn osv
- Legg til paginering (hent litt og litt bilder)

Om du vil prøve deg på noe helt nytt, så har vi et par ideer du kan bryne deg på her:

- **Lag din egen todo-liste!** Det er kanskje et utbrukt eksempel, men det er en fin måte å lære seg React på. Legg til støtte for å legge til todos, si at du er ferdig med dem, og filtrer ut både ferdige og gjenstående gjøremål.
- **Lag din egen PokeDex!** Om du fortsatt er glad i Pokemon, så kan du jo bruke [PokeAPI](https://pokeapi.co/) som datakilde, og lage din helt egne PokeDex! Legg til støtte for å liste ut alle pokemons, og å se detaljer om en spesifikk en.
- **Lær deg litt om animasjon i React!** Vi har laget en animasjonsworkshop også, der du lærer å bruke animasjonsrammeverket Framer Motion. Den finner du [her](https://github.com/bekk/react-animation-workshop)
- **Prøv deg på TypeScript!** TypeScript er en måte å bringe statisk typesikkerhet til React-koden din. Vi har selvfølgelig laget en workshop her også, som du finner [her](https://github.com/bekk/typet-javascript-workshop)
- [Front-end Mentor](https://www.frontendmentor.io/challenges) er en fin side å finne prosjekter du kan implementere. Der får du et ferdig design, og en spec på en oppgave

Lykke til!
