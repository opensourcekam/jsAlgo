function where(collection, source) {
  var arr = [];
  // What's in a name?
  // Pushing to arr
  // collections to keys
  // have keys then pass in source to keys
  // loop through collection keys and check agi
  /*var newArr = [];
  var keys = Object.key(source);
  for (var idx = 0; idx < collection.length; idx++) {
    for (var key in collection[idx]){
      
    }
  }
  */
  
   for(var keys in source){
    for(var idx = 0; idx < collection.length; idx++){
        if(source[keys] === collection[idx][keys]){
          arr.push(collection[idx]);
        }
      }
    }
  
  
  return arr;
}
// [last: 'Montague',last: 'Montague',last: 'Montague']
where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
