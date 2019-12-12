import React from 'react';

export default function Score({value, source}){
    return (
        <div>
            <p>{value}</p>
            <p>{source}</p>
        </div>
    );
}