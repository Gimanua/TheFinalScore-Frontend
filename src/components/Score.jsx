import React from "react";

/**
 * Displays a score for a movie on a scale based from 1 - 10.
 * @param {Object} props The React props object.
 * @param {Number} props.value The value of the score.
 * @param {String} props.sourceLogo The path to the logo of the source of the score.
 */
export default function Score({ value, sourceLogo }) {
    return (
        <section className="scores">
            <p className="point">{value}</p>
            <img className="pointimg" src={sourceLogo} />
        </section>
    );
}