// As we progressed through the rest of the course it's not only about defining our own functions and
// learning the syntax but also there are a lot of quirks with functions.
//  it's important because it's something we use every single time we write code.
// we're not going to understand and cover every single topic around functions in this one section.
// We have a couple of main goals for this section.
// We want to understand the basics:
//  what is a function,
// Why do you use them,
// how do we define them,
// What's the syntax,
// We'll have some exercises code.

// So functions are not difficult at least writing your own functions ;)
//  but there are a lot of things to understand about functions different variations,
// different capabilities or features.

// So there's a two step process for every function that we ever use, that we write.
// First we define the function, It's kind of like registering it.
// Then the second step is to execute the function to run it and we can run it once  or 100 times.
// metods are built in funct-s. It's already been defined or written for us.
// There are quite a few different syntax ie different ways of writing functions in JavaScript.
// function funcName() { do some code};

// It looks like this  a function declaration or a function statement.
// So to run it, Which is the second step, we need to call a function()

// funcName();

function funcLoop() {
  console.log("hello");
}

funcLoop();

for (let i = 0; i <= 2; i++) {
  funcLoop();
}

// How about generating a random dice roll - roll die(бросить кубик)
//  number from 1 to 6

function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`rolled: ${roll}`);
}

// We can even call functions within other functions.

function repeatRoll() {
  for (let i = 0; i < 2; i++) {
    rollDie();
  }
}
repeatRoll();
console.log("rewrite this repeatRoll() that we can specify number of dice");

// Introducing Arguments
// arguments is really a fancy term (причудливый термин) for inputs to a function.
// without argumets our function behave the exact same way all time.
// We did get a different output because we're using random numbers but we're not altering the behavior
// when we call the function.
// in the function definition instead of empty parentheses we add in some valid variable name.
// So this has to be a valid javascript identifier, but otherwise we can name it whatever we want.
// Technically the variables we write here in func() are called parameters not arguments.
// parameter - number of dice.

function throwDice(parameter) {
  for (let i = 0; i < parameter; i++) {
    rollDie();
  }
}
throwDice(2);

// Now we've written it so that we can impact the way it behaves based off of a single input.
// It is this variable that we define when we're writing our function(variable) {}
// And then when we execute the function throwDice() we pass into value in that number here is the argument.

// argument - when we call a func(), and parameter - when we define a func()

//  we define a function with multiple parameters by using comma
// func(param1, param2, param3) {}
// or another way of saying it is a function that expects multiple arguments to be passed in.
// the order of parameters does matter.

function divide(a, b) {
  console.log(a / b);
}
divide(1, 4);
divide(4);
divide();
divide(4, 1);

//  The Return Statement -is one more key function concept, Returning values from a function.
// But right now our functions aren't returning of value,
// they are printing of value out and there's a big difference between the two.
// so printing something to the console is entirely different than returning a value.
// when we're working in the console there still is a significant difference
//  so return values are extremely useful because we can capture them in a variable,
// we could pass them to another function.
// Most of what we do in real life when we write functions is we return a value and we use that value somehow.
// All we have to do is use the return keyword.

function add(x, y) {
  return x + y; //If this code is run which in our case it always is.
  console.log(100, 300); //  the code afterwards is not going to execute.
}
console.log(add(4, 5));

add(7, 7); // not added to console, but we can bring it directly to the console.

// First of all you can only return one thing from a function.
//  you can have multiple return statements, but when you actually return something there
// needs to be one value, one thing. it may be array or string :)

// now we can capture a return value in a variable!!!!!!!!!!!!

// another thing you should know about return statements which is that they end function execution,
// the code afterwards is not going to execute, but It's only if the return statement is executed.
// AND return statement specifies the value to be returned by that function!

// function isPurple(color) {
//   if(color.toLowerCase() === "purple") {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPurple("PUrple"));

// So we have two return statements but only one of them is going to run if color is "purple" or not.
// how we could refactor this function?
// We can rewrite this function a couple of different ways.

// function isPurple(color) {
//   if(color.toLowerCase() === "purple") {
//     return true;
//   }
//     return false;
// }

// You'll see people write functions like this that take advantage of the fact that a return statement
// stops a function.

// there's actually an even shorter way of writing this where we could basically
// do it on one line.

function isPurple(color) {
  return color.toLowerCase() === "purple";
}

// This function isPurple(color) is a boolean expression.

console.log(isPurple("PURPLE"));
console.log(isPurple("Pink"));

// I want to show how a return will stop a function no matter where it's located in that function.
// RETURN has the power to halt the entire function even though it's in a conditional in a loop.

function containesColor(array) {
  for (color of array) {
    if (color === "purple" || color === "magenta") {
      return true;
    }
  }
  return false; // if we put it in the loop and first element of array is not "true"- we stop execution!
}

