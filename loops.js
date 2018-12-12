document.write("<h1>Loops oefeningen</h1>");

// Even en oneven

// Even en oneven oefening 1

// let i = 0;   // i = increment
// while (i <= 20) {
//   document.write(i);
//   i++;  //increment = increment + 1;
// }

// Even en oneven oefening 2

let i = 0;   // i = increment
while (i <= 20) {
  if (i%2==0) {
    document.write("<li>" + i + " is Even ");
  } else {
    document.write("<li>" + i + " is Odd ");
  }
  i++;  //increment = increment + 1;
}

// Oefening 2 vermenigvuldigings tabellen

for (let a = 0; a <= 10; a++) {
  console.log(a +" * 9 = " + a * 9);
}


// Oefening 3 Scoren Toewijzen
// let score = prompt("Geef een score in.")
let cijfer = 0;
for (let b = 0; b <= 100; b++) {

  if (b > 90) {
    cijfer = "A" ;
  } else if (b > 80) {
    cijfer = "B";
  } else if (b > 70) {
    cijfer = "C";
  } else if (b > 65) {
     cijfer = "D";
  } else {
    cijfer = "F";
  }
console.log("Voor " + b + " punten heb je graad " + cijfer);
}


// oefening 4 Piramide
  var row = "";
for (i=1; i<=5; i++) {
  row = row + '*';
  console.log(row);
}
