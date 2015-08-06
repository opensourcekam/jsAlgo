/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops
Array.push()
*/
function sumPrimes(num){

    var sieve = [], i, j, primes = [];
    for (i = 2; i <= num; ++i) 
    {
        if (!sieve[i]) 
        {
            // if i has not been marked then it is prime
         primes.push(i);
            for (j = i << 1; j <= num; j += i) 
            {
                sieve[j] = true;
            }
        }
    }
     // USER ARRAY.reduce method
  var sum = primes.reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});

  return sum;
}

sumPrimes(100);

