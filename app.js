let userName = "";
let fanText = "";

function yourName() {
      userName = prompt('What is your name?');
      console.log(userName);
  return document.write("Hello " + userName);
}

 function ratePage(){
  let userRating = prompt("How many stars would you rate my page? Only 1-5");
  let message = "";
 
  if (userRating == 5) {
    message = "WOW 5 star?!, Thank you " + userName + " you are AWESOME! Not going to stop improving though.";
    alert(message);
  }
  else if (userRating == 4) {
    message = "GREAT! 4 stars for a beginner? Thank you " + userName + "; there is still more to learn.";
    alert(message);
  }
  else if (userRating == 3) {
    message = "AWESOME! 3 stars mean I'm doing something right but still a lot opportunities to grow.";
    alert(message);
  }  
  else if (userRating == 2) {
    message = "Only 2 stars? PERFECT! It means there are more exciting things to learn.";
    alert(message);
  }  
  else if (userRating == 1) {
    message = "Excellent! Everything is looking up from here forward. Just need a little help, different strategy, and determination. Thank you.";
    alert (message);
  }   
  else {
    message = "Not a valid entry";
    alert(message);
  }

  for (let rating = 1; rating <= userRating; rating++) {
  document.write("<img class='star-pic' src='star.jpg' />");
  }
}

function getPasta() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
    alert("I see you like" + x);
}

function myFan() {
  if (confirm("Click OK for more pastas") == true) {
    fanText = "Congratulations " + userName + ", you are ONE OF US!";
    alert(fanText);
  }
  else {
    fanText = "Its ok, nobody is perfect";
    alert(fanText);
    myFan();
  }
  document.getElementById("pastaFanText").innerHTML = fanText;
}
