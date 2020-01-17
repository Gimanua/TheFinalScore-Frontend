import React from "react";

export default function FinalScore({value}) {
    return (
        <>
            <div className="Value">{value.toString()}</div>
            <div className="TFS">{'The Final Score'}</div>
        </>
    );
}