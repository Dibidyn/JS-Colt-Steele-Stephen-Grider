// Shorthand Object Properties is a nice new syntax enhancement.

// It's a nice easy way to create an object literal when you have variables and
// you want to create a property where
//  the key name is the name of your variable and the value is the value in the variable.

// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum, r) => sum + r);
//     const avg = sum / arr.length;
//     return {
//         max: max,
//         min: min,
//         sum: sum,
//         avg: avg
//     }
// }

// old syntax
// we do get an object back and it's what you expect.

const reviews = [1.1, 2.2, 3.3, 4.4, 5.5];

const getStats = arr => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  return {
    max,
    min,
    sum,
    avg
  };
};

// new syntax

const stats = getStats(reviews);

console.log(getStats(reviews));
console.log(stats);

// Computed Properties
// are just an improvement for the object literal syntax where we can add a property with a dynamic key.

const role = "host";
const person = "Spanch Bob";
const role2 = "director";
const person2 = "Patrick";

// team = {};
// team[role] = person;
// team[role2] = person2;

// now we have two properties with dynamic keys and we have to use these square brackets as we've seen,
// If you tried to use the dot notation you're just adding the key of role.

// But now with this new syntax for computed properties we can do this all at once.
// We can define our object and then dynamically add in a key based off
// of some computed variable and expression.

// we can use a variable as a key name in an object literal property.

team = {
  [role]: person,
  [role2]: person2,
  [1 + 6 + 9]: "sixteen"
};

console.log(team);

// So here the role will be evaluated first.
// We have 16 set to 16 so this is going to be evaluated and then turned into a string like all the keys.

// let's make a function that accepts an object and will return a copy of that object
// with a new property added in.

function addProp(obj, key, value) {
  const copy = { ...obj };
  copy[key] = value;
  return copy;
}

// We'll go with happy and then the corresponding string will be a happy face.

const addHappy = addProp(team, "happy", ":)");

console.log(addHappy);

// If we instead wanted to rewrite this using computed properties we could do it on one line.

const addSad = (obj, key, value) => {
  return {
    ...obj,
    [key]: value
  };
};

console.log(addSad(team, "sadFace", ":("));

// with an implicit return arrow function we need to add the parens
// const addSad = (obj, key, value) => ({...obj, [key] : value});

// Adding Methods to Objects
// The idea that we can add functions to our objects and store them in objects.

// we will group functions together to group functionality into some sort of cohesive unit.

//   I'll show you a couple of different ways of adding functions in.

const addSum = function(x, y) {
  return x + y;
};
console.log(addSum(2, 5));

const sum = {
  addSum
};
console.log(sum.addSum(2, 5));

// it's the same variable or the same function in memory but I'm accessing it in a different way.

// we can create an object with two properties both of which are functions.

const joinMath = {
  add: function(x, y) {
    return x + y;
  },
  multiply: function(x, y) {
    return x * y;
  }
};
// Right now it's just purely a container.
console.log(joinMath.multiply(2, 5));
// this is just a nice way of grouping functions together putting them in an object,
// so that they're just in some sort of container rather than having a bunch of functions floating around.

// I now have this math object which is the same idea as the existing Math that we have in JavaScript.
// We have a Math object that contains a bunch of different functions or technically methods.

// So the terminology -  when we add a function as a property in an object we call it a method.

// Method Shorthand Syntax
// It's just a key value pair. The function is the value.
//  shorthand - we don't have to use the key value pair syntax .

const auth = {
  username: "TommyBot",
  login() {
    console.log("logged you in!");
  },
  logout() {
    console.log("Good Bye");
  }
};

auth.login();

// keyword "this" really fundamental thing in javascript that helps us write
// much more useful methods in our objects.
//  keyword "this" is also pretty useful it comes up a lot once you get to DOM manipulation,
// when we do things like add events click events and keyboard events.

//  there is a set of concrete rules that dictate what the value of "this" is.

// Think of it as a reference to the current execution scope.
// It is going to give you an object back, because "this" is a reference to an object.

// So depending on the scope and depending on the rules of how "this" works,
//  which is the confusing part, that object changes.

// Now "This" refers to the window object.

function sayHi() {
  console.log('The "window" is the global scope in the browser');
  console.log(this);
}

sayHi();
// The "window" is the global scope in the browser.
// So when we define "sayHi" like this it is added as a property,
// it is a method on the window object.
// the window contains all sorts of different properties we've been using and different methods.

// So "this" does depend on how it is called.
// So in a function "this" is going to refer to the window except when it doesn't.

const personAgain = {
  firstname: "Spanch",
  last: "Bob",
  nickName: "Spanchy",
  fullName() {
    console.log(this);
    console.log(
      `${this.firstname} ${this.last} Also Known As ${this.nickName}`
    );
  }
};

personAgain.fullName();

// so we can have a method that is aware of the other contents in its object.
// таким образом, у нас может быть метод, который знает о другом содержимом своего объекта.

// So our object can now be a little self-contained world where we can have variables,
//  we can have these properties.

// It's looking up the value of property on the current execution scope which is what "this" refers to.

// we can specify "this" explicitly
// We could also add another method to the object and call a different method using "this".

const specifyThis = {
  first: "we can specify",
  second: "'this'",
  third: "explicitly",
  fullPhraze() {
    const { first, second, third } = this; // using Destructuring to make it cleaner.
    return `${first} ${second} ${third}`; // and then we don't need to use "this" here.
  },
  printAgain() {
    console.log(this.fullPhraze()); // without "this" it will not work.
  }
};

// console.log(specifyThis.fullPhraze());
specifyThis.printAgain();

