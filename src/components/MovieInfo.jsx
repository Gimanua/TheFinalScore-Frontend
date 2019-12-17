import React from 'react';

import Score from './Score';
import FinalScore from './FinalScore';

import './scss/MovieInfo.scss';

export default function MovieInfo({title, synopsis, logo, scores, finalScore}){
    return (
        <>
        <article id="movie-info" className="has-text-centered">
            <h2 className="has-text-weight-bold is-size-1">{title}(Year)</h2>
            <img className="MovieImg" src={logo}></img>
            <h3 className="has-text-weight-bold is-size-4">Synopsis</h3>
            <p>{synopsis}</p>
            <br></br>
            <h3 className="has-text-weight-bold is-size-6">Genres: Horror, Thriller, Comedy</h3>
            <h3 className="has-text-weight-bold is-size-6">Director: Vladimir Putin</h3>
            <h3 className="has-text-weight-bold is-size-6">Actors: Obama Obama, Mark Zuckerberg, Osama Bin Laden, He-Man </h3>
            <section className="ratingElements">
                <ul>
                    {scores.map((score, index) => <li key={index}><Score {...score} /></li>)}
                </ul>
            </section>
        </article>
<div class="finalScoreContainer">
<section className="finalScore"><FinalScore value={finalScore} /></section>
</div>
</>
    );
}