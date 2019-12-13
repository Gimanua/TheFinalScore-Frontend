import React from "react";
import Score from "./Score";

/**
 * Gets the final score for a movie.
 * @param value
 * @param source
 * @returns {*}
 * @constructor
 */
export default function FinalScore({value, source}) {
    return (
        <>
            <strong className="has-text-info is-block is-size-1">{value}</strong>
            <strong className="has-text-info is-block is-size-4">{source}</strong>
        </>
    );
}