import React from 'react';
import MoviePage from './Movie';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import MovieInfo from './MovieInfo';
import Table from './Table';
import MenuDrop from './MenuDrop';

import './scss/App.scss';
import {getMovieInfo} from "../APIHelper";

function Meny({onNavigate, onMovieSelect}) {

  function onLinkClick(id) {
      onNavigate(id);
  }

  const [searchQuery, setSearchQuery] = React.useState(null);

  return (
      <>
          <div className="top">
              <SearchBar search={setSearchQuery} />
              <MenuDrop />
          </div>
          <SearchResult searchQuery={searchQuery} onSelect={onMovieSelect} />
      </>
  )
  }
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
          <Meny onNavigate={navigate} onMovieSelect={(selectedMovie) => { setSelectedMovie(selectedMovie); console.log(selectedMovie);}} />
          <main className="guistate-content">
              <MovieInfo {...getMovieInfo(selectedMovie)} />
          </main>
      </>
  )
}
