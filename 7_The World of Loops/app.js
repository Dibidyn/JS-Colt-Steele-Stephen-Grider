// FOR loop
// for([initialExpression], [condition], [incrementExpression]) {}

// So a for loop is very similar to a conditional not in the way that it works but in the syntax.

// for(let i = 1; i <= 3; i++) {
//     console.log("hello", i);
// }

// for(start at; stop at; how i will be change each time) {do this code}

// infinite loops - don't do it!
// for(let i = 20; i >= 0; i++) {} - infinite loop

// for (let i = 23; i >= 20; i--) {
//   console.log("valid", i);
// }

// смотреть где условие останова по числовой оси и сопоставить с направлением инкремента

// to loop over an array, start at zero and continiue to the last index (length - 1)

// const people = ["Mary", "vito", "shaun"];

// for (let i = 0; i < people.length; i++) {
//   console.log(i, people[i]);
// }

let myStudents = [
  { firstName: "Mary", grade: 97 },
  { firstName: "vito", grade: 87 },
  { firstName: "shaun", grade: 77 }
];

for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  // console.log(student); // We're printing each object out because student is
  //  simply referencing each element in the array at the appropriate index.
  console.log(`${student.firstName} scored ${student.grade}`);
}

// we try averaging all of the grades, starts at summary
let total = 0;
for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  total += student.grade;
}
console.log(total);
console.log(total / myStudents.length); // average

// looping through a string.
//  we're accessing a string using those indices

const word = "stressed";
let reverseWord = "";
for (i = word.length - 1; i >= 0; i--) {
  console.log((reverseWord += word[i]));
}
console.log(reverseWord);

// So we're now printing out each character in the string in reverse order.
// we try averaging all of the grades.

// nested loops
// This let i and this let j have a different scope.

for (let i = 1; i <= 3; i++) {
  console.log("outer loop", i);
  for (let j = 2; j >= 0; j--) {
    console.log("   inner loop");
  }
}

// every single time this outer loop runs, just a single iteration, the inner loop completes its full cycle.
// if we have X iterations on an outer loop and Y inner iterations on the inner loop,
// we will be running X*Y times  or we'll have basically multiplied the number of times.

