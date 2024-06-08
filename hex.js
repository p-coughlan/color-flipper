// variable 'hex' is an array of all the hex values, which are used to generate a random hex color code. Containing all the values from 0 to 9 and A to F (numbers and strings both are included in the array)
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
let hexColor = '#'; // # is the starting point of a hex color code

//for loop iterates through the hex array and generates a random hex color code
for (let i = 0; i < 6; i++) {
    hexColor = hexColor + hex[0];
}

color.textContent = hexColor;
document.body.style.backgroundColor =hexColor;
});
