// we can treat functions as any other value.
//  I wanted to show that functions are simply values in JavaScript.
// Higher Order Functions
// We can also store functions in an array if we wanted to.

function add(x, y) {
  return x + y;
}

const subtract = function(x, y) {
  return x - y;
};

function multiply(x, y) {
  return x * y;
}

const divide = function(x, y) {
  return x / y;
};

// So we have four functions - expressions and statemets.

const operations = [add, subtract, multiply, divide];

// reference to function and get the value
console.log(operations[0]);

// if I wanna to execute any of them I need to add the parentheses

console.log(operations[0]());
console.log(operations[0](4, 5));

for (let f of operations) {
  let result = f(30, 5);
  console.log(result);
  // f();
  // console.log(f(30, 5));
}

// So this variable "f" will hold one of these functions each time through and by adding the parenthes
// we call for different functions by the time this loop finishes running.
// So let's just hardcode in some numbers
// We can call them dynamically put them in this "f" variable each time through the loop execute it.
// "f" - placeholder name.

// we can store functions in an object

const thing = {
  doSomething: multiply
};
console.log(thing.doSomething); //return the value which is function

console.log(thing.doSomething(11, 100)); //return executed function

//  we just wrote our very first method by adding a function to an object.

//  Functions as Arguments, higher order functions
// It simply refers to functions that operate on or with other functions.

// functions can:
// accept other functions as arguments

// Now we will call laugh() two times.

function callTwice(f) {
  f();
  f();
}

function laugh() {
  console.log("Ha-Hah, hahahah");
}

callTwice(laugh);
// console.log(callTwice(laugh)); // after that go undefined

// we'll pass in a function and a number and then it will call that function number of times.

function repeatNTimes(action, num) {
  for (i = 0; i < num; i++) {
    action();
  }
}
// we'll call action each time in that loop

console.log(" we'll call action each time in that loop");

repeatNTimes(laugh, 3);

//  it will accept two functions and it will randomly call one of them but not both

function cry() {
  console.log("Boo Hoo, I'm so sad");
}

function pickOne(f1, f2) {
  const rand = Math.random();
  console.log(rand);
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}

pickOne(laugh, cry);

// functions can:
// return a function
//  function that returns  another function  as the return value.
// you can kind of think of these functions as function factories.
// the outer functions are making new versions of a function, they're tweaking a function and returning it.
// tweaking a function - настраивают,  подправляют ф-цию
// Now this is where function expressions come in because we don't have to declare a separate function
// inner fucnt-n don't have to have a name because we're returning this and we'll captured in a variable.

// Next It will return a function that triples a value anytime I call it.

function multiplyBy(num) {
  return function(val) {
    return val * num;
  };
}

const triple = multiplyBy(3); // num,  this is where function expressions come in
console.log(triple(6)); // val

const double = multiplyBy(2);
console.log(double(6));

// They all followed the same pattern but it plugged in a different number.

const halve = multiplyBy(0.5);
console.log(halve(6));

// this idea of lexical scope - a nested function has access to the scope of its parent function.

// functions that serve to check if a value is between one number and another

function makeBetweenFunc(min, max) {
  return function(val) {
    return val >= min && val <= max;
  };
}

const inAgeRange = makeBetweenFunc(20, 40); //years old
console.log(inAgeRange(19));
console.log(inAgeRange(39));

const isInNineties = makeBetweenFunc(1990, 1999);
console.log(isInNineties(2000));

// So this outer function is decorating or it's finalizing the inner function that's being returned.

const isNiceWeather = makeBetweenFunc(10, 25);
console.log(isNiceWeather(10));

// So we've made a factory that returns a type of a function, a pattern, but
// they're all tweaked to be different.

//  callbacks are simply functions that are passed into outer function as an argument
// to be invoked within the outer function.
// laugh() - is a callback

// function callTwice(f) {
//   f();
//   f();
// }

// function laugh() {
//   console.log("Ha-Hah, hahahah");
// }

// callTwice(laugh);

// We can write our own function that accepts callbacks but also tons of the built in methods
// expect you to pass in a callback.
//  often we use anonymous functions when we call them, sometimes we just need a one time use function.

// in JS there is built in method called setTimeout(), it will run a certain block of code
// after a certain number of milliseconds. But the first argument we need to pass it is a function.
// 5000 - 5 seconds

// function f(){
//   alert("that's how setTimeout() works!");
// }

// setTimeout(f, 5000);

// setTimeout() is a built in f-n that expects us to pass in a function and a number of milliseconds.
// we wrote a function and passed it in but we can also do it in line using an anonymous f-n.
// I don't need this to be a reusable function that I can call over and over somewhere else.

// setTimeout(function(){
//   alert("noname f-n");
// }, 5000);

// so we can run a code when we click a button on the page.
//  it's the pattern of passing in a callback.

// let's select the button
// I'm going to listen for a click and then this second part is the most important piece.
// This second argument is a function to run when the button is clicked

const btn = document.querySelector("button");
// btn.addEventListener("click", btnHandler);

// function btnHandler() {
//   alert("that's how  a callback pattern works!");
// }

// In our EventListener() we can also pass in as second argument an anonymous function

btn.addEventListener("click", function() {
  alert("that's how  a callback pattern works!");
});

// there is a shorter syntax

// hoisting
// When javascript is interpreting the code some is hoisting, some cannot.
// with VAR Javascript knew it existed even though we hadn't hit that line yet, it gives ua undefined.

console.log(animal);
var animal = "Tapir";
console.log(animal);

// so always declaring and initializing(give them a value) your variables before you use them!

// We can not access to LET before we actually run this code before this variable exists,
// it gives us an error.

// with const instead of let we get the same behavior.
// So let and const are not hoisted.

// f-n declaration are hoisted then it's a f-n statement. function niceName(){}
// It's the javascript interpreter is running across these lines, it's processing these lines first.

// BUT a function expression is not hoisting.
// var,let,const = function(){} -  not hoisting. var - undefined, cause variable is hoisted and
// value is not.




