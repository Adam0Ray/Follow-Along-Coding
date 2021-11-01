const express = require('express') ; //imports express into file to use
const app = express();               //invokes express
const cors = require('cors');       //imports cors middleware
app.use(express.json());           //allows accepting JSON
app.use(cors());

const inventory = ['greeting card', 'wagon','computer','table','chair','milk','sailboat','conditioner','rusty nail','desk']

app.get('/api/inventory',(req, res) => {
    if(req.query.item){
        const filteredItems = inventory.filter(invItem => invItem.toLowerCase().includes(req.query.item.toLowerCase()))
        
        res.status(200).send(filteredItems)
    } else{
        res.status(200).send(inventory)
    }
});

app.get('/api/inventory/:index', (req,res) =>{
    res.status(200).send(inventory[+req.params.index])  //+ is number version
});






//BOTTOM OF FILE STANDARD
const SERVER_PORT = 5050   //assigning port to variable
app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));
//BOTTOM OF FILE STANDARD


//npm install express cors  //in terminal

//Express is a minimal, flexible Node.js framework that is great for building servers.
//CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

//couln't run nodemon server until performing actions below-should be a one time fix
// Open Windows PowerShell with Run as Administrator
// Run this command: Set-ExecutionPolicy Unrestricted