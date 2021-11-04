//DEPENDENCIES
const express = require('express');
const server = express();
server.use(express.json());



server.get('/barksdale', (req,res) =>{
    console.log('welcome to the API')
    res.send('Welcome to the API')
})

server.post('/barksdale', (req,res) =>{
    let encryptedNumber = req.body
    console.log(encryptedNumber)
    res.send(encryptedNumber)
})

//DEFINE OUR PORT
// const PORT = process.env.PORT || 3000;  //will auto  match to 3000 if local
// server.listen(PORT, () => console.log(`Server is running on ${PORT}`))
server.listen(3000, () => console.log(`Server running on 4004`))