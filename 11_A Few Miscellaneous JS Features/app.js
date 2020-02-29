// Default Parameters

// function multiply(x, y) {
//   return x * y;
// }

console.log(multiply(3, 4));

//  if we call it with two parameters it works great.
// But if we leave one off we get not a number.

console.log(multiply(3));

// operator "typeof" returns a string containing the type.
console.log(typeof NaN);

// function multiply(x, y) {
//   if (typeof y === "undefined") {
//     y = 1;
//   }
//   return x * y;
// }

// there's a shorter way of doing this manual check before we
// get to the newer way, the newer feature, you could use a ternary operator where
//  you set "y" equal to and then we have our condition -  "typeof Y" equals the string "undefined".

// function multiply(x, y) {
//   y = typeof y === "undefined" ? 1 : y;
//   return x * y;
// }

// we have new way syntax - Default Parameters
// So we define our function and right inside the parents where we are listing the parameters
//  we can add a default with equal sign and then a default value.

function multiply(a, b = 1) {
  return a * b;
}

// defaul string Hi.

const greet = function(person, greeting = "Hi") {
  console.log(`${greeting}, ${person}!`);
};

greet("Tim");
greet("Timati", "Yoo");

// we can use an array or an object or any other value in JavaScript as the default value !
//  important note about default parameters is that the order absolutely matters.

function wrongOrder(x = 1, y) {
  return x * y;
}

console.log(wrongOrder(2));
//  there's no default for Y

console.log(wrongOrder(2, 5));
// but if we pass in 2 numbers it works fine, but the default is never going to work.

// spread
// it's not that easy to explain because it does many things depending on the context.
// So in all scenarios there's really three use cases:
// 1 - spread in a function call;
// 2- spread an array literals;
// 3- spread an object literals.
// It all has to do with expanding some iterable into some other places some destination.

// so spread syntactically is always three dots

// when we use it in a function call inside the parentheses it will take that iterable and break
// it up into individual arguments rather than passing in a single argument.

console.log(Math.min(99, 88, 77, 66, 55, 44));
// If we have a list of numbers or an array of numbers it will not work.

const numbers = [99, 88, 77, 66, 55, 44];
console.log(numbers, "numbers");

console.log(Math.min(numbers));
console.log(Math.min(...numbers));

function giveMeFour(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "yellow", "green", "blue"];

giveMeFour(colors);
giveMeFour(...colors);

const str = "Enter";
giveMeFour(...str);

//  Spread in Array Literals
// when we use spread here it is going to make a clone of array, make a new unique reference.

const sameColors = [...colors];

console.log(colors === sameColors);

const allColors = ["all the colors you can imagine", ...sameColors, ...colors];
console.log(allColors);

// We can also spread other types of data into an array.
console.log(str.split("")); // it gives us an array

console.log(...str); // string with spaces
console.log([...str]); // it gives us an array

//  Spread in Object Literals
// we can make copies of objects or we can create combinations of objects,
//  we can put them together.

// It will not clone nested objects or nested arrays.

const persons2 = [
  {
    firstName: "Spanch",
    surname: "Bob",
    age: 18,
    rating: 8,
    whistle: true
  },
  {
    firstName: "Shaun",
    surname: "Sunshaun",
    age: 30,
    rating: 10
  }
];

const persons1 = [
  {
    firstName: "Vito",
    surname: "Dolchevito",
    age: 39,
    rating: 5
  },
  {
    firstName: "Ivan",
    surname: "Ivanov",
    age: 18,
    rating: 4,
    whistle: false
  },
  {
    firstName: "Ivan",
    surname: "Sidorov",
    age: 20,
    rating: 3,
    whistle: false
  }
];

const allGuests = [...persons2, ...persons1];

console.log(allGuests);

// We can spread a string into an object
// If I have an object literal and I try to spread an array into it,
// we get key value pairs based off of the indices.
console.log({ ..."SPREAD" });

// in "allGuests" the last array of objects overwrite the first array of objects.
// in an object where we trying have two properties with the same key,
// they just overwrite each other.

const movieStar = {
  firstName: "Spanch",
  surname: "Bob",
  age: 18,
  rating: 8,
  whistle: true
};

const youTubeStar = {
  firstName: "Shaun",
  surname: "Sunshaun",
  age: 30,
  rating: 10
};

// So the order does matter if you have conflicting properties with the same key name.

const channgeRating = {
  ...movieStar,
  rating: 9
};

console.log(channgeRating);

// We can also use spread to create a clone of an object so that we don't have the exact same reference.
// But just like with arrays this copy, this clone have only one level deep.
// It will not clone nested objects or nested arrays.

const stars = {
  ...movieStar,
  youTubeStar
};

