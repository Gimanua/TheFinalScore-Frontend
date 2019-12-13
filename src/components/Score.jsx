import React from 'react';

export default function Score({value, source, sourceLogo}){
    return (
        <section>
            <p className="is-size-3">{value}</p>
            <img src={sourceLogo} />
            <p className="is-size-5">{source}</p>
        </section>
    );
}