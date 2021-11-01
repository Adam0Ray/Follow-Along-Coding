//Variables are assigning the IDs below 
let count = 0

let addButton = document.querySelector("#add");

let subtractButton = document.querySelector("#subtract");

let resetButton = document.querySelector("#reset");

let headerText = document.querySelector("#header-text");



//FUNCTIONS
let increaseCount = () =>{
   count = count + 1;
   headerText.textContent = count;
//    console.log(count);
};

let decreaseCount = () =>{
    count -= 1
    headerText.textContent = count;
    // console.log(count);
};

let resetCount = () =>{
    count = 0
    headerText.textContent = count;
    // console.log(count);
};



//LOGIC connects browser to js
console.log(addButton);

addButton.addEventListener("click",increaseCount);

subtractButton.addEventListener("click",decreaseCount);

resetButton.addEventListener("click",resetCount);