const axios = require('axios').default;
//GET METHOD
// axios.get('http://localhost:3000/Barksdale')
// .then(response => {
//     console.log(response.data)

// })

// axios.post('http://localhost:3000/Barksdale', {
//     "number": "8192798"
// })
// .then(response => {
//     console.log(response.data)

// })
// .catch(error => {
//     console.log(error)
// })

let encrypted = []
function skipFive(num){
    let toSkip = num.toString().split("")
    for(let i = 0; i < toSkip.length; i++){
        if (toSkip[i] === "5"){
            encrypted.push(0)
        } else if (toSkip[i] === "50"){
            encrypted.push(5)
        }
        switch(toSkip[i]){
            case '1':
                encrypted.push(9)
            break;
            case '2':
                encrypted.push(8)
            break;
            case '3':
                encrypted.push(7)
            break;
            case '4':
                encrypted.push(6)
            break;
            case '6':
                encrypted.push(4)
            break;
            case '7':
                encrypted.push(3)
            break;
            case '8':
                encrypted.push(2)
            break;  
            case '9':
                encrypted.push(1)
            break;          
        }
    }
    let encryptedNumber = encrypted.toString().replace(/,/g,'')

        axios.post('http://localhost:3000/Barksdale', {
        "number": encryptedNumber
    })
    .then(response => {
        console.log('API RESPONSE', response.data)

    })
    .catch(error => {
        console.log('API RESPONSE', error)
    })
}
skipFive(8192798)