let userName = "";

function yourName() {
 
      userName = prompt('What is your name?');
      console.log(userName);
  return document.write("Hello " + userName);
}

 function ratePage(){
  let userNumber = prompt("How many stars would you rate my page? 1-5");
  for (let i = 1; i <= userNumber; i++){
    document.write("<img class='star-pic' src='star.jpg' />");
  }
}

function getPasta() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
    alert("I see you like");
}

function myFan() {
  let fanText;
  if (confirm("Click OK for more pastas") == true) {
    fanText = "Congratulations " + userName + ", you are ONE OF US!";
  }
  else {
    fanText = "Its ok, nobody is perfect";
  }
  document.getElementById("pastaFanText").innerHTML = fanText;
}

