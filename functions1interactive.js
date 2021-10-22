let jonSnowHealth = 100

// jonSnowHealth = jonSnowHealth.toString()  //need to reassign it to make it a string //dont need to say let again

// console.log(typeof jonSnowHealth)  //logs string

// console.log('Jon\'s health is ' + jonSnowHealth)

let theWinnerIs = 'Jamie is the winner.'

let newWinner = theWinnerIs.replace('Jamie', 'Jon')  //Replace Jamie with Jon

// console.log(newWinner)  //Jon is the Winner

let newWinnerLower = newWinner.toLocaleLowerCase()  //makes letters lowercase

let newWinnerSplit = newWinnerLower.split( ' ' )
// "jon is the winner."
//"["jon", "is", "the", "winner"]
//"jon-is-the-winner"
let newWinnerKebob = newWinnerSplit.join ('-')
// console.log(newWinnerSplit) //[ 'jon', 'is', 'the', 'winner.' ]
// console.log(newWinnerKebob) //jon-is-the-winner.

function isJonAlive(){       //reusable function to check if Jon is alive, functions to run until called
    if(jonSnowHealth > 0){
        console.log('Jon is alive')
    } else {
        console.log('RIP Jon Snow')
    }
}

// isJonAlive()   //functions to run until called(this line calls function)

function surpriseAttack(attack) {     //reusable function to change jons health
    jonSnowHealth -= attack
    console.log(`Jon's health is now ${jonSnowHealth}`)
    isJonAlive()                      //calls the reusable function isJonAlive() each time surpriseAttack() is called
}

surpriseAttack(12)
surpriseAttack(12)
surpriseAttack(12)

function greeting(person1, person2){
    console.log(`${person1} and ${person2} say hello to each other.`)
}

greeting('Jon Snow', 'Ned Stark')

function rollDice() {
    let possibleRoles = [1, 2, 3, 4, 5, 6]
    let randomNumber = Math.floor(Math.random() * possibleRoles.length)
    return 
}

let firstRoll = rollDice()
let secondRoll = rollDice()
console.log(firstRoll)

function diceMultiplier(){
    let firstRoll = rollDice()
    let secondRoll = rollDice()
    return firstRoll * secondRoll  
}

let multipliedNumber = diceMultiplier()

console.log(multipliedNumber)
