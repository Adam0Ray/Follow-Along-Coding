const express = require('express') 
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {                 //destructuring line
    getMovies,
    deleteMovie,
    createMovie,
    updateMovie
} = require('./controller.js')

app.get(`/api/movies`, getMovies)
app.delete(`/api/movies/:id`, deleteMovie)      //have a param :id
app.post(`/api/movies`, createMovie)
app.put(`/api/movies/:id`, updateMovie)         //have a param :id

app.listen(4004, () => console.log(`Server running on 4004`))