/*

Create a function that sums two arguments together. If only one argument is provided, return a function that expects one additional argument and will return the sum.

For example, add(2, 3) should return 5, and add(2) should return a function that is waiting for an argument so that var sum2And = add(2); return sum2And(3); // 5

If either argument isn't a valid number, return undefined.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Function Object
Arguments object

*/
function add() {
var sum, num1, sumNum;
// Loop through args
  for(var i in arguments)
  {
  // Check typeof Arg
    if (typeof arguments[i] !== 'number')
    {
      return undefined;
    }
  }
  // Check if two args & return sum of args @ idx 1 + 2 
  if(arguments.length === 2) 
  {
    sum = arguments[0] + arguments[1];
    return sum;
  }
  // Check if only 1 arg & wait for next arg
  if(arguments.length === 1)
  {
    num1 = arguments[0];
  // take new arg check type and return num1 with new arg
    sumNum = function(num)
    {
      if(typeof num !== 'number') 
      {
        return undefined;
      }
      return (num1 + num);
    };
    return sumNum;
  }
}

add(2)(3);