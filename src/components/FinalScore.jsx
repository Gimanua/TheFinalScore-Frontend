import React from "react";

export default function FinalScore({value}) {
    return (
        <>
            <div className="Value">{value}</div>
            <div className="TFS">{'The Final Score'}</div>
        </>
    );
}