import React from 'react';
export default function Score({value, sourceLogo}){
    return (
        <section>
            <p className="is-size-3">{value}</p>
            <img src={sourceLogo} />
        </section>
    );
}