// It's a way of accessing the parent objects.

// sometimes "this" may not refer to the object. It could refer to something else.

//  THIS: Invocation Context
// ЭТО: Контекст вызова
// The value of "this" depends on the invocation contexts of the function that it's used in.
// What that means is the value will change depending on how the function is actually executed,
// not just where you write it!

// So yes I wrote "this" inside of a method but that doesn't mean it's guaranteed to reference this object.
// It depends on how I'm calling it.
// and here - in specifyThis I'm calling it how you normally would call a method,
//  the natural way to call "this".

const changeCntxtThis = {
  first: "we can specify",
  second: "'this'",
  third: "explicitly",
  fullPhraze() {
    const { first, second, third } = this; // using Destructuring to make it cleaner.
    return `${first} ${second} ${third}`; // and then we don't need to use "this" here.
  },
  printAgain() {
    console.log(this.fullPhraze()); // without "this" it will not work.
  }
};

// Let's change the value of "this".
// What I could do is make a reference to this function printAgain()
const printOneMore = changeCntxtThis.printAgain;

// So I'm just pointing this variable to that function.
// It's still a property on the changeCntxtThis object.
// and if I call printOneMore... it wll be an error

// console.log(printOneMore());

// console.log(changeCntxtThis.fullPhraze());
changeCntxtThis.printAgain();

// There are three special methods that are usually grouped together - call, apply and bind,
// we will learn about them later. these methods may change the invocation context.

// arrow functions do not get their own version of "this".
// Why do arrow functions not get their own "this" and how can it be useful sometimes.

//  we'll take advantage of a built in function called set interval, set interval is a global.
// It's located on the window.
// whatever function I put here will run every three seconds. setInterval(func, 3000)

// Why do arrow functions not get their own "this" and how can it be useful sometimes.

// let's make an array that have a list of annoying phrases, these phrases drive me insane.
// That's a bit over the top but I'm not a fan of these phrases.
// we are going to do the stuff that every second prints one of these random phrases to the console,
//  and the way we're going to structure it is by using an object.

const annoyer = {
  phrases: [
    "literally",
    "cray cray",
    "I can't even",
    "Totes!",
    "YOLO",
    "Can't Stop, Won't Stop"
  ],
  // pickPhrase: function(){} it's a long syntax
  pickPhrase() {
    const { phrases } = this;
    const indx = Math.floor(Math.random() * phrases.length);
    return phrases[indx];
  },
  start() {
    setInterval(() => {
      console.log(this.pickPhrase());
    }, 2000);
  }
};

console.log(annoyer.pickPhrase());
// annoyer.start();

// setInterval() is a function of window object and we can't just use "this" inside it.
// Remember "this" changes depending on how it's called.
// if we wanted to make this work, if I want to have a reference to the object the version of "this"
//  in the nested function (setInterval())   we may to use an arrow function here and
//  we avoid the problem entirely.
// Remember that arrow functions don't get their own "this".
// the "this" in an arrow function won't change from the "this" of its parent or of its nearest.

// const someObj = {
// function() {     // обычная функция обязательна для проброса "this" в стрелочную функцию
//   setInterval(() => {return this}, 500)  //  через встроенный метод относящийся к window.object
// }
// };

// you have an instance of every possible combination. makeDeck()
// I'm going to do values that split on the comma. values.split(",") - gives us an array.
// I can just put value and suit in an object  - shorthand of value: value,

function makeDeck() {
  const deck = [];
  const suits = ["hearts", "diamonds", "spades", "clubs"];
  const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
  for (let value of values.split(",")) {
    for (let suit of suits) {
      deck.push({
        value,
        suit
      });
    }
  }
  return deck;
}
// We had to return the deck and save it to a variable.

// console.log(makeDeck());
// If I wanted to create a deck and then be able to draw a single card I would need to
//  save this deck to a variable.

// every time I want to draw a card I have to pass in the deck we're drawing it from.
// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);
// console.log(myDeck);

// function drawCard(deck) {
//   return deck.pop();
// }

// remember that .pop returns the value and it also changes the original array.

// InitializeDeck() And it is going to update the deck property.
// So we're grouping the data with functionality in the object "myDeck".
//  let's just copy most of this logic over.
// The first thing I might do is move these variables into properties on the object because
//  we might want them and other methods, we don't need to redeclare them every time we call
// fun-n InitializeDeck().
//  we can use these properties (suits, values) in fun-n because of "this".

const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ["hearts", "diamonds", "spades", "clubs"],
  values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
  initializeDeck() {
    const { suits, values, deck } = this;
    // We could also just use Destructuring assignment.
    // So now every time I reference deck it's actually this.deck .
    for (let value of values.split(",")) {
      for (let suit of suits) {
        deck.push({
          value,
          suit
        });
      }
    }
    // return deck;  We're not going to lose that deck 
    // we can return the deck if we want but also we don't have to.
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(numCards) {
    const cards = [];
    for(let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  }
};

console.log(myDeck.deck);
console.log(myDeck.initializeDeck()); // we need to call it.
console.log(myDeck.deck);

// we group the method with the values, we put the data and the functionality in a single object.
// So now all we have to do is access "this.deck" and we're updating this one object "myDeck".
console.log(myDeck.drawCard());
console.log(myDeck.drawCard());
console.log(myDeck.drawCard());

console.log(myDeck.drawMultiple(3));
console.log(myDeck.deck);

// Next we'll add a shuffle method. -  метод перемешивания.
//  I've gone ahead and written a simple shuffle method.
//  shuffling things is actually not as straightforward as you might think.
// This is an algorithm called the Fisher Yates shuffle.
// It's used to shuffle an array.



