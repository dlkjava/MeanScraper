var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var movieSchema = new Schema({
    imdbId: String,
    title: String,
    cover: String,
    description: String,
    release: String,
    rating: String
});

var Movies = mongoose.model('Movies', movieSchema);

module.exports = Movies;