// game
const gameBoard = [
  [30, 20, 10],
  [10, 20, 30],
  [33, 22, 11],
  [11, 22, 33]
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  for (let j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}
console.log(totalScore);

// We need to have at least two loops to access each element, because we have nested arrays.
// We have a complete cycle of the inner loop before the outer loop increments or
// moves on to its next iteration.

// while loop
// a while loop continues to run as long as its test condition is true
// while(some condition is true) {run this code}
// we need to initialize a variable for our counter, but
// a better practice to not create a variable outside of a loop whenever possible
// because of scope. that's why we prefer for loop for this case:

// let j = 0;
// while (j <= 3) {
//   console.log(j);
//   j++;
// }

//  for loop you're writing the exact rules, you're writing how many
// times it should run.

// where a while loop really excels is when you're writing a loop where you don't know
// exactly how many times it's going to run.

// while(!gameOver) or while(stillAlive) or while(livesLeft > 0)
// Just remember if you do not update something
// that has the chance of making this false you'll get an infinite loop.

//  this is the really important part of any while loop you need to eventually have a way of making
// this condition false so that the loop will stop.

// console.log(Math.floor(0.99*10));

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// let k = 0;

// while (target !== guess) {
// k++;
// console.log(`Target: ${target} , Guess: ${guess}`); // we can see values of each loop,
// guess = Math.floor(Math.random() * 10); // only guess changes
// }
// console.log("congarts you win!");
// console.log(`Target: ${target} , Guess: ${guess}`, k);

// value for the last loop where its stops,
// when condition is false and the number of iterations

// If we didn't change guess and we only guessed one time this would go on forever.

// break keyword
// it is useful when we have nested loops and with "break"  we can don't
// stop all loops from executing it will only stop the inner loop or the current loop.

// let's rewrite our "guess" game

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while (true) {
//   if (target === guess) break;
//   console.log(`Target: ${target} , Guess: ${guess}`); // we can see values of each loop,
//   guess = Math.floor(Math.random() * 10); // only guess changes, i can mistake.
// }

// console.log("congarts you win!");
// console.log(`Target: ${target} , Guess: ${guess}`);

// I'm not such a big fan of this approach because of two main reasons one it can be easy to end up with
// infinite loops but the main reason I don't like it is writing while true is just not very
//  informational.

// for ... of loop
// it's an easy way of iterating over arrays or other iterable objects.
// for(variable of iterable) {statement}
// and that variable, we assign, will store each individual element of the array or of the string.

// let = subreddits =["pop", "lolipop", "books"];

// for(let i = 0; i < subreddits.length; i++) {
//   console.log(subreddits[i]);
// }

// So we're only using "i" here to access each element.
// It's not very attractive or clean to look at these ugly indices, so
// rewrite this.

// for(let element of subreddits) {
//   console.log(element);
// }

// for(let letter of "Mary") {
//   console.log(letter.toUpperCase());
// }

// there are situations when you might actually prefer a standard "for loop"
// magic square - It's a square of numbers a grid where each row sums to some number,
// in this case 15.

// const magicSqare = [
//   [9, 5, 1],
//   [4, 3, 8],
//   [2, 7, 6]
// ]

// for(let i = 0; i < magicSqare.length; i++) {
//   let row = magicSqare[i];
//   let sum = 0;
//   for(let j = 0; j < row.length; j++) {
//     sum += row[j];
//   }
//   console.log(sum);
// }

// row in inner loop is going to refer to one of these nested arrays and then I'll loop over row.
// rewrite this

// for(let row of magicSqare) {
//   sum = 0;
//   for(let element of row) {
//     sum += element;
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// I want to loop over the first array and for each
// element I want to also print out the corresponding element from second array.
// we need to know which index we're accessing in words1 and
// index to access the corresponding value from words2.
// for..of don't gives us that possibility.
//  if you need to care about the index, the position, like we did here then
// better use for(loop).

// const words1 = ["mail", "milk", "iron"]; // , "W", "T", "F"
// const words2 = ["box", "tub", "mouse", "wtf"];

// for(let i = 0; i < words1.length; i++){
//   console.log(`${words1[i]} ${words2[i]}`);
// }

// rewrite magicSquare to get sum of its columns

const arr1 = [9, 5, 1];
const arr2 = [4, 3, 8];
const arr3 = [2, 7, 6];

for (let i = 0; i < arr1.length; i++) {
  let s = 0;
  console.log(`${arr1[i]} + ${arr2[i]} + ${arr3[i]}`);
  console.log((s = arr1[i] + arr2[i] + arr3[i]));
}

// Next up let's talk about looping over objects or iterating over objects.
// some of the keys explicit strings
// There are no indices for this object. So a for() loop isn't going to work.
//  object is not iterable. So what can we do instead? Well, we have a couple of options.
// The first is to use a for of loop and instead of looping over the entire object which doesn't work we
// can loop over just the keys or just the values.
//  there is a method called Object.keys() and you pass in an object to it.
// and we get a list of the keys.
//  we also have Object.values()  and we get the list of the values.
// Pay attention to the fact that it is capital O object

const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  "Kill Bill": 8,
  "Little miss Sunshine": 8.5
};

console.log(Object.keys(movieReviews), Object.values(movieReviews));

//  we just grabbed the keys, and values and it returns as array!

for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}

// we can NOT use the dot notation (movieReviews.movie)
// "movie" is a variable if we need to access part of an object and the key is a variable then
// We use the square brackets.

// But remember if you have a value for an object there's not an easy way to get the corresponding key.

// we could iterate over the values and add them altogether.

const ratings = Object.values(movieReviews);
// then we can iterate over these values.
console.log(ratings);

total = 0;
for (let r of ratings) {
  total += r;
}
console.log(total);

let avg = total / ratings.length;
console.log(avg);

// for...in loop
// loop over the keys, the properties in an object!
// This will loop over the keys automatically.

for (let prop in movieReviews) {
  console.log(prop, movieReviews[prop]);
}

let score = 0;
for (let key in movieReviews) {
  score += movieReviews[key];
}
console.log(score);

// movieReviews[key] object with key returns value.
//  Arrays technically are objects which means that we can use a for(in) with an array.
// let's do just a simple hardcoded array.

for (let key in [66, 77, 88, 99]) {
  console.log(key);
}

// So we're not looping over the actual elements in array.
// The values don't matter.
// We're looping over the properties  - the indices!!
// Arrays are just  special objects where the keys are an ordered set of indices.
//  it's not great to use with arrays the way that for in loops can vary from browser to browser!
// MDN docs says :"It says it's an arbitrary order."
// use for(in) loop only with objects!

// instead for(of) loop which automatically gives us the values in arrays.
