let person = {
    firstName: "Chandler",
    lastName: "Bong",
    age: 34
    }

// console.log(person.firstName)  //dot notation

// console.log(person['firstName'])  //bracket notation

let meal = {
    appetizer: "chips & salsa",
    entree: "al pastor burrito",
    dessert: "churros",
    drink: "dr. pepper",
}

const {dessert} = meal  //destructuring

// console.log(dessert)  //if didn't deconstruct console.log(meal.dessert)

const{appetizer, entree} = meal  //destructuring multiple

// console.log(appetizer, entree)
// console.log(entree)

const {drink: bestSodaEver} = meal  //renames key within object
// const bestSodaEver = meal.drink //exact same as line before

// console.log(bestSodaEver)

// const myAppetizer = meal.appetizer  //using dot notation
// const myEntree = meal.entree
// const myDessert = meal.dessert
// const myDrink = meal.drink

const{appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink:myDrink} = meal  //does the same as lines 32-35 above by using destructuring

// console.log(bestSodaEver)
// console.log(myDrink)

// for (let key in person) {
//     console.log(key)  //prints keys in person object
// }

// for (let key in person){
//     console.log(person[key])  //prints values in keys in person object, also will not work with dot notation,must use bracket aka subscripting
// }

// for (key in person){
//     console.log(key + "-" + person[key])    //this combines the last two for loops
// }


person.job = "Statistical Analysis and Data Reconfiguration" //adds jobs into object

person['pets'] = ['Chicken','Duck']

// for (let key in person) {
//     console.log(key)  //prints keys in person object
// }

let teams = {
    teamOne: ['ryan', 'alex'],
    teamTwo: ['henry', 'cole', 'charlie'],
    teamThree: ['porter', 'blake', ],
    teamFour: ['monique', 'mariko'],
    teamFive: ['shania', 'deepta']
}

delete teams.teamTwo

// for(let team in teams){
//     console.log(team)
// }

class Dog {
    constructor(name, breed, age) {
        this.name = name
        this.breed = breed
        this.age = age
    }

    greeting(){
        console.log(`Hi, my name is ${this.name} and I am an ${this.age} year old ${this.breed}`)
    }
}

let lassie = new Dog('Lassie', 'Collie', 18)
// console.log(lassie.name)

let beethoven = new Dog('Beethoven', 'St. Bernard', 12)
// console.log(beethoven.breed)

// lassie.greeting()
// beethoven.greeting()
//logs Hi, my name is Lassie and I am an 18 year old Collie
//Hi, my name is Beethoven and I am an 12 year old St. Bernard    

for( key in lassie) {
    console.log(lassie[key])
}