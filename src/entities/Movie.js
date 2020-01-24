import Score from "./Score";

/**
 * A class for representing a movie.
 */
export default class Movie {

    /**
     * Constructs a movie.
     * @param {String} title The title of the movie.
     * @param {String} synopsis The synopsis of the movie.
     * @param {String} imgSrc The source of the poster image to this movie.
     * @param {Score[]} scores The scores this movie has received.
     * @param {String[]} genres The genres of the movie.
     * @param {String} director The director of the movie.
     * @param {String[]} cast The cast members of the movie.
     * @param {String} year The year the movie was released.
     * @param {String} runtime The runtime of the movie.
     * @param {String} released The release date of the movie.
     * @param {String[]} languages The languages available for the movie.
     * @param {String} type The type of the movie (series, regular movie etc.);
     * @param {Number} id The id of the movie in the database.
     */
    constructor(title, synopsis, imgSrc, scores, genres, director, cast, year, runtime, released, languages, type, id) {
        this.title = title;
        this.synopsis = synopsis;
        this.logo = imgSrc;
        this.scores = scores;
        this.genres = genres;
        this.director = director;
        this.cast = cast;
        this.year = year;
        this.runtime = runtime;
        this.released = released;
        this.languages = languages;
        this.type = type;
        this.id = id;
        this.finalScore = getFinalScore(scores);
    }
}

/**
 * Gets the final score for a movie.
 * @param {Score[]} scores The scores of a movie.
 * @returns {Number} The final score.
 */
function getFinalScore(scores) {
    if (scores.length === 0)
        return NaN;

    let sum = 0;
    scores.forEach(score => sum += score.value);
    return (sum / scores.length).toFixed(1);
}