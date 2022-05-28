 let userName = prompt("What is your name?");
 console.log(userName);
 document.write("Hello " + userName );

 function ratePage(){
  let userNumber = prompt("How many stars would you rate my page? 1-5");
  for (let i = 1; i <= userNumber; i++){
    document.write("<img class='star-pic' src='star.jpg' />");;
  }
}

function myFunction() {
  confirm("Click OK if you're a fan of Italian pastas");
  
}

