import Movie from './entities/Movie';
import Score from './entities/Score';

const tempSearchResults = [
    'Batman',
    'Indiana Jones',
];

export function searchForMovie(query){
  return tempSearchResults.filter(searchResult => searchResult.toLowerCase().includes(query.toLowerCase()))
}

export function getMovieInfo(movieTitle) {
    const lowerCaseMovieTitle = movieTitle && movieTitle.toLowerCase() || movieTitle;
    switch (lowerCaseMovieTitle) {
        case 'batman':
            return new Movie('Batman', 
            'Gotham City. Crime boss Carl Grissom (Jack Palance) effectively runs the town but there\'s a new crime fighter in town - Batman (Michael Keaton). Grissom\'s right-hand man is Jack Napier (Jack Nicholson), a brutal man who is not entirely sane... After falling out between the two Grissom has Napier set up with the Police and Napier falls to his apparent death in a vat of chemicals. However, he soon reappears as The Joker and starts a reign of terror in Gotham City. Meanwhile, reporter Vicki Vale (Kim Basinger) is in the city to do an article on Batman. She soon starts a relationship with Batman\'s everyday persona, billionaire Bruce Wayne.',
            'https://images-na.ssl-images-amazon.com/images/I/71MDec7Y0zL._SY445_.jpg', 
            [new Score(7.5, 'Internet Movie Database', 'images/imdb.png'), new Score(7.2, 'Rotten Tomatoes', 'images/rotten_tomatoes.png'), new Score(6.9, 'Metacritic', 'images/metacritic.png')]
            );
        case 'indiana jones':
            return new Movie('Indiana Jones and the Last Crusade',
            'An art collector appeals to Jones to embark on a search for the Holy Grail. He learns that another archaeologist has disappeared while searching for the precious goblet, and the missing man is his own father, Dr. Henry Jones. The artifact is much harder to find than they expected, and its powers are too much for those impure in heart.',
            'https://ih0.redbubble.net/image.524468773.1528/poster,840x830,f8f8f8-pad,750x1000,f8f8f8.u1.jpg',
            [new Score(8.2, 'Internet Movie Database', 'images/imdb.png'), new Score(8.8, 'Rotten Tomatoes', 'images/rotten_tomatoes.png'), new Score(6.5, 'Metacritic', 'images/metacritic.png')]
            );
        default:
            return new Movie('Movie Title', 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'https://cdn2.vectorstock.com/i/1000x1000/40/96/3d-question-mark-vector-1504096.jpg',
            [new Score(8.3, 'IMDB', 'images/imdb.png'), new Score(9.5, 'Rotten Tomatoes', 'images/rotten_tomatoes.png'), new Score(3.5, 'Metacritic', 'images/metacritic.png')]
            );
    }
}