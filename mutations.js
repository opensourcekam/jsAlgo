/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ['hello', 'Hello'], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ['hello', 'hey'] should return false because the string 'hello' does not contain a 'y'.

Lastly, ['Alien', 'line'], should return true because all of the letters in 'line' are present in 'Alien'.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.indexOf()
*/

function mutation(arr) {
  var x = arr.length;
  var wordOne = arr[0].split('');
  var wordTwo = arr[1].split('');
  var y = wordTwo.length;
  var boo = false;
  
  for(var j = 0; j < y; j++)
  {
    if(wordOne.indexOf(wordTwo[j]) !== -1 )
    {
     boo = true;
    }
     else
     {
       boo = false;
     }
  }
  return boo;
}

mutation(['hello', 'hey']);

