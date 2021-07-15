const mongoose = require('mongoose');
require('../db/connection');


const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    actor: {
        type: String
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = {
    Movie
}