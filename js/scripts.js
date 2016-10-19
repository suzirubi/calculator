
// Business (or back-end) logic:

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

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $(".output-add").text(result);
  });
  $("form#sub").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = sub(number1, number2);
    $(".output-sub").text(result);
  });
  $("form#multi").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multi1").val());
    var number2 = parseInt($("#multi2").val());
    var result = multi(number1, number2);
    $(".output-multi").text(result);
  });
  $("form#divis").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divis1").val());
    var number2 = parseInt($("#divis2").val());
    var result = divi(number1, number2);
    $(".output-divis").text(result);
  });
});
