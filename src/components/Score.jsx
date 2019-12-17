import React from 'react';
export default function Score({value, sourceLogo}){
    return (
        <section className="scores">
            <p className="point">{value}</p>
            <img classname="pointimg" src={sourceLogo} />
        </section>
    );
}