import {without} from 'lodash';
console.log(without);

// Variables Declarations
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randButton = document.getElementById("button");

// Sets the background colors matching the initial colors
setGradient();  

// Function to set the gradient colors
function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + "," 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
 }

//  Function to generate random colors
 function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// Function to set the random colors onto background
function setRandomColor() {
    color1.value= randomColor();
    color2.value= randomColor();
    setGradient();
}

// Listens to click events
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randButton.addEventListener("click", setRandomColor);

//Made by Flynn

