function power() {
  document.getElementById("current").innerHTML = 0;
  document.getElementById("history").innerHTML = "";
}
function number(a) {
  var b = document.getElementsByClassName("number");
  var num = b[a].innerHTML;
  var i = document.getElementById("current").innerHTML;
  var j = document.getElementById("history").innerHTML;
  var f = i.charAt(0);
  if (i == "" || i == "0") {
    document.getElementById("current").innerHTML = num;
    num1 = num;
  } else if (f == "+" || f == "-" || f == "/" || f == "*") {
    var newNum = i + num;
    document.getElementById("current").innerHTML = newNum;
    op = f;
  } else {
    document.getElementById("current").innerHTML = i + num;
    num1 = i + num;
  }
  num2 = newNum.slice(1);
}
function point() {
  var current = document.getElementById("current").innerHTML;
  document.getElementById("current").innerHTML = current + ".";
}
function del() {
  var content = document.getElementById("current").innerHTML;
  var newContent = content.slice(0, -1);
  document.getElementById("current").innerHTML = newContent;
}
function reset() {
  document.getElementById("history").innerHTML = "";
  document.getElementById("current").innerHTML = 0;
}
function operator(c) {
  var d = document.getElementsByClassName("operator");
  var opp = d[c].innerHTML;
  var i = document.getElementById("current").innerHTML;
  document.getElementById("history").innerHTML = i;
  document.getElementById("current").innerHTML = opp;
}
function answer() {
  calculate(num1, num2, op);
}
function calculate(Num1, Num2, Op) {
  x = Number(Num1);
  y = Number(Num2);
  if (Op == "+") {
    result = x + y;
  } else if (Op == "-") {
    result = x - y;
  } else if (Op == "/") {
    result = x / y;
  } else {
    result = x * y;
  }
  document.getElementById("history").innerHTML = document.getElementById(
    "current"
  ).innerHTML;
  document.getElementById("current").innerHTML = result;
}
