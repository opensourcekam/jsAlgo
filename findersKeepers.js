/* Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.some()
*/

function find(arr, func) {
  // Just filter our array.
  arr = arr.filter(func);
  // Return the first index
  return arr[0];

}

console.log(find([1, 2, 3, 4], function(num){ return num % 2 === 0; }));

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });



