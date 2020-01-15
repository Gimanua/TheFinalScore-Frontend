import React from 'react';
import './scss/table.scss';
import Movie from '../entities/Movie';
import { loadSavedMovies, deleteMovie } from '../APIHelper';


/**
 * This print the list (a table) of a logged in user
 * @param {Object} props The React props object.
 * @param {Movie[]} props.movies The movies that are saved.
 * @param {Function} props.onMovieDelete The function to call when you delete a movie.
 */
export default function Table({movies, onMovieDelete}) {
  if (localStorage.getItem('token') != null) {
    return (
      <div className="List">
        <h1>The Final Score</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Cast</th>
              <th>Genres</th>
              <th>Plot</th>
              <th>FINALSCORE</th>
              <th>Type</th>
              <th>Languages</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) =>
              <tr key={index}>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.director}</td>
                <td>{movie.cast.join(", ")}</td>
                <td>{movie.genres.join(", ")}</td>
                <td>{movie.synopsis}</td>
                <td>{movie.finalScore}</td>
                <td>{movie.type}</td>
                <td>{movie.languages.join(", ")}</td>
                <td><span role="img" aria-label="Delete" onClick={() => onMovieDelete(index)}>❌</span></td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    );
  }
  else {
    return (
      <div>
        <h1>You need to log in to view your list</h1>
      </div>
    )
  }
}