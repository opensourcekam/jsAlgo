/* 
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.charCodeAt()
String.fromCharCode()
*/

function fearNotLetter(str){
  // set alphabet str
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var outsideIndex = 0;
  for(var i = alphabet.indexOf(str[0]); i < str.length; i++){
        if(alphabet[i].indexOf(str[outsideIndex]) === -1){
            return alphabet[i];
          }
      outsideIndex++;
    }
  return undefined;
}

fearNotLetter('abce');