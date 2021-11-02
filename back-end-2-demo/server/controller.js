const movies = require('./db.json')  //pulling info from db.json
let globalId = 11

module.exports = {    ///everything we can pull out of this object and put somewhere else
    getMovies: (req,res) => res.status(200).send(movies),  //this is sending movies to index.js where server is running
    deleteMovie: (req,res) => {
        let index = movies.findIndex(elem => elem.id === +req.params.id)
        movies.splice(index,1)
        res.status(200).send(movies)
    },
    createMovie: (req,res) => {
        let {title, rating, imageURL} = req.body   //destructuring
        let newMovie = {
            id: globalId,
            title,
            rating,
            imageURL
        }
        movies.push(newMovie)
        res.status(200).send(movies)
        globalId++                               //incrementing globalId
    },
    updateMovie: (req,res) =>{                    //destructuring id and type below
        let {id} =req.params                 //params is like the /:id from index.js
        let {type} = req.body
        let index = movies.findIndex(elem => +elem.id === +id)

        if(movies[index].rating === 5 && type === 'plus'){
            res.status(400).send('cannot go above 5')
        } else if (movies[index].rating === 0 && type === 'minus'){
            res.status(400).send('cannot go below 0')
        } else if (type ==='plus'){
            movies[index].rating++
            res.status(200).send(movies)
        } else if (type === 'minus'){
            movies[index].rating--
            res.status(200).send(movies)
        } else {
            res.sendStatus(400)
        }
    }
}