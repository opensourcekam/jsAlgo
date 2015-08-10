/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.charCodeAt()
String.fromCharCode()
*/

function binaryAgent(str) { 
   // Check if string matches 1s & 0s & repeats 8 times
    if(str.match(/[10]{8}/g))
    {
        // Match regex -> map string to function
        var wordsFromBin = str.match(/([10]{8})/g).map(function(fromBinary)
        {
        // parseInt fromBinary on the base of 2 
        /*
         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
        */
            return String.fromCharCode(parseInt(fromBinary, 2) );
        }).join('');
        //console.log(wordsFromBin);
        return wordsFromBin;
    }
}


binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');

