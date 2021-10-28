// const axios = require('axios').default;   //default uses default package

// const { default: axios } = require("axios")

// axios.get('https://gorest.co.in/public/v1/users/5947')  //put /4962 after users returns just the one, if ommited, returns all
// //resolve the promise                                                      //put /37129837189371298 returns error from catch
// //then do something with it
// .then(response => {
//     console.log('Response', response.data.data.name)   //'Response' just gives you the text in console to let you know,
// })                                           //response.data actually gives you the info
// //this returns users in console

// .catch(error => {
//     console.log('Error', error)
// })

// GET   retrieves the data from database
const axios = require('axios').default;   //default uses default package

axios.get('https://marcusbassportfolioserver.herokuapp.com/customers') 
.then(response => {
    console.log('Response', response)   
})                                   

.catch(error => {
    console.log('Error', error)
})

//POST     edits/puts information in the database
// axios.post('https://marcusbassportfolioserver.herokuapp.com/customers', {
//       'email': 'knockknock@icloud.com',
//       'first_name': 'Who is there?',
//       'last_name': 'Boo',
//       'ip': 'Boo Who?',
//       'latitude': 100100200,
//       'longitude': 200200300,
//       'created_at': '03/15/2019',
//       'updated_at': '03/15/2019'
// }) 
// .then(response => {
//     console.log('Response',response)
// })
// .catch(error => {
//     console.log('Error', error)
// })

//PUT
// axios.put('https://marcusbassportfolioserver.herokuapp.com/customers/1', {
//       'email': 'Bass.Marcus@icloud.com',
//       'first_name': 'Marcus',
//       'last_name': 'Bass',
//       'ip': '101.202.303',
//       'latitude': 100100200,
//       'longitude': 200200300,
//       'created_at': '03/15/2019',
//       'updated_at': '03/15/2019'
// }) 
// .then(response => {
//     console.log('Response',response)
// })
// .catch(error => {
//     console.log('Error', error)
// })

//DELETE
// axios.delete('https://marcusbassportfolioserver.herokuapp.com/customers/1')
// .then(response => {
//     console.log('Response', response.data)
// })
// .catch(error => {
//     console.log('Error',error)
// })