const divArray = [];
const container = document.getElementById("container");

//get button
const sizingButton = document.getElementById("btn");

//create 16 divs
function createDiv(numberPerSize){
    //width and height of square
    let sizeOfSquare = 1600 / numberPerSize;
    console.log(sizeOfSquare);
    for(let i=0; i<(numberPerSize**2); i++){
        divArray.push(document.createElement("div"));
        divArray[i].textContent = i+1;
        divArray[i].classList.add("square");
        divArray[i].style.cssText = `width: ${sizeOfSquare}px; height:${sizeOfSquare}px;`;
        divArray[i].addEventListener("mouseenter", () => divArray[i].classList.add("changeColor"));
        container.appendChild(divArray[i]);
    }
}
createDiv(16);

function removeChild(){
    for(let i=0; i<(divArray.length); i++){
        container.removeChild(divArray[i]);
    }
    divArray.length = 0;
}



//create action for button
function resizeDiv(){
    let divPerSize = prompt("Please enter a number of squares for each size (max. 100)");
    let inputNumber = parseInt(divPerSize);
    if(Number.isNaN(inputNumber)|| inputNumber > 100 ) {
        alert("your input is not a number or bigger than 100");
    }
    else{
        removeChild();
        createDiv(inputNumber);
    }
}
sizingButton.addEventListener("click",resizeDiv);

