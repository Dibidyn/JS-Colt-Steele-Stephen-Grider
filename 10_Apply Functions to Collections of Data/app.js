// Array Callback Methods
// Some of the most useful built in methods that expect you to pass a function in.
// What they having common is that we are trying to run our function once per element in the array.

// forEach() accepts a callback f-n. Call the f-n once per element in the array.

const nums = [9, 9, 2, 1, 1];

// nums.forEach(function(n) {
//     console.log(n*2);
// //     });

let reverseNums = []; // my reverse
console.log(reverseNums);

for (let i = nums.length - 1; i >= 0; i--) {
  reverseNums.push(nums[i]);
}
console.log(reverseNums);

// console.log(reverseNums.length);
// reverseNums.forEach(double);

//  the goal of forEach() is that it takes whatever function you give it
// And it calls it on each element, it passes each value into that function.

function double(n, idx) {
  console.log(idx, n * 2);
}

nums.forEach(double);
console.log(nums);

// we can write method forEach(), and can rewrite with mathod for()

// for (i = 0; i < nums.length; i++) {
//   console.log(nums[i] *2);
// }

// We can also add a second parameter to our callback to the function here if we want to use the index.
// for method forEach(f-n, index)
// second parameter implicitly exist And so if you want it you can capture it as a parameter.
// You get the index for free!!!

//  if you don't use that index it's still being passed in forEach().
//  you can ignore it.

// MAP
// creates a new array with the results of calling a callback on every element on the array
//  it can also be used to extract portions of an array or to somehow transform an array into a new array
// It calls that callback with every element in the array but it builds a new array with those values,
// instead of forEach().

const triple = nums.map(function(num) {
  return num * 3;
});

console.log(triple);

// If I don't return anything it won't work.
// Map itself returns This new map array so I'll capture that in a variable const triple

// let's return an object with check if the number even or odd

const objMap = nums.map(function(n) {
  return {
    value: n,
    isEven: n % 2 === 0
  };
});

console.log(objMap);

// let's format "omg" to "O.M.G."
//  we're going to use a couple of different methods, its a little tricky.
// easiest way is maybe split() the each word with array.
//  split() creates an array with each character from that string, so each element is one character.

const words = ["rofl", "lol", "omg", "ttyl", "lol"];

const abbreviations = words.map(function(word) {
  return word
    .toUpperCase()
    .split("")
    .join(".");
});

console.log(abbreviations);

// Remember for each is similar but we're not building an array with those values for each is like half of map.
// It calls a function on every element but it doesn't store them in an array.
// It doesn't return a new array, map does.
//  map takes that function it calls it and it takes the return value and puts it in a new array.

const persons = [
  {
    firstName: "Vito",
    surname: "Dolchevito",
    age: 39,
    rating: 2
  },
  {
    firstName: "Shaun",
    surname: "Sunshaun",
    age: 30,
    rating: 10
  },
  {
    firstName: "Ivan",
    surname: "Ivanov",
    age: 18,
    rating: 4,
    whistle: true
  },
  {
    firstName: "Spanch",
    surname: "Bob",
    age: 18,
    rating: 4,
    whistle: true
  }
];

const surnameMap = persons.map(function(el) {
  return el.surname;
});

console.log(surnameMap);

// with space between qoutes

let spl = "Ilya Kantor".split(" ");
console.log(spl);

// without space between qoutes - empty string
spl = "Ilya Kantor".split("");
console.log(spl);

// arrow f-ns its a more compact syntax for defining function expressions.
// If you only have one parameter you can actually leave the parentheses off, and
// if we have more then one or zero parameters We need empty parents ().

const isNumEven = num => num % 2 === 0;

console.log(isNumEven(44));
console.log(isNumEven(45));

const greet = () => console.log("Hi!");
greet();

// const square = n => n * n;

// const square = n => (
//   n * n // для переноса выражения на новую строку
// )

// const square = n => {
//   return n * n; // для многосторчного блока кода
// };

const numbers = [2, 2, 3, 4, 5];
console.log(numbers);

// with regular function
const multiply1 = numbers.map(function(n) {
  return n * n;
});
console.log(multiply1);

