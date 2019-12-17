import React from 'react';

import Score from './Score';
import FinalScore from './FinalScore';

import './scss/MovieInfo.scss';

export default function MovieInfo({title, synopsis, logo, scores, finalScore}){
    return (
        <>
        <article id="movie-info" className="has-text-centered">
            <h2 className="title">{title} (2020)</h2>
            <img className="MovieImg" src={logo}></img>
            <h3 className="h3class">Synopsis</h3>
            <p className="synopsis">{synopsis}</p>
            <br></br>
            <h3 className="h3class">Genres: Horror, Thriller, Comedy</h3>
            <h3 className="h3class">Director: Vladimir Putin</h3>
            <h3 className="h3class">Cast: Obama Obama, Mark Zuckerberg, Osama Bin Laden, He-Man </h3>
            <section className="ratingElements">
                <ul>
                    {scores.map((score, index) => <li key={index}><Score {...score} /></li>)}
                </ul>
            </section>
        </article>
<div class="finalScoreContainer">
    <p>ss</p>
<section className="finalScore"><FinalScore value={finalScore} /></section>
</div>
</>
    );
}