arr1 = ["red", "green", "magenta"];

console.log(containesColor(arr1));

// The last line in this function is   return false;
// If we never return true then this statement runs   return false;

// Function Challenge 1: passwordValidator
// The goal is to write a function called isValidPassword() and
// it accepts two different arguments a password and a userName.
// Password must:
//  - be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username, cannot be contained anywhere in the string.
// if all requirements are met, return true.
// So we have three different things for checking for.
// Otrherwize: return false;

// isValidPassword("89friday", "dogLuvr")    //true
// isValidPassword("dogLuvr123!", "dogLuvr")    //false

// function isValidPassword(password, username) {
//   if (password.length < 8) {
//     return false;
//   }
//   if (password.indexOf(" ") !== -1) {
//     return false;
//   }
//   if (password.indexOf(username) !== -1) {
//     return false;
//   }
//   return true;
// }

// It's very explicit and clear what's going on.
// if string not contain certain character then indexOF() returns negative 1

console.log("passwordValidator");
console.log(isValidPassword("89friday", "dogLuvr"));
console.log(isValidPassword("dogLuvr123!", "dogLuvr"));

// let's collect all our conditions in one statement

// function isValidPassword(password, username) {
//   if (
//     password.length < 8 ||
//     password.indexOf(" ") !== -1 ||
//     password.indexOf(username) !== -1
//   ) {
//     return false;
//   }
//   return true;
// }

// Another approach you could take
// What we could do is make each of these into a variable all of these return true or false
// these variables I'm making three of them are going to be true or false boolean values

// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(" ") !== -1;
//   const tooSimilar = password.indexOf(username) !== -1;
//   if (tooShort || hasSpace || tooSimilar) return false;
//   return true;
// }

// I don't need those curly braces.
// And to be clear here I'm not saying that this is the best evolution,
// I just want to explore some possibilities here.
// So what we're doing right now is checking a bunch of conditions while it's a single condition that contains
// our three variables and if at least one of them is true, then if(true) return false;

// So we could invert this instead of saying if it's tooShort We could say if it's NOT !tooShort.

// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(" ") !== -1;
//   const tooSimilar = password.indexOf(username) !== -1;
//   if (!tooShort && !hasSpace && !tooSimilar) return true;
//   return false;
// }

if (!false && !false && !false) {
  console.log(
    "we expect all conditional inputs to be false but we need to if(was true)"
  );
}

if (!true) {
  console.log("not execute- condition is false");
}

// We could just say return this.
// This evaluates to true or false.

function isValidPassword(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(" ") !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  return !tooShort && !hasSpace && !tooSimilar;
}

// This this whole thing will evaluate to TRUE or FALSE and then we return that value.

// A lot of people obsessed with writing compact code often that comes at the expense of readability
// and expressiveness.

// write a function to find the average value in an array of numbers
// average([0, 50]); //25

const arrNum = [0, 50, 100, 200];

function average(arrNum) {
  let sumArr = 0;
  for (let elem of arrNum) {
    sumArr += elem;
  }
  return sumArr / arrNum.length; // ya sdelial'
}

console.log(average(arrNum));

// we can pass in the "elem" as a parameter, and we can NOT do it !

function avg(arr2) {
  let sumArr = 0;

  for (let elem of arr2) {
    sumArr += elem;
  }
  return sumArr / arr2.length;
}

console.log(avg([0, 50, 100, 200, 300]));

// we passed in as a parameter the whole array in our function avg(parameter)

// Function Challenge 3: Pangrams -  is a sentence that contains every letter of
// the alphabet.
// The most famous one at least in English is "the quick brown fox jumps over a lazy dog"
//  or "Sphinx of black quartz judge my vow."
// it doesn't mean that one letter must be meet only once, there just has to be at least one letter.

// So I'd like for you to write a function called is pangram()
// which accepts a sentence, we can assume it is a string.
// You don't need to check to see if it's a number or anything like that and it should return true or false
// depending on whether that input string does in fact contain every letter in the English alphabet.
// And it should not care about casing. not case sensitive! toLowerCase()
// what we need to do essentially is loop over every letter in the alphabet and check if
// that letter is in sentence.
// but how do we loop over every character in the alphabet?
// lets' hardcoded all alphbet in string "qwertyuiopasdfghjklzxcvbnm" - qwerty keyboard:)
// It just takes one letter not being there for the whole thing to return false. -опять крайнее условие

// Now we just want to check if the letter is in sentence and as soon as we find one that is not in the
// sentence we want to return false.

const alphabet = "qwertyuiopasdfghjklzxcvbnm";
let sentence = "THE quick brown fox jumps over a lazy dog";

// function isPangram(sentence) {
//   for(let char of alphabet) {
//     if (sentence.indexOf(char) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

