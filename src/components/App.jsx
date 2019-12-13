import React from 'react';

import MovieInfo from './MovieInfo';
import Menu from "./Menu";

import './scss/App.scss';
import {getMovieInfo} from "../APIHelper";

export default function App(props) {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [selectedMovie, setSelectedMovie] = React.useState(null);

  function navigate(id) {
      console.log(`Navigate: ${id}`)
      setCurrentPage(id);
  }

  function onLogin() {
      setCurrentPage(4);
  }


  let currentContent = <MovieInfo {...selectedMovie} />;
  if (currentPage === 1)
      currentContent = null;

  else if (currentPage === 2) {
      currentContent = null;
  }

  else if (currentPage === 3) {
      currentContent = null;

  }

  else if (currentPage === 4) {
      currentContent = null;
  }

  return (
      <>
          <Menu onNavigate={navigate} onMovieSelect={(selectedMovie) => setSelectedMovie(selectedMovie)} />
          <main className="guistate-content">
              <MovieInfo {...getMovieInfo(selectedMovie)} />
          </main>
      </>
  )
}
