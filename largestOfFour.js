// LOOPING SOLUTION
function largestOfFour(arr) {
  // You can do this!
  // Loop through first array
  // second for loop to iterate through array1
  // set max for array 1
  // set max to index 0, then compare al numbers for array1
  // set max for array 2, set to first index, then compare numbers for array2
  // Math.max.apply(Math, arr[i])
  // Length of i = 4;
  // Length of j = 4;
  
  var newArr = [];
  for (var i = 0; i < arr.length; i++) 
  { 
     newArr.push(Math.max.apply(Math, arr[i]));
    
    /*for (var j = 0; j < arr[i][j].length; j++)
    {
      
      if(newArr[j] < arr[i][j])
      {
        newArr[i] = arr[i][j];
      }
    }*/
  }
  return newArr;
}
//[5,27,39,1001]
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//Array push method
function largestOfFour(arr) {
  // You can do this!
  // Loop through first array
  // second for loop to iterate through array1
  // set max for array 1
  // set max to index 0, then compare al numbers for array1
  // set max for array 2, set to first index, then compare numbers for array2
  // Math.max.apply(Math, arr[i])
  // Length of i = 4;
  // Length of j = 4;
  
  var newArr = [];
  for (var i = 0; i < arr.length; i++) 
  { 
     newArr.push(Math.max.apply(Math, arr[i]));
    
    /*for (var j = 0; j < arr[i][j].length; j++)
    {
      
      if(newArr[j] < arr[i][j])
      {
        newArr[i] = arr[i][j];
      }
    }*/
  }
  return newArr;
}
//[5,27,39,1001]
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);