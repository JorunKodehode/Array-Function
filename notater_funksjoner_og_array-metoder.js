/* #1. Typer funksjoner */

/*  
   Funksjonen log nedenfor er en helt vanlig navngitt funksjon, som tar ett parameter (msg) og skriver det ut i konsollen når den blir kjørt.
   (Med vanlig navngitt mener jeg at vi deklarerer den ved å bare skrive: function navnPåFunksjon() { kode },
   istedet for variabler som er satt til en funksjon, f.eks: const navnPåFunksjon = function() { kode } eller let navnPåFunksjon = () => { kode })
   En fordel med slike vanlige navngitte funksjoner er at de kan kjøres før vi deklarere dem, f.eks:
*/

log("Hei"); // dette fungerer

/** logs out the parameter (msg) to the console */
function log(msg) {
  console.log(msg);
}

/* Grunnen at dette fungerer er fordi alle vanlige funksjoner blir automatisk "heiset" helt til toppen av scriptet når den kjører. */

/* 
  Men variabler som er satt til funksjoner må deklareres før de kan kjøres.
*/

// log2("Hei") // dette ville gitt en feilmelding fordi log2 er ikke deklarert ennå

/** logs out the parameter (msg) to the console */
const log2 = function (msg) {
  console.log(msg);
};

// samme funksjon skrevet som en arrow function:
/** logs out the parameter (msg) to the console */
const log3 = (msg) => {
  console.log(msg);
};

// arrow funksjoner kan også skrives på mye kortere måter:
/** logs out the parameter (msg) to the console */
const log4 = (msg) => {
  // vi kan droppe parantesene rundt parameteret (msg) dersom vi har kun ett parameter (her har vi bare msg)
  console.log(msg);
};
/** logs out the parameter (msg) to the console */
const log5 = (msg) => console.log(msg); // dersom koden i funksjonen vår inneholder bare en linje kan vi også droppe {} rundt koden

// i funksjokene over har vi bare console.logget fra funksjonen, men det er mer vanlig i programmering å lage funksjoner som bare returnerer en verdi, f.eks:
/** returns the value of the given parameter (num) multiplied by 2 */
function doubleValue(num) {
  return num * 2;
}

// som en enlinje arrow funksjon kan dette skrives som:
const doubleValue2 = (num) => num * 2;
// legg merke til, jeg har ikke skrevet "return num * 2", det er fordi en arrow funksjon uten {} rundt kode-blokken sin automatisk forventer at vi vil returnere noe

/* 
  Funksjoner kan ta variabler som parameter (som vi har gjort over), men de kan også ta andre funksjoner som parametere:
*/

/** takes a callback functions as parameter and runs it with the string "Hi, i noticed you tried to call me" as parameter */
function showReplyMessage(callback) {
  // << jeg bruker ordet callback her, men den kan kalles akkurat det vi vil som alle andre parametere kan
  callback("Hi, i noticed you tried to call me"); // << dette må matche navnet på parameteret vi bruker (i vårt tilfelle callback)
}

// kjør showReplyMessage funksjonen og gi den console.log funksksjon som argument (viktig: console.log må skrives uten paranteser(), fordi den skal kjøres senere)
showReplyMessage(console.log);
// showMessage(console.log()) // << eksempel på feil: dette ville ikke fungert, fordi den ville kjøre console.log før showMessage funksjonen kjøres

// for å vise annet eksempel, her lager jeg en funksjon som viser en tekst på nettsiden:
/** displays given parameter (string) on the webpage */
function display(string) {
  document.body.innerHTML = string;
}

// kjør showMessage funksjonen og gi den display funksksjonen som argument
showReplyMessage(display);

// vi kan også gi showReplyMessage en anonym funksjon som argument (dette kan se ut som noe svart-magi, forklaring under):
showReplyMessage(function (paramPlaceholder) {
  console.log(paramPlaceholder);
});

// samme, men skrevet som en arrow funksjon:
showReplyMessage((paramPlaceholder) => {
  console.log(paramPlaceholder);
});

// Når vi gir en anonym funksjon som argument er det flere ting som må skrives annerledes,
// det ene er: vi har paranteser bak console.log
// og så har vi denne "paramPlaceholder" som er nok litt vanskelig å forstå (jeg kaller den paramPlaceholder men den kan kalles hva vi vil)
// uten å gå for dypt inni detaljer, det javascript ser er noe slikt (dette er ikke helt 100% det som skjer men det illustrerer hva som foregår likevel):

function showReplyMessageTolket(
  paramPlaceholder = "Hi, i noticed you tried to call me"
) {
  console.log(paramPlaceholder);
}

