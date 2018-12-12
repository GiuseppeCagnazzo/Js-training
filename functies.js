document.write("<h1>Functies</h1>");

// Functies oefening 1
var a = prompt("Enter a");

var b = prompt("Enter b");

let aftrek = function(a, b) {
  return a - b;
}
console.log(aftrek(a, b));

// Functies oefening 2

let division = function(c, d) {
  return c / d;
}
console.log(division(30, 3));

// Prompt

// var var_name = prompt("Enter var_name");

// Functies oefening 3

var e = prompt("Enter a number");
var f = prompt("Enter another number");
let multiplication = function(e, f) {
  return e * f;
}
console.log(multiplication(e,f));
document.write(multiplication(e,f));

// Functies oefening 4

var g = prompt("Enter a number");
var h = prompt("Enter a percentage");
let perc = (h / 100) * g;
alert(h +"% van "+ g + " = " + perc);

// Functies oefening 5

var i = prompt("Enter the distance(in km)");
var j = prompt("Enter the time(in hours)");
let speed = i / j;
document.write("Your speed is " + speed + " km/h.")
