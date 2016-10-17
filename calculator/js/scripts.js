var add = function(number1, number2) {
  return number1 + number2;
};
var sub = function(number1, number2) {
  return number1 - number2;
};
var multi = function(number1, number2) {
  return number1 * number2;
};
var divi = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

var result = multi(number1, number2);
alert(result);
