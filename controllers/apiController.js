var Movies = require('../models/Movie');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var bodyParser = require('body-parser');

module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    var scrape = function (movieId, res) {

        // url to scrape
        url = 'http://www.imdb.com/title/' + movieId + '/';

        console.log('scraping: ' + url + '...');
        request(url, function (error, response, html) {
            if (!error) {
                var $ = cheerio.load(html);

                var imdbId, title, cover, description, release, rating;
                var json = {imdbId: "", title: "", cover: "", description: "", release: "", rating: ""};

                $('.poster').filter(function () {
                    var data = $(this);
                    cover = data.children().first().children().first().attr('src');
                    json.cover = cover;
                })

                // <meta property="pageId" content="tt3470600"> <- content = imdb movie id
                var metaTags = [];
                $('meta').map(function (i, metaTag) {
                    var metaProperty = $(metaTag).attr('property');
                    if (metaProperty && metaProperty === 'pageId') {
                        var metaContent = $(metaTag).attr('content').trim();
                        if (metaContent) {
                            json.imdbId = metaContent;
                        }
                    }
                })

                $('.title_wrapper').filter(function () {
                    var data = $(this);
                    title = data.children().first().text().trim();
                    release = data.children().last().children().last().text().trim();

                    json.title = title;
                    json.release = release;
                })

                $('.ratingValue').filter(function () {
                    var data = $(this);
                    rating = data.text().trim();

                    json.rating = rating;
                })

                $('.summary_text').filter(function () {
                    var data = $(this);
                    description = data.text().trim();

                    json.description = description;
                })

            }

            if (json.imdbId) {
                fs.writeFile('data/' + json.imdbId + '.json', JSON.stringify(json, null, 4), function (err) {
                    console.log('File successfully written! - Check your project directory for data/' + json.imdbId + '.json');
                })
            }

            // make sure we at least have some values scrapped before saving
            if (json.title || json.cover || json.description || json.release || json.rating) {
                var newMovie = Movies({
                    imdbId: json.imdbId,
                    title: json.title,
                    cover: json.cover,
                    description: json.description,
                    release: json.release,
                    rating: json.rating
                });
                newMovie.save(function (err) {
                    if (err) throw err;
                    res.send(json);
                });
            } else { // nothing scraped
                // send response for not found
                res.send(400);
            }

        })

    }

    // Scrape movie
    app.get('/api/scrape/:id', function (req, res) {
        var movieId = req.params.id; // set the movie id from the api param
        // first check if already in db
        Movies.findOne({"imdbId": movieId}, function (err, movie) {
            if (err) throw err;
            if (!movie) { // if movie is not in db, then scrape it
                scrape(movieId, res);
            } else {
                res.send(movie);
            }
        });

    });

    // Get all movies
    app.get('/api/movies', function (req, res) {
        Movies.find(function (err, movies) {
            if (err) throw err;
            res.send(movies);
        });
    });

    // Get one movie with matching id
    app.get('/api/movie/:id', function (req, res) {
        var movieId = req.params.id; // set the movie id from the api param
        Movies.findOne({"imdbId": movieId}, function (err, movie) {
            if (err) throw err;
            res.send(movie);
        });
    });

    // Remove one movie with matching id
    app.delete('/api/movie/:id', function (req, res) {
        var movieId = req.params.id; // set the movie id from the api param
        Movies.findOneAndRemove({"imdbId": movieId}, function (err) {
            if (err) throw err;
            // Does not require a response body.
            // If successful, returns a 204 No Content response.
            res.sendStatus(204);
        })
    });

}
