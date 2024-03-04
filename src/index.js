const express = require("express")
const mongoose = require('mongoose')

const app = express()
const port = 3000
mongoose.connect('mongodb+srv://Thunder1932:6ABZ8DTvIqpp7QNs@starwars-api.cblz8gj.mongodb.net/?retryWrites=true&w=majority&appName=Starwars-API')


const Movie = mongoose.model('Movie', {
     title: String,
     description: String,
     image_url: String,
     trailer_url: String,
    });

app.get('/', (req, res)=> {
    res.send("Hello Word")
})

app.post("/", async (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url,

    })

    await movie.save()
    res.send(movie)
})
app.listen(port, () =>{
    console.log('App running')
})