console.log("pangram");
// console.log(isPangram("the quick brown fox jumps over a lazy dog"));
// console.log(isPangram("the quick brown fox jumps over a lazy"));
console.log(isPangram(sentence));

// let's rewrite it with method includes() - not supported in IE,
// since includes is a boolean method it returns true or false,
// and let's make a sentence all lowercase as well.
// So let's call sentence start to lowercase but remember this does not update sentence.

function isPangram(sentence) {
  let lowerCased = sentence.toLowerCase();
  for (let char of alphabet) {
    if (!lowerCased.includes(char)) {
      return false;
    }
  }
  return true;
}

// Let's write a function called Get card and get card is going to accept no arguments.
// and it will return an object representing a playing card
// an object that has a value like "K" for King  and then a suit - масть.

// write a getCard() function which returns a random paying card object, like
// {
//  key: "K";
//   suit:"clubs";
// }
// pick a random value from:
// 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
// we'll be working with strings like the string "2"
// pick a random suit from:
//  clubs, spades, hearts, diamonds
// return both in an object, So no arguments but return an object.

//  let turns them in array of strings

// const valueCards = [
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "J",
//   "Q",
//   "K",
//   "A"
// ];
// const suits = ["clubs", "spades", "hearts", "diamonds"];

// to pick something randomly form an array We need to generate a random number that corresponds to an index.
// Math.random() This is a decimal from 0 to 1 but not including 1.
// If our array has fourteen items , then 14 is never met, but we have 13 indices at all.
// All we need to do is multiply it by the length of the array, that equal 14.
const valueCards = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
const suits = ["clubs", "spades", "hearts", "diamonds"];

// function getCard() {
// const valueCards = [
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "J",
//   "Q",
//   "K",
//   "A"
// ];
// const suits = ["clubs", "spades", "hearts", "diamonds"];

//   const valueIndex = Math.floor(Math.random() * valueCards.length);
//   const value = valueCards[valueIndex];

//   const suitIndx = Math.floor(Math.random() * suits.length);
//   const suit = suits[suitIndx];
//   return {key: value, suit: suit};
// }

console.log("GET Card");
console.log(getCard());
console.log(valueCards.length);

// we repeatimg some logic,  I'm actually going to write a second function.
// Anytime we're repeating functionality, we're doing something multiple times.
// It's a good indication that you could make a new function  pick()
//  which picks a random element from an array.
// So we pass in an array and then we get a return value where some random element has been selected.

// return random number from the array

function pick(array1) {
  const indx = Math.floor(Math.random() * array1.length);
  return array1[indx];
}

function getCard() {
  const value = pick(valueCards);
  const suit = pick(suits);
  return { key: value, suit: suit };
}

// we can rewrite even shorter

// function getCard() {
//   return {key: pick(valueCards), suit: pick(suits)};
// }

// It's the same logic we've just made it generic.
// We've generalized it into a function called pick() which allows us to shorten our code and
//  also it becomes more readable.

// var is hoisted above block scope (loops and conditionals) but it's not hoisting over a function scope

//  Lexical Scope
// This one's pretty simple and straightforward.
// When we have nested functions I have outer getCard() and inside of it
// I've defined another function called inner pick() - если б мы определили её внутри
// function getCard() {
//   function pick() {}
// }

function outer() {
  let movie = "Aliens";

  function inner() {
    let movie = "ameli";
    console.log(movie.toUpperCase());
  }
  inner();
}

outer();

// we don't have accses to inner() from outside.
// inner(); //inner() is not defined
// we only have access to it inside of outer()
// the inner functions are bound to the scope of their parent or of their outer functions
// but it's a one way relationship.
// when we reference to the movie it's going to look is there a movie defined in this scope,
// If it doesn't find it it will look further up.

// function stateMent () {return}  -function statement

// function expression have another syntax when we use to define it.
// it's stored in a variable!
// we store functions in a variable because functions are objects in javascript,
// which means we can store them in a variable or put several of them in the array,
// We can even pass them around as arguments which is something we do all the time.

const square = function(num) {
  return num * num;
};

console.log(square(7));

// It's stored in a variable but we haven't provided a name.
// expression
const sum = function(x, y) {
  return x + y;
};

console.log(sum(2, 2));

//statement
function add(x, y) {
  return x + y;
}

console.log(add(2, 2));

// They work exactly the same way but we declared them in two different formats to different syntaxes.
// you can add in a name for a function when you're storing it in a variable.
// It doesn't have to be anonymous.
// This is still a function expression but it's a named function expression.

const product = function multiply(x, y) {
  return x * y;
};

//  to call this function I still call product()

console.log(product(5, 5));

// we talk about using functions within functions, excepting functions as arguments and
//  returning functions as values.
// Let's talk more about functions as objects.

// we can treat functions as any other value.
//  I wanted to show that functions are simply values in JavaScript.
