/*

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.reduce();

*/

function unite(arr1, arr2, arr3) {

var flaten = [arr1, arr2, arr3].reduce(function(a, b) 
{
  return a.concat(b);
});

uniqueArray = flaten.filter(function(item, pos, self) 
{
    return self.indexOf(item) == pos;
});
  return uniqueArray;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);