//are we just create new object "stars" that contains object "movieStar" with a nested object "youTubeStar"?
// youTubeStar is a key and all object is a value of that key.

console.log(stars);

const cloneStars = {
  ...stars
};

console.log(cloneStars);

// const cloneInArray = [...stars];

// console.log(cloneInArray);  Error -  object is not iterable
// So in the context of an array it doesn't work, in the context of an object so we can spread objects

//  we can create array literals that also contain objects literals
//  where we use spread in different contexts.

// But the context matters the way that spread works.

const random = [..."ok", { ...cloneStars }];

console.log(random);

// Yes technically it's nested in the array but that doesn't matter

// we saw how do you spread in an array literal super useful which helps us copy data from one array
// into a new array.
// We can combine arrays essentially a nicer way of concatenating or
// we can create a clone of an array

// The Arguments Object (not new)
// It's almost like the opposite of spread.
// What it does is instead of spreading data out into arguments or into a new object or an array
// it actually collects things down into a single array.
// we don't have to use them

// rest
// it is also like "spread" defines by three dots
// But we put it inside the parameter list of a function definition and what it does is
// it collects all remaining arguments into a 100 percent real actual array,
//  not an array like object not an array imitation.

function sum(...numbers) {
  return numbers.reduce((total, curVal) => total + curVal);
}

// And that will be the name of the array that contains all of the arguments in our case.

console.log(sum(...numbers));

// all the same with "for of" loop
function sumAll(...numbers) {
  let total = 0;
  for (let n of numbers) total += n;
  return total;
}

console.log(sumAll(...numbers));

// We can use it to collect the remaining arguments, so not just every argument no matter what.
// Instead it collects the remaining arguments that have not been matched with a parameter.

//  the logic here is combine everything that has not been put in a parameter already.
//  the order definitely matters

const nums = [2, 3, 4];

const mltplAgain = (...nums) => nums.reduce((total, curVal) => total * curVal);

console.log(mltplAgain(...nums));

// We can tell it to only collect the remaining arguments after certain specific parameters.
// function(firstname, ...surname)
// We're taking multiple disparate elements arguments and combining them into an array.
// So the syntax is the same but that's why we have a different name rest versus spread.

//  Destructuring Arrays
// a short clean syntax to "unpack":
// values from arrays;
// properties from objects into distinct variables;

//  we can unpack specific values out of that array into new variables.

// const raceResults = (...allGuests) => (allGuests.firstName, allGuests.surname);
// console.log(raceResults(...allGuests)); // my experiments

const raceResults = ["spanch bob", "patrick", "shaun", "vito"];

// old syntax
// const gold = raceRezults[0];
// const silver = raceRezults[1];
// const bronze = raceRezults[2];

// now we can unpack the values all at once in a single line.
// These new variables will be created in this order based off of their position, their indices.
// You just come up with variable names, you assign them in one line

const [gold, silver, bronze] = raceResults;
console.log(bronze);

//  This doesn't change raceResults in any way.
// we can skip the elements
//  first extra comma is going to skip one index and go to next element

const [firstEl, , , fourEl] = raceResults;
console.log(fourEl);

// And another thing we can do is actually use the "rest"
//  in order to collect the rest of an array into a new variable.

const [winner, ...otherRacers] = raceResults;
console.log(otherRacers);

//  Destructuring Objects
// we can use these Destructuring to unpack values from an object into standalone variables
// just like we could for an array.
// But the main difference is that in an array we would unpack based off of position the index.
//  in an object We make the variables based off of the name of the property.

const runner = {
  first: "Spidy",
  last: "Gonzales",
  country: "unknown"
};

const { country: nation, last } = runner;

// So this will make a variable called "nation" based off of the value found in "country" property

console.log(nation, last);

const { first, ...others } = runner;

console.log(first, others);

// Nested Destructuring
// I'd like to show you how we can work with nested objects and arrays and combine all together.
// to extract individual values into variables to unpack them.

const [, { surname }] = persons2;
// So this comma is crucial.
// We're skipping that first element.

console.log(
  surname,
  " - the second element in array is an object that have a property 'surname' "
);
console.log("and now 'surname' is a name of variable with value 'Sunshaun' ");

// rename of the first object property - zero index
const [{ firstName: goldWinner }] = allGuests;
console.log(goldWinner);

const[, , {firstName: bronzeWinner}] = allGuests;
console.log(bronzeWinner);

//  Destructuring Parameters
// you'll often see destructuring used which is inside of a function definition

const fullName = ({ firstName, surname }) => {
  return `${firstName} ${surname}`;
};

console.log(fullName(youTubeStar));

//  if we put it inside the parentheses of a function definition what this will do is extract or 
// unpack values from the arguments passed in.
