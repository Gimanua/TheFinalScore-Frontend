/**
 * Represents a critics score on a movie.
 */
export default class Score{

    /**
     * Constructs a score.
     * @param {Number} value The value of the score.
     * @param {String} source The source of this score.
     * @param {String} sourceLogo The logo of the source for this score.
     */
    constructor(value, source, sourceLogo){
        this.value = value;
        this.source = source;
        this.sourceLogo = sourceLogo;
    }
}