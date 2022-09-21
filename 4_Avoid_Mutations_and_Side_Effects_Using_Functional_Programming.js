/*
Bugs often happen, when with the passage of time we grow our project, at that time if the values of any thing like Global variables, Arrays, and Objects updates then, we would definately get a BUGS, so it is good to take care of Mutation by using a Functional Programming. 

Task:
Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.

// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line

  // Only change code above this line
}
*/

// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  return fixedValue+1;

  // Only change code above this line
}