// with arrow f-n
const multiply2 = numbers.map(n => n * n);
console.log(multiply2);

const anotherChance = multiply1.map(n => {
  return {
    n: n,
    isEven: n % 2 === 0
  };
});

console.log(anotherChance);

// there is another distinction between arrow functions and regular functions
// It has to do with a keyword "this".

// "Parity" is the term referring to if a number is even or odd.

const parityList = numbers.map(function(num) {
  if (num % 2 === 0) return "even";
  return "odd";
});

console.log(parityList);

// we can rewrite with ternary operator and => f-n, that gives us a single expression!

const parityL = numbers.map(num => (num % 2 === 0 ? "even" : "odd"));

console.log(parityL);

// we don't have to write return but we can only have a single expression in the body of the function.

// Array.find()
// It finds an element, it retrieves an element from an array based off of the function that we pass it.
// So this function needs to return true or false.
// And if that function returns true then it's done it will return to you the value of that element.
// So it only returns one value, one element that matches even if there are 10 matches in a given array.
// It stops after it finds the very first one.

console.log(words);

// first match returns all string
const firstMatch = words.find(w => {
  return w.includes("ol");
});
console.log(firstMatch);

// first index in string of a given element
const firstIndex = words.find(w => w.indexOf("o") === 0);
console.log(firstIndex);

// filter()
// array.filter() is another array method that expects you to pass in a callback.
// creates a new array with all elements that pass the test implemented by the provided function.

// It doesn't update the original array, it doesn't mutate it.
// We're really just creating a copy with specific targeted information or elements.

const odd = numbers.filter(n => n % 2 === 1);
console.log(odd);
// in => f-n we have implicitly return, thats why our callback return true or false

const smallNums = numbers.filter(n => n < 4);
console.log(smallNums);

// At least if you look at the docs for a filter it returns true or false!!!!!!!!!!!!!!!

const highSocial = persons.filter(p => p.rating > 5);
console.log(highSocial);

const findString = persons.filter(
  el =>
    el.surname.toLowerCase().includes("sun") ||
    el.firstName.toLowerCase().includes("it")
);
console.log(findString);

// A lot of the time we want to give users the ability to search for things.
// let's create a query with empty string - search for firstName

const queryName = "V"; // string should be empty
const findName = persons.filter(
  p => p.firstName.toLowerCase().includes(queryName.toLowerCase())
  //  { const name = p.firstName.toLowerCase();
  // return name.includes(queryName.toLowerCase()); }
);

console.log(findName);

// If it's true for a given element then that element is added to the filtered result array.

// some() & every()
// So it's a ways of verifying or checking does every() or some() element in this array
// passed the test in a callback f-n.

// every() test whether ALL elemenst in the array pass the provided function.
// It returns a Boolean value.
// So both of these methods are boolean methods.
// So every() is going to accept a callback which itself needs to be a boolean callback!!!!!!!!

const newWords = words.filter(w => w.length === 3);

console.log(newWords);

const shortWord = newWords.every(w => w.length === 3);

console.log(shortWord); // true

const charO = newWords.every(w => w.toLowerCase().includes("o"));

console.log(charO); // true

const startO = newWords.some(w => w[0] === "o");

console.log(startO); // true

const lastChar = newWords.some(w => {
  let lastChar = w[w.length - 1]; // substring
  return lastChar === "l";
});

console.log(lastChar); // true

const lastO = newWords.some(w => {
  let lastIndx = w.length - 1; //index of last character
  return w[lastIndx] === "o";
});

console.log(lastO); //false
// So if there's at least one element in the array that pass the test that return true.
// if ANY of elements pass the test it returns true.

const ageLimit = persons.some(p => p.age <= 18);
console.log(ageLimit); //true

// sort()
// Method sort()  is to convert all of these numbers (if we have array of numbers)
//  to strings and sort them as strings.

// I guess if you need to sort strings it's fine but if you need to sort numbers you need to
// pass a callback in a compare func and it needs to return a number.
// if it's a negative number one thing happens. if it's a positive number Something else happens.

// ascending order

const ascendOrder = persons.slice().sort((p1, p2) => p1.rating - p2.rating);

console.log(ascendOrder);

// descending order

