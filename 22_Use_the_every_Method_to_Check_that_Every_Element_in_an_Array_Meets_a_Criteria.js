/*
The 'every' method is used to check if all the elements passes a certain criteria then it return boolean results a true/false. 

Task:

Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.

function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
*/

function checkPositive(arr) {
    // Only change code below this line
  
    return arr.every(function (element) { return element > 0});
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);