/**
 * Represents a critics score on a movie.
 */
export default class Score{

    /**
     * Constructs a score.
     * @param {Number} value The value of the score.
     * @param {String} sourceLogo The logo of the source for this score.
     */
    constructor(value, sourceLogo){
        this.value = value;
        this.sourceLogo = sourceLogo;
    }
}