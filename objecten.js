// non-player  character

let character = {
  name : "Paul",
  age : 32,
  items_to_give : ["zwaard", "bijl", "boog"],
  giveItem : function(waarde) {
    return character.items_to_give[waarde];
  }
}
console.log(character.name);
console.log(character.age);
console.log(character.items_to_give);
console.log(character.giveItem(Math.floor(Math.random()*character.items_to_give.length)));

// Shop


let object2 = {
  forSale : ["sword", "axe", "scepter"],
  title : ["a", "b", "c"],
  physic : [1, 5, 8],
  magic : [1, 8 , 11],
  miniLevel : [2, 5, 10],
  available : ["true", "false", "false"],
  showObject : function () {
    console.log(object2.forSale);
  },
  availableObject : function () {
    for (i=0; i < object2.forSale.length; i++) {
      if (object2.available[i] == "true") {
        console.log(object2.forSale[i]);
      }
    }
  },

  minNiveau : function () {
    for (i=0; i < object2.forSale.length; i++) {
      if (object2.miniLevel[i] == 10) {
        console.log(object2.forSale[i]);
      }
    }
  }

}
object2.showObject();
object2.availableObject();
object2.minNiveau();

// character
let mainCharacter = {
  name: "jan",
  level: 10,
  life: 15,
  weapon : {
    name: "mysword",
    damage: 8
  },
  attack: function () {
    console.log(mainCharacter.name, "attacks with", mainCharacter.weapon.name, "the damage is", (mainCharacter.level * mainCharacter.weapon.damage),"." );
  }
}

mainCharacter.attack();

// Bonus

let tegenstander = {

  opponentCharacter : {
    name : "paul",
    level: 10,
    life: 15,
    weapon : {
      name: "mysword",
      damage: 10
    },


  },
  mainCharacter : {
    name : "jan",
    level: 8,
    life: 12,
    weapon : {
      name: "mysword",
      damage: 8
    },
    attack : function (){
      console.log(tegenstander.mainCharacter.name, "attacks.",tegenstander.opponentCharacter.name);
      console.log("with the weapon", tegenstander.mainCharacter.weapon.name);
      console.log("and inflicts damage on it", (tegenstander.mainCharacter.level * tegenstander.mainCharacter.weapon.damage));
      console.log(tegenstander.opponentCharacter.name, "is now",(tegenstander.opponentCharacter.level - (tegenstander.mainCharacter.level * tegenstander.mainCharacter.weapon.damage)),"of life" );
    },

  }

}

tegenstander.mainCharacter.attack();
