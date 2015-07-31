function findLongestWord(str) {
  //Split to make array
  var arr = str.split(' ');
  
  //max < array'[i]' length set array'[i]' to max
  var max = arr[0].length;
  //Set array[0] as max
  for (var i = 1; i < arr.length; i++) {
    if(max < arr[i].length){
      max  = arr[i].length;
      //str = arr[i];
    }
  }
  return max;
  //return str.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');