function yourName() {
  let name;
      name = prompt('What is your name?');
      console.log(name);
  return document.write("Hello" + name);
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
    alert("I see you like" + "demo");
}

function myFan() {
  let x = confirm("Click OK if you're a fan of Italian pastas");
  if (x = 'true') {
    message = 'Congratulation You are ONE OF US!';
  }
  else {
    message = 'Nobodys perfect';
  }
}

