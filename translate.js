/*Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.indexOf()
Array.push()
Array.join()
String.substr()
String.split() */

function translate(str) {
// Split str into arr 
var ifBeginsWithVowel = 'way';
var strArr = str.split('');
var firstLetter = "";
var secondLetter = "";
console.log(strArr);
  
// Check if first letter of str isVowel
var isVowel = ['a', 'e', 'i', 'o', 'u'].indexOf(str[0].toLowerCase()) !== -1;

var isDoubleOnsonantcay = ["q", "w", "r", "t", "y", "p", "s", "d", "f", "g","h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"].indexOf(str[0].toLowerCase() && str[1].toLowerCase()) !== -1;
  
//console.log(isVowel);

if(isVowel){
  // .push if BeginsWithVowel into strArr'
  strArr.push(ifBeginsWithVowel);
  // then join this joint
  strArr.join('');
}
  // This works
else if(isVowel !== true && isDoubleOnsonantcay !== true){
 // well this means it doesnt begin with vowel
 //Shift first letter 
 firstLetter = strArr.shift();
 // .push firstLetter on end of strArr
 strArr.push(firstLetter);
 strArr.push('ay');
}
 else if(isDoubleOnsonantcay){
  firstLetter = strArr.shift();
  secondLetter = strArr.shift();
  strArr.push(firstLetter);
  strArr.push(secondLetter);
  strArr.push('ay');
}
 // Join string back together
  newStr = strArr.join('');
 // console.log(newStr); 
  
// @END
 return newStr;
}

translate("glove");

