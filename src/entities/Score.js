/**
 * Represents a critics score on a movie.
 */
export default class Score {

    /**
     * Constructs a score.
     * @param {String} rawValue The raw value of the score.
     * @param {String} source The source for this score.
     */
    constructor(rawValue, source) {
        this.value = getValue(rawValue);
        this.source = source;
        this.sourceLogo = getLogo(source);
    }
}

/**
 * Gets the logo for a given source of a score.
 * @param {String} source The source of the score.
 * @returns {String} The path to the logo.
 */
function getLogo(source) {
    switch (source) {
        case 'Internet Movie Database':
            return 'images/imdb.png';
        case 'Rotten Tomatoes':
            return 'images/rotten_tomatoes.png';
        case 'Metacritic':
            return 'images/metacritic.png';
        default:
            return 'N/A';
    }
}

/**
 * Converts a raw score to a JS number.
 * @param {String} rawValue The direct value of the score.
 * @returns {Number} The number equivalent.
 */
function getValue(rawValue) {
    const rawNumValue = parseFloat(rawValue);
    if (rawNumValue > 10) {
        return rawNumValue / 10;
    }
    return rawNumValue;
}