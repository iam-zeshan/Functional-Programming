/*
using functional programming concept we can do an amazing things by making a chain of functions.
in the below challange:
No 1. I've select the elements that are both positive and interger numbers
No 2. I select one by one using map method and then I've use another JavaScript built in method 'Math.pow' to make them sqaure.

Task:
Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function

const squareList = arr => {
  // Only change code below this line
  return arr;
  // Only change code above this line
};
*/


const squareList = arr => {
    // Only change code below this line
    return arr.filter(positive => positive > 0 && positive % parseInt(positive)===0).map(square => Math.pow(square, 2));
    // Only change code above this line 
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers); 