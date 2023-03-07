const mongoose = require("mongoose")

const dataMoviesSceama = new mongoose.Schema({
    nameFilm: { type: String, require: true },
    imageFilm: { type: String, require: true },
    releaseYear: { type: Number, require: true },
    genre: { type: String, require: true },
    rating: { type: Number, require: true },
})
module.exports = mongoose.model("dataMovives", dataMoviesSceama)