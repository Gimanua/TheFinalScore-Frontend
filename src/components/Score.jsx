import React from 'react';

export default function Score({value, source}){
    return (
        <>
            <p>{value}</p>
            <p>{source}</p>
        </>
    );
}