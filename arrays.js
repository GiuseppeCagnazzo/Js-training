//Oefening 1

var newArray= [1, 2, 3, 3, 4, 5, 6 ,7, 8, 9];
var som = 0;
for (i=0; i < newArray.length; i++) {
  som = som + newArray[i];
}
console.log(som);


//Oefening 2

var Actors = ["Paul", "Piet", "jan"];
for (i = 0; i < Actors.length; i++) {
  console.log("nummer",(i+1),"is",Actors[i]);
}
//Oefening 2 bonus

var Actor = ["Paul", "Piet", "jan"];
for (i = 0; i < Actor.length; i++) {
  if (i==0) {
    console.log("de eerste is",Actor[i]);
  } else if (i==1) {
    console.log("de tweede is",Actor[i]);
  } else if (i==2) {
    console.log("de derde is",Actor[i]);
  }
}

//Oefening 3

var klonen = ["Mario", "Luigi", "Peach"];
var klonen2 = klonen;
console.log(klonen2);
klonen2.push("Bowser");
console.log(klonen2);
