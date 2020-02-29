// let colors = ["red", "blue", "indigo", "yellow", "green", "violet"];
// console.log(colors[colors.length - 1]);

// colors[5] = "white";
// colors[7] = "black";
// console.log(colors);
// console.log(colors[6]);  //six index was missed


// This will always add to the end.

// colors[colors.length] = "aqua";
// console.log(colors[colors.length - 1]);
// console.log(colors);

// that was usefull  when I'm trying to change a value that's already in an array.
// There is a built in method to help you add new items to the end of an array.

// console.log(colors.push(true), "That value is the new length of the array.");

// We weren't actually changing the original string as we've seen strings are not mutable they are immutable.
// let str = "hello";

// console.log(str.toUpperCase());
// console.log(str);

//  Pop is going to always remove the last item and it returns its value to you.
// The fact that it returns it to you if you were creating a list that was managing your todos and you
// always wanted to get the last to do on that list 

// console.log(colors.pop());
// console.log(colors.pop());
// console.log(colors.pop());
// console.log(colors.pop());
// console.log(colors);

// const lastColor = colors.pop();
// console.log(lastColor);
// console.log(colors); //when you pop something off it's gone, you do it and you don't need it anymore.

// console.log(colors.push("white"));
// console.log(colors);
// console.log(colors.push("white"));
// console.log(colors);

// unshift is add new item in the beginig and just like push it returns the new length of the array.

// example starts

// let dishesToDo = [];

// dishesToDo.unshift("big platter");
// dishesToDo.unshift("large plate");
// console.log(dishesToDo.unshift("small plate"));
// console.log(dishesToDo);

// console.log(dishesToDo.unshift("bowl"));
// console.log(dishesToDo.unshift("mug"));
// console.log(dishesToDo);

//  you can see that everything has been added to the beginning
// Now one quick note about unshift is that you can add in multiple things at once.

// console.log(dishesToDo.shift());
// console.log(dishesToDo.shift());
// console.log(dishesToDo.unshift("cup", "fork", "knife"));

// It put them in as a chunk together which is actually different than if I had unshifted them individually.

// console.log(dishesToDo.shift());
// console.log(dishesToDo.shift());
// console.log(dishesToDo);

// console.log(dishesToDo.push("large spoon", "small spoon"));
// console.log(dishesToDo);

// more arrays methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// concat - merge arrays

// let moreDishes = [];
// console.log(moreDishes.unshift("bowl"));
// console.log(moreDishes.unshift("mug"));
// console.log(moreDishes);
// console.log(dishesToDo.concat(moreDishes));
// console.log(moreDishes);
// console.log(dishesToDo);

//  it does not update or mutate the original array. It instead creates a new copy or a new version.

// example ends

// new example starts

// includes and indexOf are two similar methods. They have to do with searching for a value in an array.
// includes - look for a value, NOT available in IE ! It returns true or false. It's a boolean method.
// indexOf - just like str.indexOf()

// let something = [11, 22, 33, 44, 55];
// console.log(something.includes(0));
// console.log(something.includes(5));

// It's looking for an exact match.

//  index is a way you can specify where to start searching from.
// So I could do "something" that includes 11 after index of one and that's false.

// console.log(something.includes(11, 0));
// console.log(something.includes(11, 1));

// we can use it in a simple conditional.
// if(something.includes(33)) {
//     console.log("yra !");
// }

// indexOf() so it will search for a value and if it finds it, it will return the index where it found
// And just like with a string, if it does not find the value, if it's not present it returns negative one.

// let something = [00, 11, 22, 33, 44, 55];
// console.log(something.includes(0));

// console.log(something.indexOf(66));
// console.log(something.indexOf(22));

//  and just like with includes() we can specify a from index
// console.log(something.indexOf(22, 2));
// console.log(something.indexOf(55, 2));

// if(something.indexOf(33) !== -1) {
//     console.log("do this block of code");
// }

// includes() is answering of yes or no
// indexOf() is answering of Where?

// next built in method is join() - creates a string from array
//  it spits out a string where it joins. - выплёвывает строку

// console.log(something.join());
// separate them by some character
// console.log(something.join("   "));

