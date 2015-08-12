/*
Fill in the object constructor with the methods specified in the tests.

Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).

All functions that take an argument have an arity of 1, and the argument will be a string.

These methods must be the only available means for interacting with the object.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Details of the Object Model
*/

var Person = function(firstAndLast) {
// make firstAndLast local vars
   this.firstAndLast = firstAndLast;
// Getters
    this.getFirstName = function() {
      var arr = this.firstAndLast.split(" ");
      return arr[0];
    };

    this.getLastName = function() {
      var arr = this.firstAndLast.split(" ");
      return arr[1];
    };

    this.getFullName = function() {
      return this.firstAndLast;
    };
// Setter
    this.setFirstName = function(first) {
      var arr = this.firstAndLast.split(" ");
      arr[0] = first;
      this.firstAndLast = arr.join(" ");
    };

    this.setLastName = function(last) {
      var arr = this.firstAndLast.split(" ");
      arr[1] = last;
      this.firstAndLast = arr.join(" ");
    };

};


Person.prototype.setFullName = function (firstAndLast) {
  this.firstAndLast = firstAndLast;
};

var kam = new Person('Kameron Austin');
kam.getFullName();





/*

HOW TO NOT DO THIS

var Person = function(firstAndLast) {
    var fullName = firstAndLast;
// Getters
    this.getFullName = function(){
        return fullName;
    };
    this.getFirstName = function(){
        return fullName.split(' ')[0];
    };
    this.getLastName = function(){
        return fullName.split(' ')[1];
    };
// Setters
    this.setFullName = function(name){
        fullName = name;        
    };
    this.setFirstName = function(first) {
        fullName = first + " " + fullName.split(" ")[1];
    };
    this.setLastName = function(last) {
        fullName = fullName.split(" ")[1] + " " + last;
    };
};
bob.getFullName();

*/