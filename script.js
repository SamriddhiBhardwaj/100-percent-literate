// /* .js files add interaction to your website */

// GET SECRET MESSAGE
var messageButton = document.getElementById("getMessage");
var messageText = document.getElementById("secret");

if (messageButton){
messageButton.addEventListener("click",displayMessage);
}
function displayMessage() {
  var inputName = document.getElementById("inputField").value;
  if (inputName != ""){
  messageText.innerHTML = "I am proud of you, " + inputName + ".\nJust you reading the website till here shows me that you want to bring good to the world and I belive that you have the power to do that. Use the resources at hand to do the best you can in your own community or locality. If all of us join hands and work together, one day we'll achieve 100% literacy :)"
    }
  else{
    messageText.innerHTML = "Enter your name to see the message  ｡◕‿‿◕｡"
  }
}

// GET FACT

var factsArray = ["2/3 of students who cannot read proficiently by the end of 4th grade end up in jail or on welfare.","Over 70% of America’s inmates cannot read above a 4th grade level.","53% of 4th graders admitted to reading recreationally “almost every day,” while only 20% of 8th graders could say the same.","75% of Americans who receive food stamps perform at the lowest 2 levels of literacy, and 90% of high school dropouts are on welfare.","In 2013, Washington, D.C. was ranked the most literate American city for the third year in a row, with Seattle and Minneapolis close behind.","As of 2011, America was the only free-market country where the current generation was less educated than the previous one.","More than 60% of all inmates in America are functionally illiterate.","Teenage girls between the ages of 16 to 19 who live at or below the poverty line and have below average literacy skills are 6 times more likely to have children out of wedlock than girls their age who can read proficiently."]
var index = 0;
var factMessageArea = document.getElementById("factArea");
var factButton = document.getElementById("factsButton");

if (factButton){
factButton.addEventListener("click",displayFact);
}
function displayFact(){
  factMessageArea.innerHTML = factsArray[index];
  index++;
  if (index==factsArray.length){
    index=0;
  }
}
