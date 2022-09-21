/*
The 'slice', it is use to copy a certain part of the original array, luckily this method wouldn't disturb the mutability of the Original Array. and it takes two arguments the first one is the starting argument and the second one is the ending argument.


Task:
Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.

function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  
  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
*/

function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    const tempArr = anim.slice(beginSlice, endSlice);
    return tempArr;
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);