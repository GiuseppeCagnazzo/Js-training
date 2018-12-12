// max & min

var list = [7, 5, -12, 6, 32, 18, 14, -2];
// console.log(Math.min(list));
var minimum = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
console.log(minimum);


var list2 = [-3, 9, 21, 36, 27, 54, 17, 35];
// console.log(Math.min(list));
var maximum = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
console.log(maximum);


var som = maximum + minimum;
console.log(som);

// Willekeurig 1

var floatSpeed = 10.4;
var lowSpeed = Math.round(floatSpeed);
console.log(lowSpeed);
var highspeed = Math.ceil(floatSpeed);
console.log(highspeed);

// Willekeurig 2

var x = Math.floor(Math.random() * (100 - 50 +1)) + 50;
console.log(x);

var y = Math.random() * 1 + 0;
console.log(y);

var z = Math.floor(Math.random() * (10 - 0 + 1));
console.log(z);

// Willekeurig 3

var Array3 = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Raptile", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
var willekeurig = Array3[Math.floor(Math.random() * Array3.length)];
console.log(willekeurig);
