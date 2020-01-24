import React from "react";

/**
 * Displays the average of all scores of a movie.
 * @param {Object} props The React props object.
 * @param {Number} props.value The value of the final score. 
 * @returns {JSX.Element} A React component.
 */
export default function FinalScore({ value }) {
    return (
        <>
            <div className="Value">{value.toString()}</div>
            <div className="TFS">{'The Final Score'}</div>
        </>
    );
}