function diff(arr1, arr2) {
  var newArr = []; // 4
  var greater = Math.max(arr1.length, arr2.length);
  //console.log(greater);
  for(var i = 0; i < greater; i++)
  {
	if(arr1.indexOf(arr2[i]) == -1 && arr2[i] !== undefined)
      {
	    newArr.push(arr2[i]);
      }
    if(arr2.indexOf(arr1[i]) == -1 && arr1[i] !== undefined)
      {
        newArr.push(arr1[i]);
      }
  }
  return newArr;
}


diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