// Så, kort sagt den henter den midlertidige variablen (vi kalte paramPlaceholder) og satte verdien på den til "Hi, i noticed you tried to call me"
// og så kjører den funksjonen. Dette vil gi mer mening etter en har brukt det noen ganger.

// Den store fordelen med å bruke anonyme funksjoner som callback funksjoner er at dem gir oss fleksibilitet.
// Vanligvis hvis vi vil gi flere argumenter til en funksjon må vi modifisere funksjonen for å motta flere parametere,
// f.eks hvis vi vil at showMessage skal ta imot 2 funksjoner måtte vi omskrevet den slik:

function showReplyMessageExample(callback1, callback2) {
  callback1("Hi, i noticed you tried to call me");
  callback2("Hi, i noticed you tried to call me");
}

// Det blir repetitivt, og da må vi alltid passe på å kjøre den med 2 parametere, og hvis vi finner ut vi trenger flere måtte vi modifisert den funksjonen igjen.
// Men vi kan også bare gjøre slik:

showReplyMessage((msg) => {
  // jeg byttet navnet på parameteret paramPlaceholder til msg, fungerer helt likt.
  display(msg);
  console.log(msg);
  // her kunne vi lagt til ett uendelig antall funksjoner vi vil showReplyMessage skal kjøre for oss :)
});

/* #2. Loops & array methods */

// I javascript kan vi bruke tradisjonelle C-programmeringsspråk stil loops (f-eks: for, while)

for (let index = 0; index < 3; index++) {
  console.log("for loop iteration #" + index);
}

let maxInterations = 4;
while (maxInterations) {
  console.log("while loop stops in #");
  maxInterations--;
}
console.log("while loop stopped");

// De kjører veldig raskt, og kan være nyttige men de krever skriving av mange regler, når vi trenger å loope gjennom arrays finnes flere alternativer,
// en av dem er for-of loop:

// deklarer ett array:
let alphabet = ["a", "b", "c", "d", "e", "and so on"];

for (const letter of alphabet) {
  console.log(letter);
}

// men i motsetning til vanlig for-loop gir den oss ikke index verdien automatisk (dette kan av og til være nyttig)
// vi kunne selvsagt laget en variabel før loopen og manuelt lagt til +1 for hver iterasjon av loopen (med da kunne vi likegodt bare bruke vanlig for loop ?)

// litt på siden:
// for-of-loop har en "søsken" jeg ikke nevnte i undervisningen, for-in-loop. Denne gir oss ikke verdi, men bare indexen:
for (const letter in alphabet) {
  console.log(letter);
}
// den har noen få bruksområder, men den er ikke så veldig nyttig for arrays.

// På grunn av disse begrensingene har javascript arrays noen innebygde metoder vi kan kjøre direkte på en array.
// #1 .forEach
//      Denne metoden trenger en callback funksjon som tar ett parameter (dette parameteret er som i tidligere eksempel på anonym callbacks: "paramPlaceholder"
//      en slags placeholder for en verdi, som gir oss verdien på elementet i arrayet for hver iterasjon), f.eks:

alphabet.forEach((letter) => {
  console.log(letter);
});

// Vi kan i tillegg legge ved ett til parameter, den gir oss da indexen:

alphabet.forEach((letter, index) => {
  console.log(letter + " is at index " + index);
});

// .forEach brukes stortsett til å lese verdier fra ett array, dersom vi trenger å mutere (endre verdier i) ett array finnes en annen array-method:

// #2. .map
//      Denne metoden er veldig lik .forEach, den også looper gjennom ett array, trenger de samme parametere, men i tillegg returnerer den ett nytt array.

const capitalizedAlphabet = alphabet.map((letter) => {
  return letter.toUpperCase(); // << return ordet her er viktig, fordi hvert element i arrayet må returneres til det nye arrayet .map lager for oss
});

// Siden vi bruker arrow funksjon her, kan vi droppe return hvis vi også dropper { } rundt koden inni callback funksjonen:
const capitalizedAlphabet2 = alphabet.map((letter) => letter.toUpperCase());

// andre nyttige array metoder:
// .filter, som navnet hinter denne kan filtrere ett array basert på en condition, denne condition oppgis ved hjelp av en callback funksjon
//    den returnerer ett nytt array som inneholder bare elementer som matcher condition.
//    f.eks, hvis vi vil returnere ett array som bare innholder elementer som inneholder bokstaven "a":
const lettersThatContainA = alphabet.filter((letter) => letter.includes("a")); // returnerer: "and so on" og "a"

// Det er mulig å bygge kjeder av array metoder, f.eks:

const capitalizedLettersThatContainA = alphabet
  .filter((letter) => letter.includes("a"))
  .map((letter) => letter.toUpperCase());
// console.log(capitalizedLettersThatContainA) // viser: "A", "AND SO ON"
