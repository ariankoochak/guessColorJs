const mainColor = document.querySelector('#main-color')
const colors = document.querySelectorAll('.color')
const container = document.querySelector('.container')

let colorCodeArr = []

function getRandomNumber() {
    return Math.floor(Math.random() * 255);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
for(const color of colors){
    const template = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    colorCodeArr.push(template);
    color.style.backgroundColor = template;
    color.addEventListener('click',function(){
        if(color.style.backgroundColor == mainColor.textContent){
            container.style.backgroundColor = color.style.backgroundColor;
        }
        else{
            color.style.visibility = 'hidden';
        }
    })
}

mainColor.textContent = colorCodeArr[Math.floor(Math.random() * colorCodeArr.length)];



