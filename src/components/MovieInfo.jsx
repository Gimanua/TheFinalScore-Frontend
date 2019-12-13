import React from 'react';

import Score from './Score';
import FinalScore from './FinalScore';

import './scss/MovieInfo.scss';

export default function MovieInfo({title, synopsis, imgSrc, scores, finalScore}){

    const leftSideScores = [];
    const rightSideScores = [];
    scores.forEach((score, index) => {
        if (index % 2 == 0) 
            leftSideScores.push(score);
        else
            rightSideScores.push(score);
    });

    return (
        <article id="movie-info" className="has-text-centered">
            <h2 className="has-text-weight-bold is-size-1">{title}</h2>
            <h3 className="has-text-weight-bold is-size-4">Synopsis</h3>
            <p>{synopsis}</p>
            <section className="columns">
                <ul className="column is-two-fifths columns is-marginless">
                    {leftSideScores.map((score, index) => <li className="column is-paddingless" key={index}><Score {...score} /></li>)}
                </ul>
                <section className="column is-one-fifth is-marginless"><FinalScore value={finalScore} /></section>
                <ul className="column is-two-fifths columns is-marginless">
                    {rightSideScores.map((score, index) => <li className="column is-paddingless" key={index}><Score {...score} /></li>)}
                </ul>
            </section>
        </article>
    );
}