import React from 'react';

export default function Score({value, source, imgSrc}){
    return (
        <section>
            <p className="is-size-3">{value}</p>
            <img src={imgSrc} />
            <p className="is-size-5">{source}</p>
        </section>
    );
}