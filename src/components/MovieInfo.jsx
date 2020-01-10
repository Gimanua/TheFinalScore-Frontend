import React from 'react';

import Score from './Score';
import FinalScore from './FinalScore';

import './scss/MovieInfo.scss';

/**
 * The Movie Info React component.
 * @param {Object} props The React props object, here deconstructing a Movie instance.
 * @param {String} props.title The title of the movie.
 * @param {String} props.synopsis The synopsis of the movie.
 * @param {String} props.logo The logo of the movie.
 * @param {Score[]} props.scores The scores of the movie.
 * @param {String[]} props.genres The genres of the movie.
 * @param {String} props.director The director of the movie.
 * @param {String[]} props.cast The cast members of the movie.
 * @param {Number} props.finalScore The final score of the movie.
 */
export default function MovieInfo({title, synopsis, logo, scores, genres, director, cast, finalScore}){
    return (
        <>
        <article id="movie-info" className="has-text-centered">
            <h2 className="title">{title}</h2>
            <img className="MovieImg" src={logo}></img>
            <h3 className="h3class">Synopsis</h3>
            <p className="synopsis">{synopsis}</p>
            <br></br>
            <h3 className="h3class">Genres: {genres.join(',')}</h3>
            <h3 className="h3class">Director: {director}</h3>
            <h3 className="h3class">Cast: {cast.join(',')}</h3>
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