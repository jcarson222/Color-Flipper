//The colors we'll use to cycle through on this page
const colors = ["green", "red", "yellow", "dodgerblue", "rgba(133,122,200)", "#f15025"];
//btn adopts the "btn" id,, color adopts the ".color" class
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
//add an eventListener to btn on click
btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}