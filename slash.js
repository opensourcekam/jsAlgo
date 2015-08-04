Return the remaining elements of an array after chopping off n elements from the head.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

/*ideas

Array.slice()
Array.splice()
*/

function slasher(arr, howMany) {
  // it doesn't always pay to be first

  // redfine howMany, define new arr, define arr.length;
  var slashed =[];
  var x = arr.length;
  var n = howMany;
  // use array.slice to cut @ howMany, arr.length
  /* THIS WILL ACCEPT TWO PARAMS --> 
      Array.slice(HOW MANY TO SLICE, HOW LONG IS THE STR)*/
  slashed = arr.slice(n, x);
  return slashed;
}

slasher([1, 2, 3], 2);

