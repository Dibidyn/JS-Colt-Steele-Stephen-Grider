// allows us to store data where we can associate things in group,
// pieces of data together, and We can specify labels.

const fitBitData = {
  totalSteps: 2019,
  totalMiles: 12,
  avgCalorieBurn: 350,
  workoutsThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
  45: "forty five"
};

console.log(fitBitData.totalMiles);
// when we create an object, when we make a property the keys are automatically converted to strings.
//  *exept for symbols !

// console.log(fitBitData.45); //error. here is an invalid name of a variable. 
// We  can't access it with the dot notation 

console.log(fitBitData[45]); // valid key - name of a variable.
console.log(fitBitData["45"]); // also valid key

// sometimes you have property names that may not be valid javascript identifiers, 
// now an identifier in Javascript is like the name of a variable.
// we should use [] if we want to use a dynamic value like a variable to access data from an object,
// 

// console.log(fitBitData[totalSteps]); // error
console.log(fitBitData["totalSteps"]); // valid key

let userChoice = "totalSteps";
console.log(fitBitData[userChoice]); // valid key, variable contains the valid key of this object.
// the dot notation doesn't work, the property with that name doesn't exist

//  adding or updating properties

const userScore = {};

userScore["Mary"] = 15;
userScore.Vito = 10;
console.log(userScore);

// to update we have to do the exact thing
userScore.Mary = 25;
userScore["Vito"] = 20;
console.log(userScore);

userScore.Mary += 2;
userScore["Vito"]++;
console.log(userScore);

// object is belong to reference types.
// So it stores a reference sort of an address in a bunch.
// In the case of an object or an array a reference type all the variable stores is that reference so we
// can change what's inside that object or that array.
// We just don't change that reference.

const secondUserScore = userScore;
secondUserScore.Mary = 15;
secondUserScore.Vito = 15;
secondUserScore.Ninja = 15;

console.log(secondUserScore); 
console.log(userScore);

let nums = [1, 2, 3];
let mystery = [1, 2, 3];

console.log(nums === mystery);
console.log(nums == mystery);

// They contain the exact same values in the exact same order but they are completely different in JavaScript
// mind. the value of that variable (nums or mystery) is simply storing a reference to this array.
// let variable = {reference to bunch};
// So when we compare with double equals or triple equals we're comparing these addresses.
//  each object or an array has its own completely unique place in memory.
// So they are not at all the same.

let moreNums = nums;
// So now they have a reference to the same address in memory, the same place.
console.log(nums === moreNums);

// each time I type empty array it's a new place in memory.
console.log([] === []);

// let notifications = null;
userScore.notifications = [];

console.log(userScore);
// if(userScore.notifications === []) // always false cause the address in memory [] !== [] 

if(userScore.notifications.length === 0) {
  console.log("no new notifications");
}


if(!userScore.notifications.length) {
  console.log("no new notifications");
}

//  we cannot easily compare values in arrays or in objects!
//  all that these operators double and triple equals will do is check for equality of reference 
// not equality of contents.

// how we can get access to object.property

let car = {
  color: "green",
  maxSpeed: 250
}

// квадратные скобки используют когда хотят передать имя свойства как значение переменной
car["color"] = "red";

// можно создать переменную в которой имя свойства объекта будет хранится в виде строкового литерала
let carProp = "color";
car[carProp] = "aqua";

// we can do it...

console.log(typeof car.color);
console.log(car.color);
