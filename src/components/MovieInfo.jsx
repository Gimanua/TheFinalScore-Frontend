import React from 'react';

import Score from './Score';
import FinalScore from './FinalScore';

import './scss/MovieInfo.scss';
import { saveMovie } from '../APIHelper';
import Movie from '../entities/Movie';

/**
 * Displays information about a movie.
 * @param {Object} props The React props object.
 * @param {Movie} props.movie The movie to display.
 * @returns {JSX.Element} A React component.
 */
export default function MovieInfo({ movie, onMovieSave, loggedIn }) {
    const { title, synopsis, logo, scores, genres, director, cast, finalScore, year, runtime, released, languages, type } = movie;
    return (
        <>
            <article id="movie-info" className="has-text-centered">
                <h2 className="title">{title}</h2>
                <div className="AddWrap">
            {loggedIn && <><button className="AddMovie"onClick={() => onMovieSave(movie)}>+</button>
            <p className="AddText">Add to list?</p></>}
            </div>
                <img className="MovieImg" src={logo}></img>
                <h3 className="h3class">Synopsis</h3>
                <p className="synopsis">{synopsis}</p>
                <br></br>
                <h3 className="h3class">Genres: {genres.join(',')}</h3>
                <h3 className="h3class">Director: {director}</h3>
                <h3 className="h3class">Cast: {cast.join(',')}</h3>
                <h3 className="h3class">Year: {year}</h3>
                <h3 className="h3class">Runtime: {runtime}</h3>
                <h3 className="h3class">Released: {released}</h3>
                <h3 className="h3class">Languages: {languages.join(',')}</h3>
                <h3 className="h3class">Type: {type}</h3>
                <section className="ratingElements">
                    <ul>
                        {scores.map((score, index) => <li className="Rate" key={index}><Score {...score} /></li>)}
                    </ul>
                </section>
                <div className="finalScoreContainer">
                    <div className="skewbox">
                        <section className="finalScore"><FinalScore value={finalScore} /></section>
                    </div>
                </div>
            </article>



        </>
    );
}