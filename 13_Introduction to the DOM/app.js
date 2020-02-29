console.dir(document);

// So the main takeaway here is that we get all these objects and methods for free.

// The most important methods that have to do with selecting
// Самые важные методы, связанные с выбором

// We're going to get a single element back, get element by I.D.

const img = document.getElementById("rose");
console.dir(img);

// what if we were find no match by ID ?
const noMatch = document.getElementById("noElement");
console.dir(noMatch);
// null

// We can also select by a type of element - by tag.
// when we call document.getElementsByTagName("h1") we pass in the string representing a tag name.

// And that is significant because we will get more than one element or potentially we could.
// And that means that the elements returned are going to be stored in a list,
// list of objects. Looks like its an array, It is not an array!

// We always get a collection of objects back, even if its one object.
// It's a very lightweight structure that stores elements.

// It's not an actual array but we can iterate over it,
//  each element in that array is an actual object object. 

const h1 = document.getElementsByTagName("h1");
console.dir(h1);

const h2 = document.getElementsByTagName("h2");
console.dir(h2);

const h3 = document.getElementsByTagName("h3");
console.dir(h3);

// We can use array indices in brackets - same syntax.
console.dir(h3[0]);
console.log(h3[0]);

console.dir(h3[6]);
console.log(h3[6]);

console.log(h3.length);

// And fortunately we can also iterate.
for (el of h3) {
  console.log(el);
}
//  they looks like tags in Dev Tools, but they are objects.

//  we can also use "spread" operator! So I can to turn our HTML collection into an array.
// I can spread it into an array.

const arrH3 = [...h3];
console.log(arrH3);

// the most time what we doing is just looping over things and
//  making some sort of change to each element, adding a style or reading a value.

console.log(document.getElementsByClassName("header"));
// It looks like an array but we don't get any of those array methods.
// We can iterate over it using a "for of" loop.

// you don't have to call them only on the document.

// querySelector - It can select everything that we used it can replicate
//  the functionality of all of the selectors that we had learned before.

// querySelector    pass in a CSS selector, and returns a single element.

// finds first "h3" element
console.log(document.querySelector("h3")); 

// finds first element with ID of "rose"
console.log(document.querySelector("#rose")); 

// finds first element with class of
console.log(document.querySelector(".header")); 

// querySelectorAll - get all elements
console.log(document.querySelectorAll("h3")); 
// it returns a NodeList - It's another type of a collection.
// A NodeList is another array like object.
// we can use "forEach"


