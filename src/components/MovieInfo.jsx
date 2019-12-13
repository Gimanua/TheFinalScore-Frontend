import React from 'react';
import './scss/MovieInfo.scss';
import Score from './Score';
import FinalScore from "./FinalScore";

export default function MovieInfo({title, synopsis, ratings}){
    title = title || 'Movie Title';
    synopsis = synopsis || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    ratings = ratings || [ {source: 'IMDB', value: 8.3}, {source: 'Rotten Tomatoes', value: 9.5}, {source: 'MetaCritic', value: 8.5}, {source: 'AnimeList', value: 3.5}];

    return (
        <article id="movie-info" className="has-text-centered">
            <h2 className="has-text-weight-bold is-size-1">{title}</h2>
            <h3 className="has-text-weight-bold is-size-4">Synopsis</h3>
            <p>{synopsis}</p>
            <section className="columns">
                <ul className="column is-two-fifths columns is-marginless">{getLeftSideScore(ratings)}</ul>
                <section className="column is-one-fifth is-marginless">{getFinalScore(ratings)}</section>
                <ul className="column is-two-fifths columns is-marginless">{getRightSideScore(ratings)}</ul>
            </section>
        </article>
    );
}

/**
 * Gets the average of all the scores.
 * @param {Array} scores 
 */
function getFinalScore(scores){
    let sum = 0;
    scores.forEach(score => sum += score.value);

    //sum / scores.length
    return scores.length > 0 ? <FinalScore value={(sum / scores.length).toFixed(1)} source="The Final Score" /> : '?';
}

/**
 * The scores on the left side of the final score.
 * @param {Array} scores 
 */
function getLeftSideScore(scores){
    const leftSideScores = [];
    for(let i = 0; i < scores.length; i += 2){
        leftSideScores.push(scores[i]);
    }

    return leftSideScores.map((leftSideScore, index) => (
        <li className="column is-paddingless" key={index}>
            <Score {...leftSideScore} />
        </li>
    ));
}

/**
 * The scores on the right side of the final score.
 * @param {Array} scores 
 */
function getRightSideScore(scores){
    const rightSideScores = [];
    for(let i = 1; i < scores.length; i += 2){
        rightSideScores.push(scores[i]);
    }

    return rightSideScores.map((rightSideScore, index) => (
        <li className="column is-paddingless" key={index}>
            <Score {...rightSideScore} />
        </li>
    ));
}