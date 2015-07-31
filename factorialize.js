"use strict"
function factorialize(num) {
  if(num === 0){
    return 1;
  }
  else if (num === isNaN){
    return "This is not a number";
   }
  else
    return (num * factorialize(num-1));
  return num;
}

factorialize(5);