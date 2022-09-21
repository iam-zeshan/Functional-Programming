/*
The purpose of the functional programming is to not change the original objects, arrays, or any other things that is use to store data. And the push method updated the original data. But to avoid mutation we have to use concat, cause concat method doesn't change the original data.


Task:
Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.

function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.push(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);
*/

function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingPush(first, second);