import React from 'react';

import Score from './Score';
import FinalScore from './FinalScore';

import './scss/MovieInfo.scss';
import { saveMovie } from '../APIHelper';
import Movie from '../entities/Movie';

/**
 * The Movie Info React component.
 * @param {Object} props The React props object, here deconstructing a Movie instance.
 * @param {Movie} props.movie The movie.
 */
export default function MovieInfo({movie}){
    const {title, synopsis, logo, scores, genres, director, cast, finalScore} = movie;
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
            <button onClick={() => saveMovie(movie)}>Save Movie</button>
        </article>
<div className="finalScoreContainer">
    
<section className="finalScore"><FinalScore value={finalScore} /></section>
</div>
</>
    );
}