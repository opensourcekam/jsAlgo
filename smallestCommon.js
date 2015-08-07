/*
Find the smallest number that is evenly divisible by all numbers in the provided range.

The range will be an array of two numbers that will not necessarily be in numerical order.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Smallest Common Multiple
*/

function compareNumber(a,b){
  return a-b;
}

function smallestCommons(arr) {
  arr=arr.sort(compareNumber);
  var maxNumber=arr[arr.length-1];
  var minNumber=arr[0];
  
  for(var i=maxNumber;;i++){
    var flag=1;
    for(var j=minNumber;j<=maxNumber;j++){
      if(i%j!=0)  // that means the number cannot be divided
      {
        flag=0;
        break;
      }
    }
    if(flag==1){
      return i;
    }        
  }  
}


smallestCommons([1,5]);
console.log(smallestCommons([1,9]));