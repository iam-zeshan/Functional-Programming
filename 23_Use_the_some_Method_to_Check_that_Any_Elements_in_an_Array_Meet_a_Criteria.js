/*
'some' is the another one JavaScript built in method, that will return a boolean results if any element passes the test.

Task:
Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.

function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
*/

function checkPositive(arr) {
    // Only change code below this line
    return arr.some(function (a) { return a >0});
  
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);