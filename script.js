const divArray = [];
const container = document.getElementById("container");

//create 16 divs
for(let i=0; i<(16**2); i++){
    divArray.push(document.createElement("div"));
    divArray[i].textContent = i+1;
    container.appendChild(divArray[i]);
}


