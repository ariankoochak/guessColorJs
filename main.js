const mainColor = document.querySelector("#main-color");
const colors = document.querySelectorAll(".color");
const container = document.querySelector(".container");
const newGameBtn = document.querySelector("button");
let colorCodeArr = [];
let endGameFlag = false;

function getRandomNumber() {
    return Math.floor(Math.random() * 255);
}

newGameBtn.addEventListener("click", function () {
    colorCodeArr = [];
    newGameBtn.style.display = "none";
    container.style.backgroundColor = "black";
    endGameFlag = false;
    prepareGame();
});

function prepareGame() {
    for (const color of colors) {
        color.style.visibility = "visible";
        const template = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
        colorCodeArr.push(template);
        color.style.backgroundColor = template;
        color.addEventListener("click", function () {
            if (endGameFlag == false) {
                if (color.style.backgroundColor == mainColor.textContent) {
                    container.style.backgroundColor = color.style.backgroundColor;
                    endGameFlag = true
                    newGameBtn.style.display = "inline-block";
                } else {
                    color.style.visibility = "hidden";
                }
            }
        });
    }
    mainColor.textContent =
        colorCodeArr[Math.floor(Math.random() * colorCodeArr.length)];
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

prepareGame();
