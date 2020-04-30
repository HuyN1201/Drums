
var numberOfDrums = document.getElementsByClassName("drum").length;
//"sound" is a new object of class Audio with the parameter of where the sound is located at
//var sound = new Audio("sounds/tom-1.mp3");

function checkCharacter(character){
  switch (character) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(character);
  }
};

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){activeButton.classList.remove("pressed")}, 100);
}

for(var i = 0; i<numberOfDrums; i++){
  document.getElementsByClassName("drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    checkCharacter(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
};

document.addEventListener("keydown", function(event){
    checkCharacter(event.key);
    buttonAnimation(event.key);
});
