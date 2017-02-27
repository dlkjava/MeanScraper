var Movies = require('../models/Movie');

module.exports = function (app) {

    app.get('/api/setupMovies', function (req, res) {

        // seed database
        var starterMovies = [
            {
                "imdbId": "tt0059968",
                "title": "Batman",
                "cover": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNDY5NTg5MF5BMl5BanBnXkFtZTgwNzI4NzM1MjE@._V1_UY268_CR13,0,182,268_AL_.jpg",
                "description": "The Caped Crusader battles evildoers in Gotham City in a bombastic 1960s parody of the comic book hero's exploits.",
                "release": "TV Series (1966–1968)",
                "rating": "7.5/10"
            },
            {
                "imdbId": "tt0096895",
                "title": "Batman (1989)",
                "cover": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_UX182_CR0,0,182,268_AL_.jpg",
                "description": "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.",
                "release": "23 June 1989 (USA)",
                "rating": "7.6/10"
            },
            {
                "imdbId": "tt0103359",
                "title": "Batman: The Animated Series",
                "cover": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3MjcwNzY3NF5BMl5BanBnXkFtZTYwNzA2MTI5._V1_UX182_CR0,0,182,268_AL_.jpg",
                "description": "The Dark Knight battles crime in Gotham City with occasional help from Robin and Batgirl.",
                "release": "TV Series (1992–1995)",
                "rating": "9.0/10"
            },
            {
                "imdbId": "tt0118688",
                "title": "Batman & Robin (1997)",
                "cover": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
                "description": "Batman and Robin try to keep their relationship together even as they must stop Mr. Freeze and Poison Ivy from freezing Gotham City.",
                "release": "20 June 1997 (USA)",
                "rating": "3.7/10"
            },
            {
                "imdbId": "tt0372784",
                "title": "Batman Begins (2005)",
                "cover": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_UX182_CR0,0,182,268_AL_.jpg",
                "description": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                "release": "15 June 2005 (USA)",
                "rating": "8.3/10"
            },
            {
                "imdbId": "tt0468569",
                "title": "The Dark Knight (2008)",
                "cover": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
                "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                "release": "18 July 2008 (USA)",
                "rating": "9.0/10"
            },
            {
                "imdbId": "tt1345836",
                "title": "The Dark Knight Rises (2012)",
                "cover": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
                "description": "Eight years after the Joker's reign of anarchy, the Dark Knight, with the help of the enigmatic Selina, is forced from his imposed exile to save Gotham City, now on the edge of total annihilation, from the brutal guerrilla terrorist Bane.",
                "release": "20 July 2012 (USA)",
                "rating": "8.5/10"
            },
            {
                "imdbId": "tt2975590",
                "title": "Batman v Superman: Dawn of Justice (2016)",
                "cover": "https://images-na.ssl-images-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
                "description": "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.",
                "release": "25 March 2016 (USA)",
                "rating": "6.7/10"
            },
            {
                "imdbId": "tt4116284",
                "title": "The LEGO Batman Movie (2017)",
                "cover": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
                "description": "Bruce Wayne must not only deal with the criminals of Gotham City, but also the responsibility of raising a boy he adopted.",
                "release": "10 February 2017 (USA)",
                "rating": "7.7/10"
            }
        ];
        Movies.create(starterMovies, function (err, results) {
            res.send(results);
        });
    });

}
