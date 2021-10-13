let jonSnowAttack = 25
let jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack){
    console.log ("Jon Snow has a better attack than Jamie Lannister.")
} else if (jonSnowAttack === jamieLannisterAttack){
    console.log("Jon Snow and Jamie Lannister have the same attack.")
} else {
    console.log ("Jamie Lannister has a better attack than Jon Snow.")
}

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack){
    console.log("Jon Snow has been slain.")
} else{
    //jonSnowHealth -= jamieLannisterAttack
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

jonSnowDefense += 25

if(jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
    console.log("Jon Snow has been slain.")
}else{
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

if((jonSnowHealth + 50) >= 100) {
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}

let coinLandsHeads = false

// if (coinLandsHeads === true){
//     console.log("The fight continues")
// } else {
//     console.log("Jon is allowed to run away.")
// }

if (coinLandsHeads !== false) {
    console.log("The fight continues!")
} else {
    console.log("Jon is allowed to run away")
}