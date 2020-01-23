import React from 'react';
import './scss/Table.scss';
import Movie from '../entities/Movie';
import { loadSavedMovies, deleteMovie } from '../APIHelper';

/**
 * This print the list (a table) of the movies saved by a logged in user.
 * @param {Object} props The React props object.
 * @param {Movie[]} props.movies The movies that are saved.
 * @param {Function} props.onMovieDelete Callback receiving id of a deleted movie.
 * @returns {JSX.Element} A React component.
 */
export default function Table({movies, onMovieDelete, loggedIn}) {
  if (loggedIn) {
    return (
      <div className="List">
        <h1>Your List</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Cast</th>
              <th>Genres</th>
              {/* <th>Plot</th> */}
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
                {/* <td>{movie.synopsis}</td> */}
                <td>{movie.finalScore.toString()}</td>
                <td>{movie.type}</td>
                <td>{movie.languages.join(", ")}</td>
                <td><span className="delete-movie" role="img" aria-label="Delete" onClick={() => onMovieDelete(movie.id)}>❌</span></td>
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