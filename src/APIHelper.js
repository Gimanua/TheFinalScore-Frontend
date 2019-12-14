import Movie from './entities/Movie';
import Score from './entities/Score';

/**
 * The URL to the backend's API.
 */
const apiURL = 'http://localhost:8080/TheFinalScore-Backend/api';

/**
 * Search results to use if the backend is unreachable.
 */
const fakeSearchResults = [
    'Batman',
    'Indiana Jones',
    'Star Wars I',
    'Star Wars II',
    'Harry Potter'
];

/**
 * A fake movie to use if the backend is unreachable.
 */
const fakeMovie = new Movie('Movie Title',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'https://cdn2.vectorstock.com/i/1000x1000/40/96/3d-question-mark-vector-1504096.jpg',
    [new Score(8.3, 'images/imdb.png'), new Score(9.5, 'images/rotten_tomatoes.png'), new Score(3.5, 'images/metacritic.png')]
);

/**
 * A controller used to abort requests in transit right now.
 */
let controller = new AbortController();

/**
 * Requests a list of movies matching the supplied search query from the backend.
 * If a connection to the backend can't be established, a fake list gets returned instead.
 * Also aborts all other requests.
 * @param {String} query The movie to search for.
 * @returns {Array<String>} The titles of the movies matching the search query.
 * @throws {DOMException} Thrown when this request gets aborted by a newer request.
 */
export async function searchForMovie(query) {
    try {
        abortOtherRequests();
        const abortSignal = getAbortSignal();

        const response = await fetch(`${apiURL}/movie/search/${query}`, { signal: abortSignal });
        if (response.ok) {
            const json = await response.json();
            return json.results.map(result => result.title);
        }
        else {
            console.log(`Backend responded with: ${response.statusText}`);
            console.log(response);
        }
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new DOMException(`Search for movie: "${query}" was aborted because a newer search was issued.`, 'AbortError');
        }
        console.log('A connection to the backend could not be established, using fake data instead.');
    }

    return fakeSearchResults.filter(fakeSearchResult => fakeSearchResult.toLowerCase().includes(query.toLowerCase()));
}

/**
 * Requests a movie with a certain title from the backend.
 * If a connection to the backend can't be established, a fake Movie gets returned instead.
 * Also aborts all other requests.
 * @param {String} movieTitle The title of the movie to get.
 * @returns {Movie} The movie with matching title.
 * @throws {DOMException} Thrown when this request gets aborted by a newer request.
 */
export async function getMovie(movieTitle) {
    try {
        abortOtherRequests();
        const abortSignal = getAbortSignal();

        const response = await fetch(`${apiURL}/movie/info/${movieTitle}`, { signal: abortSignal });
        if (response.ok) {
            const json = await response.json();
            return new Movie(json.title, json.plot, 'imgSrc (APIHelper:82)', json.ratings.map(rating => new Score(rating.value, 'sourceLogo (APIHelper:82)')));
        }
        else {
            console.log(`Backend responded with: ${response.statusText}`);
            console.log(response);
        }
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new DOMException(`Request for movie: "${movieTitle}" was aborted because a newer request was issued.`, 'AbortError');
        }
        console.log('A connection to the backend could not be established, using fake data instead.');
    }

    return fakeMovie;
}

/**
 * Aborts all other requests in transit right now.
 */
function abortOtherRequests() {
    controller.abort();
}

/**
 * Gets a signal which can later be used by other requests to abort this one.
 * @returns {AbortSignal} The signal used to abort this request.
 */
function getAbortSignal(){
    controller = new AbortController();
    return controller.signal;
}