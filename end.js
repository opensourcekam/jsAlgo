function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  // str.substr(str.length-1);
  // find the last letter in the string
  // check if last letter === target
  var lastChar = str.substr(str.length-1);
  var strArr = str.split(' ');
  var arrLast = strArr[strArr.length-1];
  var targetArr = target.split(' ');
  var targetLast = targetArr[targetArr.length-1];
  //console.log(targetLast);  
  
  
  if(lastChar === target)
  {
    return true;
  }
  else if(arrLast === targetLast)
  {
    return true;
  }
  else 
  {
    return false;
  }

}

end('Bastian', 'n');

// This could be improved by checking to see if target even has " "