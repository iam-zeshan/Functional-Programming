/*
splice method is used to remove elements from an array and it update the original array but we want just a copy of that then, we can use a 'slice' method instead

Task:
Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.

Do not mutate the original array provided to the function.

function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.splice(3);
  
    // Only change code above this line
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);
*/
function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0,3);
  
    // Only change code above this line
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);