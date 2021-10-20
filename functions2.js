// const add = (num1, num2) => num1 + num2;

// const subtract = (num1, num2) => num1 - num2;

// const multiple = (num1, num2) => num1 * num2;

// const divide = (num1, num2) => num1 / num2;

// const calculator = (num1, num2, callback) => {
//     if (+num1 && +num2){             //+num1 converts string to number
//         num1 = +num1                  //can num1 be turned into a number
//         num2 = +num2
//         return callback(num1, num2)
//     } else {
//         console.log("you need to send in numbers as the parameters")
//     }
// }

// const result = calculator(1,2,add)

// console.log(result)

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

const applyPercentDiscount = (product, discount) => {
    product.displayPrice = product.basePrice * (1- discount)
}

const applyFlatRateDiscount = (product, discount) => {
    product.displayPrice = product.basePrice - discount
}
  //(have dog products or cat products, use applyPercentDiscount or applyFlatRateDiscount, pass in discount)
// const applyDiscounts = (arr, callback, discount) => {
//     arr.forEach(product => {
//         callback(product, discount)
//     })
// }

// applyDiscounts(dogProducts, applyPercentDiscount, .25)

// console.log(dogProducts)

// const applyDiscountsByCategory = (arr, category, callback, discount) => {
//     arr.forEach((product) =>{
//         if (product.category === category){
//             callback(product, discount)
//         } else { console.log(`${product.name} is not in the discounted category`)}
//     })
// }
// applyDiscountsByCategory(catProducts, 1, applyFlatRateDiscount, 1.00)








function makeSandwich(bread){
    return function(ingredients){
    let order = `You ordered a ${bread} bread sandwich with `

    for (let i = 0; i < ingredients.length; i++){
        if (i === ingredients.length -1 && i !== 0){   //and not the first && !== 0
            order += `and ${ingredients[i]}.`
        } else if (ingredients.length === 1) {
            order += `${ingredients[i]}.`               //logic for only 1 ingredient
        } else {
            order += `${ingredients[i]}, `
        }
    }
    return order
}
}

const makeWheatSandwich = makeSandwich('wheat');

const results = makeWheatSandwich(['pickles', 'cheese', 'ham', 'lettuce'])
console.log(results)

const results2 = makeWheatSandwich(['turkey', 'mustard'])
console.log(results2)