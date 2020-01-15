import Movie from './entities/Movie';
import Score from './entities/Score';

/**
 * The URL to the backend's API.
 */
const apiURL = 'http://localhost:8080/TheFinalScore-Backend/api';

/**
 * The client ID used by Github OAuth.
 */
export const githubClientID = '686a9cd2fe0be4052344';

/**
 * Search results to use if the backend is unreachable.
 */
const fakeSearchResults = [
    'Batman',
    'Indiana Jones',
    'Star Wars I',
    'Star Wars II',
    'Harry Potter',
    'Star Wars III',
    'Star Wars IV',
    'Star Wars V',
    'Star Wars VI',
    'Star Wars VII',
    'Star Wars VIII',
    'Star Wars IX',
    'Star Wars X',
    'Star Wars och de sju rövarna',
    'Star Wars XII',
    'Star Wars XIII',
    'Star Wars XIV',
    'Star Wars XV',
    'Star Wars XVI',
    'Star Wars XVII',
    'Star Wars XVIII',
];

/**
 * A fake movie to use if the backend is unreachable.
 */
const fakeMovie = new Movie('Year Zero',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'images/fake_poster.jpg',
    [new Score('8.3/10', 'Internet Movie Database'), new Score('95%', 'Rotten Tomatoes'), new Score('35/100', 'Metacritic')],
    ['Thriller', 'Science Fiction'],
    'Vladimir Putin',
    ['Boris Spasskij', 'Chuck Norris', 'He-Man'],
    '2009',
    '127 min',
    '13 dec 2009',
    ['Ruski', 'Blyat', 'Portuguese'],
    'Movie'
);

/**
 * A controller used to abort requests in transit right now.
 */
let controller = new AbortController();

/**
 * @typedef {Object} MovieSearch A search result.
 * @property {String} title The title of the movie.
 * @property {String} year The year the movie was released.
 */

 /**
 * Requests a list of movies matching the supplied search query from the backend.
 * If a connection to the backend can't be established, a fake list gets returned instead.
 * Also aborts all other requests.
 * @param {String} query The movie to search for.
 * @returns {MovieSearch[]} The titles of the movies matching the search query.
 * @throws {DOMException} Thrown when this request gets aborted by a newer request.
 */
export async function searchForMovie(query) {
    try {
        abortOtherRequests();
        const abortSignal = getAbortSignal();

        const response = await fetch(`${apiURL}/movie/search/${query}`, { signal: abortSignal });
        if (response.ok) {
            const json = await response.json();
            return json.results.map(result => ({title: result.title, year: result.release_date.substring(0,4)}));
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
            return new Movie(json.title, json.plot, json.poster, json.ratings.map(rating => new Score(rating.value, rating.source)), json.genres, json.director, json.cast,
            json.year, json.runtime, json.released, json.languages, json.type);
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
 * Checks the OAuth status. Sends an alert on logged in.
 */
export async function OAuthCheck(){
    const urlParams = new URLSearchParams(window.location.search);

    if(localStorage.getItem('token')){
        sendToken(localStorage.getItem('token'));
    }
    else if(urlParams.has('code')){
        const url = `${apiURL}/token?code=${urlParams.get('code')}`;
    
        try {
            const response = await fetch(url);
            if(response.status !== 200)
                return;
            const token = await response.text();
            localStorage.setItem('token', token);
            sendToken(localStorage.getItem('token'));
        } catch (error) {
            console.log('Could not get token from backend.');
            console.log(error);
        }
    }
    
    async function sendToken(token){
        const url = `${apiURL}/login?token=${token}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            alert(`Welcome ${data.login}, your id is ${data.id}`);
        } catch (error) {
            console.log('Could not send token to backend.');
            console.log(error);
        }
    }
}

export async function verify(){
    let tokval = localStorage.getItem('token');
    const url = `${apiURL}/verify`;
    console.log(tokval);
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        
    }catch (error){
        console.log("Failed to verify token: " + error);
    }
}

/**
 * Loads all movies from localstorage, should use a database.
 * @returns {Movie[]} The movies saved.
 */
export function loadSavedMovies(){
    if(!localStorage.getItem('movies')){
        return [];
    }
    return JSON.parse(localStorage.getItem('movies'));
}

/**
 * Saves a movie to localstorage, should use a database.
 * @param {Movie} movie The movie to save.
 */
export async function saveMovie(movie){
    if(!localStorage.getItem('movies')){
        localStorage.setItem('movies', JSON.stringify([movie]));
    }
    else{
        const movies = JSON.parse(localStorage.getItem('movies'));
        movies.push(movie);
        localStorage.setItem('movies', JSON.stringify(movies));
    }
    alert('Saved Movie successfully');
}

/**
 * Deletes a movie from localstorage, should use a database.
 * @param {Number} index The index of the movie to remove.
 */
export async function deleteMovie(index){
    if(localStorage.getItem('movies')){
        const movies = JSON.parse(localStorage.getItem('movies'));
        movies.splice(index, 1);
        localStorage.setItem('movies', JSON.stringify(movies));
    }
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