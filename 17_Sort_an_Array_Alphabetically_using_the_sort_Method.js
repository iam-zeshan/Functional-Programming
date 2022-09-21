/*
'sort', this is the another JavaScript built in method. It is used to sort the array of strings. And we can use it to sort the integer values also but for that we need to do some more effort, I mean we need to pass an another callback function.

Task:
Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. The function should return the sorted array.
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr
  // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

*/

function alphabeticalOrder(arr) {
    // Only change code below this line
  
    return arr.sort()
    // Only change code above this line
  }
  
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));