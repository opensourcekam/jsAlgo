function repeat(str, num) {
  // repeat after me
  // str * 3 
  // recursion to have string pass in 3
  // or make loop
  // strPrint = num * strPrint; 
  //var strPrint = num;
  var newStr = '';
  for(var i = 0; i < num; i++) {
    newStr = str + newStr;  // 'abc' + ''
  }
  return newStr;
}

repeat('abc', 3);

x