// If Statements
// if (1 !== 1) {
//   console.log("is it true??");
// }
// if (1 === 1) {
//   console.log("it's true!");
// }

//   we've written our first simple piece of logic our first decision
// that actually impacts which code runs based of this condition.

// let num = 38;

// if (num % 2 !== 0) {
//   console.log("ODD number");
// } else if (num % 2 === 0) {
//   console.log("EVEN number");
// }

// It will only be attempted if the first part if the if was false.
// It's just a second option or third or however many you need after the first one if that was false.

// performance review
// 3 - superstar
// 2 - meets expectations - соответсвие ожиданиям
//  1 - needs improvement
// anything else - wtf?

// let rating = 0;

// if (rating === 3) {
//   console.log("superstar");
// } else if (rating === 2) {
//   console.log("meets expectations - соответсвие ожиданиям");
// } else if (rating === 1) {
//   console.log("needs improvement");
// } else {
//   console.log("INVALID RATING!");
//   //   it just runs no matter what if nothing else run first.
// }

// example 2 - we have a game or something

// let highScore = 1450;
// let userScore = 1200;

// if (userScore >= highScore) {
//   console.log(`Congrats you have a new high score of ${userScore}`);
//   highScore = userScore;
// } else {
//   console.log(
//     `Good Game. Your score  ${userScore} did not beat the high score of ${highScore}`
//   );
// }

// Nesting
// The next thing to know about conditionals is that we can nest them inside of one another.
// we just nest them inside the curly braces.

// let name = "Vito";
// console.log(name.indexOf("v")); // -1 отсутствует. there is no letter "v" in "Vito".
// console.log(name.indexOf("V")); // there is letter "V" in "Vito". Method is case sensitive.
// console.log(name.indexOf("to"));
// console.log(typeof name); // lowercase of !

// строка индексируется от нуля + далее положительные значения.
// Отсутствие символа или подстроки indexOf() вернёт -1.
// индекс ноль в условии if() приведётся к булевому типу false!
// if (str.indexOf("Widg") !== -1) // эти символы присутствуют?? - утвердительный вопрос
// if (str.indexOf("Widg") === -1) // эти символы отсутствуют?? - задаём утверд-ный вопрос.

// let str = "Widget with id";
// console.log(str.indexOf("W"));

// if (str.indexOf("Widg") != -1) {
//     console.log("Совпадение есть"); // теперь работает, проверили на отсутствие -1.
// }
// console.log(str.indexOf(" ")); // 1 character "space"
// console.log(str.indexOf(" i")); // 2 characters and more - it's substring - подстрока

// let password = "hello kitty";

// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Valid password");
//     // So if password that indexOf("space") is equal to negative one that means there is no space.
//   } else {
//     console.log("password is long enough, but can not contain spaces.");
//   }
// } else {
//   console.log("password must be longer!");
// }

// So if password that indexOf("space") is equal to negative one that means there is no space.

//  All values have inherent truthy or falsy boolean value
// Falsy values:

// false
// 0
// "" (empty string)
// null
// undefined
// NaN

// Evrithing else is truthy!!!

// Logical Operators
// && - logical AND
// || - logical OR
//  ! - logical NOT

// They kind of modify other boolean expressions.
//  and NOT is just going to operate on a single expression and it returns true if that
// expression is false.
// !null - true
// !(0===0) - false
// !(3<=4) - false
// So we put exclamation point in front of some expression if that expression returns false
// when you have the NOT in front of it - the whole thing is now true.
// kind of negates it.

// let loggedINUser = "";

// if (!loggedINUser) {
//   console.log("Get OUT of here!");
// }

// let flavor = "watermelon";

// if (flavor !== "cherry" && flavor !== "grape") {
//   console.log("we don't have that flavor");
// }

// if (!(flavor === "cherry" || flavor === "grape")) {
//   console.log("we don't have that flavor");
// }

// We could also say if flavor equals grape or flavor equals cherry and then negate that entire thing
// the same exact outcome for it's true in the same scenarios and
//  false in the same scenarios but we've written it differently.
// we have flexibility all of this stuff can be rewritten multiple ways.

// Operator Precedence-  приоритет оператора

// NOT has higher precedence than others, && has higher precedence than ||,
// You can alter this using parentheses () - parens -латынь
// for example Division happens before subtraction.
// Precedence to run first

// let x = 7;

// console.log(x === 7 || x === 3 && x > 10);
// console.log(x === 7 || (x === 3 && x > 10));
// console.log((x === 7 || x === 3) && x > 10);

// if you go to MDN docs There is a table that shows the precedence of every single operator.
// Operator Precedence
//  () - always wins! That always runs first.
// add ()  because not all developers happen to remember that order off the top of their head either.

// let day = 3;

// if (day === 1) {
//   console.log("Monday");
// } else if (day === 2) {
//   console.log("TUEsday");
// } else {
//   console.log("INVALID DAY");
// }

// // each time we're really just checking day against one value.
// // we can use a "switch" statement in a scenario like this,
// // where we're taking one value and we're just checking it against multiple potential values.

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid DAY");
// }

// if any case is true all following code runs without checking for a  next cases.
// that's why we need to add a break
// So it's looking for the first match and then as soon as it finds it everything else runs.
// in this switch statement the keyword "default" is our fallback, when we have not expected input.

// We can combine certain cases and the way we do it looks like this.

// let emoji = "sad face";

// switch (emoji) {
//   case "sad face":
//   case "happy face":
//     console.log("yellow");
//     break;
//   case "lips":
//   case "heart":
//     console.log("red");
//     break;
// }

// If you don't use a break after one of these cases it's going to just run all the code that it sees.
// sometimes  we don't need default

// Ternary operator
// This is kind of the template for how you would read it.
//  condition ? expressionIfTrue : expressionIFFalse

//  let's say we're making a chat app where you can set yourself
//  you can set a status to be online or offline.

let status = "offline";

// let color;
// if(status === "offline") {
//     color = "red";
// } else {
//     color = "green";
// }

let color = status === "offline" ? "red" : "green";
console.log(color);
