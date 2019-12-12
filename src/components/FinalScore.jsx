import React from "react";
import Score from "./Score";

export default function FinalScore({value, source}) {
    return (
        <>
            <strong className="has-text-info is-block is-size-1">{value}</strong>
            <strong className="has-text-info is-block is-size-4">{source}</strong>
        </>
    );
}