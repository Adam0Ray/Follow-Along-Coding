console.log('hello world')

const counterText = document.querySelector('#counter')

const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')
const plusBtn = document.querySelector('#plus-btn')

let count = 0;

function increase() {
    count++
    counterText.textContent = count
    // console.log(count)
}

function decrease() {
    count--
    counterText.textContent = count
    // console.log(count)
}

function reset() {
    count = 0
    counterText.textContent = count
    // console.log(count)
}


minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)
plusBtn.addEventListener('click', increase)




//variable to represent all buttons (array of buttons)
let themeBtns = document.querySelectorAll('.theme-buttons');
console.log(themeBtns)

//CALLBACK for loop below (action we want to happen upon event)

let selectTheme = (event) =>{
    const theme = event.target.textContent
    
    //document find body, assign theme example: facebook if we click fb
    document.querySelector("body").className = theme;
    document.querySelector("main").className = theme;

    let buttons = document.querySelectorAll('button'); //array of all buttons in DOM
//multiple buttons so have to loop through)
    for (let i = 0; i < buttons.length; i++){
        buttons[i].className = theme;
    }
};

//loop through, add event lister, for (click, callback function)
//assigns event listeners to all buttons
//event listener always passes in the event (example click)
//(adds eventlistener to all)
for (let i = 0; i < themeBtns.length; i++){
    themeBtns[i].addEventListener('click', selectTheme);
}