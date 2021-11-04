// const number = require('./db.json')  //pulling info from db.json
// let globalId = 1

// module.exports = {    ///everything we can pull out of this object and put somewhere else
//     encodeNumber: (req,res) => {
//         // getNumbers:(req,res) => res.status(200).send(number)
//         let {num} = req.params   //destructuring
//         let newNumber = {
//             id: globalId,
//             num,

//         }
//         number.push(newNumber)
//         res.status(200).send(number)
//         globalId++                               //incrementing globalId
//     },
// }

const encode = (resNumber) =>{
    let solution = ""
    for(let i = 0 ; i < resNumber.length; i++) {   
        if (resNumber[i] === "1"){
            solution +="9"
        } else if (resNumber[i] === "2"){
            solution +="8"
        } else if (resNumber[i] === "3"){
            solution +="7"
        } else if (resNumber[i] === "4"){
            solution +="6"
        } else if (resNumber[i] === "6"){
            solution +="4"
        } else if (resNumber[i] === "7"){
            solution +="3"
        } else if (resNumber[i] === "8"){
            solution +="2"
        } else if (resNumber[i] === "9"){
            solution +="1"
        } else if (resNumber[i] === "5"){
            solution +="0"
        } else if (resNumber[i] === "0"){
            solution +="5"
        }
        
    }
    return solution

}
console.log(encode("1234"))