const tempSearchResults = [
    'Star Wars I',
    'Batman',
    'Lego Batman',
    'Indiana Jones',
    'Indian-Jones 2'
];

export function searchForMovie(query){
  return tempSearchResults.filter(searchResult => searchResult.toLowerCase().includes(query.toLowerCase()))
}

export function getMovieInfo(movieTitle) {
    const lowerCaseMovieTitle = movieTitle && movieTitle.toLowerCase() || movieTitle;
    switch (lowerCaseMovieTitle) {
        case 'batman':
            return {title: 'Batman', synopsis: 'Gotham City. Crime boss Carl Grissom (Jack Palance) effectively runs the town but there\'s a new crime fighter in town - Batman (Michael Keaton). Grissom\'s right-hand man is Jack Napier (Jack Nicholson), a brutal man who is not entirely sane... After falling out between the two Grissom has Napier set up with the Police and Napier falls to his apparent death in a vat of chemicals. However, he soon reappears as The Joker and starts a reign of terror in Gotham City. Meanwhile, reporter Vicki Vale (Kim Basinger) is in the city to do an article on Batman. She soon starts a relationship with Batman\'s everyday persona, billionaire Bruce Wayne.',
                ratings: [{source: 'Internet Movie Database', imgSrc: "images/imdb.png", value: 7.5}, {source: 'Rotten Tomatoes', value: 7.2, imgSrc: 'images/rotten_tomatoes.png'}, {source: 'Metacritic', value: 6.9, imgSrc: 'images/metacritic.png'}]
            };
        case 'indiana jones':
            return {title: 'Indiana Jones and the Last Crusade', synopsis: 'An art collector appeals to Jones to embark on a search for the Holy Grail. He learns that another archaeologist has disappeared while searching for the precious goblet, and the missing man is his own father, Dr. Henry Jones. The artifact is much harder to find than they expected, and its powers are too much for those impure in heart.',
                ratings: [{source: 'Internet Movie Database', value: 8.2}, {source: 'Rotten Tomatoes', value: 8.8}, {source: 'Metacritic', value: 6.5}]
            };
        default:
            return {title: 'Movie Title', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                ratings: [ {source: 'IMDB', value: 8.3}, {source: 'Rotten Tomatoes', value: 9.5}, {source: 'MetaCritic', value: 8.5}, {source: 'AnimeList', value: 3.5}]
            };
    }
}