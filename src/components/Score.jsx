import React from 'react';
export default function Score({value, sourceLogo}){
    return (
        <section className="scores">
            <p className="point">{value}</p>
            <img className="pointimg" src={sourceLogo} />
        </section>
    );
}