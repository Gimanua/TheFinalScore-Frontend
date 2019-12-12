import React from 'react';

export default function Score({value, source, id}){
    return (
        <section>
            <p className="is-size-3">{value}</p>
            <p className="is-size-5">{source}</p>
        </section>
    );
}