import React from "react";

export default function FinalScore({value}) {
    return (
        <>
            <strong className="has-text-info is-block is-size-1">{value}</strong>
            <strong className="has-text-info is-block is-size-4">{'The Final Score'}</strong>
        </>
    );
}