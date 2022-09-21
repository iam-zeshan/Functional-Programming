/*
'curried', it is the function that is used in the situation where we can't pass all the arguments at a time.


Task:
Fill in the body of the add function so it uses currying to add parameters x, y, and z.

function add(x) {
  // Only change code below this line

  // Only change code above this line
}

add(10)(20)(30);
*/

function add(x) {
    // Only change code below this line
  
    return function (y) {
      return function (z) {
        return x+y+z;
      }
    }
    // Only change code above this line
  }
  
  add(10)(20)(30);