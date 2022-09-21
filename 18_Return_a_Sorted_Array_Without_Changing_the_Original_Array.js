/*
In this chllange, I return a new array and without updating the original array using slice to first the copy that original array and then I've sort the copy by using the 'sort' method.

Task:
Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line

return arr;
  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));

*/
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line

return arr.slice().sort(function (a, b) {return a -b;});
  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));