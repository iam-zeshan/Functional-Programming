/*
The 'split' is the another JavaScript built in method, that is used to split a string into the specified delimiter and make an Array. delimeter mean how we want to split the strings, by spaces or by letters or by some special characters and so on...

Task:
Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.
function splitify(str) {
    // Only change code below this line
  
    // Only change code above this line
  }
  
  console.log(splitify("Hello World,I-am code"));
*/
function splitify(str) {
    // Only change code below this line
    return str.split(/\W/);
  
    // Only change code above this line
  }
  
  
  console.log(splitify("Hello World,I-am code"));