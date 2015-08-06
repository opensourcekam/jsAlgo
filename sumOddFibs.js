/*
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Remainder
*/

function sumFibs(num) {
  var fib0 = 0;
  var fib1 = 1;
  var fibArr = [0,1];
  var fib = 1;
  var sum = fibArr[0];

  while ( fib <= num){
    if (fib % 2) {
        sum += fibArr[1];
    }
    fib = fibArr[0] + fibArr[1];
    fibArr[1] += fibArr[0];
    fibArr[0] = fibArr[1] - fibArr[0];
  }

  return sum;
}
sumFibs(1000);