import Score from "./Score";

/**
 * A class for representing a movie.
 */
export default class Movie{

    /**
     * Constructs a movie.
     * @param {String} title The title of the movie.
     * @param {String} synopsis The synopsis of the movie.
     * @param {String} imgSrc The source of the poster image to this movie.
     * @param {Score[]} scores The scores this movie has received.
     * @param {String[]} genres The genres of the movie.
     * @param {String} director The director of the movie.
     * @param {String[]} cast The cast members of the movie.
     */
    constructor(title, synopsis, imgSrc, scores, genres, director, cast){
        this.title = title;
        this.synopsis = synopsis;
        this.logo = imgSrc;
        this.scores = scores;
        this.genres = genres;
        this.director = director;
        this.cast = cast;
        this.finalScore = getFinalScore(scores);
    }
}

/**
 * Gets the final score for a movie.
 * @param {Score[]} scores The scores of a movie.
 */
function getFinalScore(scores){
    if(scores.length == 0)
        return NaN;

    let sum = 0;
    scores.forEach(score => sum += score.value);
    return (sum / scores.length).toFixed(1);
}