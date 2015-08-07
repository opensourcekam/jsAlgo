/*Flatten a nested array. You must account for varying levels of nesting.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()
*/

function steamroller(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) 
  {
    //if the arr @ i is array  concat into newArr
    if (Array.isArray(arr[i])) 
    {
      newArr = newArr.concat(steamroller(arr[i]));
    } 
    else
    {
     // otherwise push to newArr
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

steamroller([1, [2], [3, [[4]]]]);