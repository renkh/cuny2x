function PressButton1() {
  document.getElementById("p1").innerHTML = "I'm right";
}

function PressButton2() {
  document.getElementById("p2").innerHTML = "No, I'm right!";
}

function onHover() {
  document.getElementById("p3").addEventListener("mouseenter", function (event) {
    alert("I told you not to hover over me")
  }, false);
}

function Radius() {
  var x = document.getElementById("a");
  var cubed = x.value*x.value*x.value;
  var pi = cubed * 3.14;
  var formula =  pi * (4/3);
  let answer = formula.toString();
  alert(answer);
}