// reverse - reverses an array
// console.log(something.indexOf(22));
// console.log(something.reverse());
// It actually impacts, it mutates the original array 

// console.log(something.indexOf(22));

// slice
// It's similar to the string slice method.
// It takes a portion of an array and it makes a new array with it so it doesn't impact the original array.
// it allows you to select or copy a part of an array into a new array.

// let partSome = something.slice(1, 3);
// console.log(partSome);
// But the second number we provide is not going to be included.
// we can specify only one argument,
// it's going to assume it should go all the way to the end.
// let endArr = something.slice(1);
// console.log(endArr);

// if we pass a negative number it's going to count backwards or work backwards from the end of the array.
// let backwards = something.slice(-3);
// console.log(backwards);
// backwards = something.slice(-3, -1);
// console.log(backwards);

// backwards = something.slice(-1); // -1 is the last element in array
// console.log(backwards);

// it just makes a new copy of array
// let newArray = something.slice();
// console.log(newArray);

//ends

// splice() - remove, replace elements
// Splice is a little trickier to understand.
// There are at least three different values that we can pass it.
// So in short what it does is it either removes elements or replaces elements or adds in new elements.
// 3 in 1
// if you want to update the middle of an array or add something you could use Splice.
// array.splice(start Index, delete Count, insert item)

// let something = [00, 11, 22, 33, 44, 55];

// We're going to delete zero because I'm only adding in something at index of 1.
// console.log(something.splice(2, 0, 66));
// console.log("splice returns an empty array, This is because I didn't delete anything.")

// splice returns an empty array, This is because I didn't delete anything.
// console.log(something);

// console.log(something.splice(1,2));
// console.log(something);
// starts from index 1 removed two items

// also we can replace 
// console.log(something.splice(1,2,77,88,99)); // указал 2 элемента для замены но запушил 3 - 99
// console.log(something);
// starts from index 1 replaced two items. After the second argument goes values that we want to add in array.

// console.log(something.splice(1,2,66)); // указал 2 элемента для замены но запушил 1 - 66
// console.log(something);

// sort - sorts an array

// But the way it sorts it might surprise you.

// let something = [00, 11, 22, 33, 44, 55];
// console.log(something.sort());

// console.log(something.reverse());
// console.log(something.sort());

// let str = ["dishes", "cup", "any", "brown"];
// console.log(str.sort());

// console.log(something.splice(0,3,66,7,8));
// console.log(something.sort());

// it's not sorting based of the numeric value it converts every single value to a string
// And then it compares their character codes, their UTF 16 codes.
// So this is the default behavior of sort()
// nobody used it as is.
// what we can do instead is pass in something called a compare function.

//  if you don't pass in a function and tell it how to sort the default sort is based off
// of string character codes which leads to some unexpected results.

// let fruit = "orange";
// let color = fruit;
// console.log(fruit, color);

// fruit = "apple";
// console.log(fruit, color);
// we store values in variables
// They're not linked. That's because they are primitive types.
// But for large things like arrays that doesn't work
// when we work with arrays and we put them in a variable the variable itself does not hold the array 
// it holds an arrow, a pointer, a reference to where the array is in memory.

// let nums = [1, 2, 3, 4];
// let anotherNums = nums;

// nums.push(5);
// console.log(nums, anotherNums);

//  with const array = []; you can not change that reference but you can change anything inside that array

// const cnstReference = [9, 8, 7];
// cnstReference.push(6); // thats works because reference is the same.
// console.log(cnstReference);

// cnstReference = [5, 4, 3]; //thats gives us error, because we tried to change the reference
// cnstReference = []; // error
// console.log(cnstReference);

// cnstReference.push(6); // thats works because reference is the same.
// console.log(cnstReference);

// nested arrays - we can store arrays inside other arrays!

const chainArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(chainArr[2][2]);

const deepChainArr = [
    [1, 2, 3, [11, 22, 33]],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(deepChainArr[0][3]);
console.log(deepChainArr[0][3][2]);

console.log(deepChainArr[0][3] = [44, 55, 66]);
console.log(deepChainArr[0][3][2]);