const socialRate = persons.slice().sort((p1, p2) => p2.rating - p1.rating);

console.log(socialRate);

// Array.sort( compareFunc(a, b));
// if compareFunc(a, b) returns less than 0  --- sort "a" before "b"
//  if compareFunc(a, b) returns 0  --- leave "a" and "b" unchanged
//  if compareFunc(a, b) returns grater than 0 --- sort "b" before "a"

console.log(persons);
// we could use a method to copy the data into a new array  - slice().
// потому что сейчас три разные ссылки указывают на один и тот же массив - persons, ascendOrder,
// socialRate . какой из коллбэков позже выполнится так массив и отсортируется, и все три ссылки
// будут указывать на результат сортировки последнего коллбэка !
//  slice() - it makes a copy of that array.

// reduce()
// it's array built in method , you pass the callback to it.
// what it does? it takes an array of values and it reduces them down to a single value.

// It's a callback with at least two parameters.
// Now the documentation calls this first parameter - accumulator,
// this is the variable where the parameter that will store the end result of reduce.
// the first parameter here will store the total or the accumulated value that we're reducing down to.

// And then current value or just the second parameter here stores each individual element.

const totalSummary = numbers.reduce(
  (accumulator, current) => accumulator + current
);

console.log(numbers);
console.log(totalSummary);

// you can think of the first argument (accumulator) as like a memory from last time, from the last iteration.
// we need to pass in our callback which follows the format of accumulator first and
//  then current Val next.

// We can also do things like finding the maximum value in an array,
// where the accumulator is really just tracking the max.

const topScore = numbers.reduce((max, currVal) => {
  if (currVal > max) return currVal;
  return max;
});

console.log(topScore);

// a shorter option with Math.max & implicit return
const maxValue = numbers.reduce((max, currVal) => Math.max(max, currVal));

console.log(maxValue);

// Math.min
const minVal = numbers.reduce((min, currVal) => Math.min(min, currVal));

console.log(minVal);

// when you use reduce you can actually pass in an initial starting value.
//  at the end after your function (our callback is usually an inline anonymous function)
//  you can add a comma and then an initial value.
// array.reduce(callback(), initialValue);

// the callback takes initialValue as a first element, as a first argument.

const initialVal = numbers.reduce((total, currVal) => total + currVal, 10);

console.log(initialVal);

// instead of initialVal as a number we can specify an object
// if we're trying to accumulate data into an object

// we can group different values in an array using an object.
// The thing that will actually return and add into or update is going to be an object.

const votes = [
  "abstain",
  "abstain",
  "yes",
  "yes",
  "yes",
  "no",
  "no",
  "no",
  0,
  undefined,
  false
];

// const resultVotes = votes.reduce(callback(), {});
// the initial value will be this empty object.
// now "tally" is an empty object.

const resultVotes = votes.reduce((tally, val) => {
  if (tally[val]) {
    tally[val]++;
  } else {
    tally[val] = 1;
  }
  return tally;
}, {});

// If tally of Val "tally[val]" meaning if we already have that key in the object,
//  we're going to want to incremented. --- "tally[val]++"
// else we are creating a key with value 1 --- "tally[val] = 1"

console.log(resultVotes);

console.log(votes[votes.length - 1]);
console.log(votes.length);
console.log(votes[0]);

// tally[val] = (tally[val] || 0) + 1;
// return tally;

// tally[val] will be undefined on first iteration
console.log(undefined || 0);

// creating an object from an array with the sort way
const sameResult = votes.reduce((accumulator, vote) => {
  accumulator[vote] = (accumulator[vote] || 0) + 1;
  return accumulator;
}, {});

console.log(sameResult);

// valid callback
// If something exists add one to it.
// If it doesn't exist set it to 1.
// while tally[val] doesn't exist in empty object , we want to our expression have a sense
// tally[val] gives us "undefined" - (undefined || 0) gives us zero.
//  that's how we escape of undefined.

const personsRate = persons.reduce((accumulator, person) => {
  const key = Math.floor(person.rating);
  if (!accumulator[key]) accumulator[key] = [];
  accumulator[key].push(person);
  return accumulator;
}, {});

console.log(personsRate);
