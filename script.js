const naam = "Jantje";
console.log("Mijn naam is " + naam);
  // naam = "Pietje;"

// Variabelen oefening 1.

let n = 5;
let x = "developer";
let y = "België";
let z = "Julie";

console.log("U wordt "+ x +" en woont in "+ y+" en bent getrouwd met "+ z+" met "+n+" kinderen.");

// Variabelen oefening 2.

let year = new Date().getFullYear();
console.log(year);
let b = 1986;
console.log(b);
let leeftijd = year - b;
console.log("Deze persoon is "+leeftijd+" jaar oud.");

// Variabelen oefening 3.

let myAge = 32;
let maxAge = 100;
let yearsLeft = maxAge -myAge;
console.log("Je hebt nog steeds " + yearsLeft + " jaar voordat je de leeftijd van " + maxAge + " bereikt hebt.");

// Variabelen oefening 4.

let resultaat = (1 + 2) * 3 + 4 / 2;
        // stap 1 = 3 * 3 + 4 / 2
        // stap 2 = 9 + 4 / 2
        // stap 3 = 9 + 2
        // stap 4 = 11
console.log(resultaat);

// Vergelijkingen oefening 1.

let exTaal = prompt("enter language");
let message = "Hello everybody";

if (exTaal === "en") {
  console.log(message);
} else if (exTaal === "fr") {
  console.log("Bonjour tout le monde");
} else if (exTaal === "nl") {
  console.log("Hallo Iedereen");
}

// Vergelijkingen oefening 2.

let score = 100;
let result = 65;

if (result >= 90) {
  console.log("Je hebt de rang A");
} else if (result < 50) {
  console.log("Je hebt de rang C")
} else if (result <= 90) {
  console.log("Je hebt de rang B");
}

// Vergelijkingen oefening 3.

let woord = "appel";
let aantal = 7;
let result_2 = aantal + " " + woord;
console.log(result_2);
if (aantal < 2) {
  console.log("Ik heb " + result_2);
} else if (aantal >= 2) {
  console.log("Ik heb " + result_2 +"s");
}
