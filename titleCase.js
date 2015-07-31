function titleCase(str) {
  //If the word is == 1char should we capatilize? 
  //Break string into array
  var arr = str.split(' ');
  //Loop array 
  for(var i = 0; i < arr.length; i++){
   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase();
   //Get this to join the rest of the word
  
}
    //Check arr[i].charAt(0).toUpperCase();
  //arr[i].charAt(0).toUpperCase();
  return arr.join(' ');
}

titleCase("I'm a little tea pot");