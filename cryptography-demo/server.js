const express = require('express') ; //imports express into file to use
const app = express();               //invokes express
const cors = require('cors');       //imports cors middleware
app.use(express.json());           //allows accepting JSON
app.use(cors());


const {
    encodeNumbers,
    getNumbers,
    
} = require ('./controller')

app.post('/Barksdale', (req,res))




const SERVER_PORT = 3000   //assigning port to variable
app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));