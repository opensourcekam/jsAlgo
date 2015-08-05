/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.replace()
*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/([a-z])([A-Z])/g,function(match,p1,p2)
  {
    return [p1,p2].join(' ');
  });
  
  str = str.toLowerCase();
  str = str.replace(/[\W?_?]/g, '-');
  return str;
}

spinalCase('This Is Spinal Tap');