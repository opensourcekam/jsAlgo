function palindrome(str) {
  // Good luck!
   str = str.toLowerCase();
   var nopunctuation = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
   var nospaces = nopunctuation.replace(/\s/g,"");
   var len = nospaces.length;
    
    for (var i = 0; i < Math.floor(len/2); i++ ) {
        if (nospaces[i] !== nospaces[len - 1 - i]) {
            return false;
        }
		else{
			return true;
        }

    }
}

palindrome("RaCeCar");