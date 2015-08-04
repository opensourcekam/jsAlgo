/*We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.reduce()*/

function sumAll(arr) {
  // 1 + 2 + 3 + 4
  // var i up from min to max 
  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);
  var sum = 0;
  
  while(max >= min){
  sum +=  min; // min = 1
  min++; // min = 2
  }
  return(sum);
}

sumAll([1, 4]);

