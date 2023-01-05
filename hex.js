const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener('click', function() {
    let hexColor= "#";
    //the for loop will run 6 times because we need 6 random values from the hex array
    //to add to the hexColor variable.
    for (let i=0; i<6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}  