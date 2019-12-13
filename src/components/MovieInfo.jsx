import React from 'react';

import Score from './Score';
import FinalScore from './FinalScore';

import './scss/MovieInfo.scss';

export default function MovieInfo({title, synopsis, logo, scores, finalScore}){


    return (
        <article id="movie-info" className="has-text-centered">
            <h2 className="has-text-weight-bold is-size-1">{title}</h2>
            <img class="MovieImg" src={logo}></img>
            <h3 className="has-text-weight-bold is-size-4">Synopsis</h3>
            <p>{synopsis}</p>
            <section>
                <ul>
                    {scores.map((score, index) => <li key={index}><Score {...score} /></li>)}
                </ul>
                <section className="column is-one-fifth is-marginless"><FinalScore value={finalScore} /></section>
            </section>
        </article>
    );
}