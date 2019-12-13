import React from 'react';
import MovieInfo from './MovieInfo';
import Menu from "./Menu";
import Table from "./Table";
import './scss/App.scss';
import {getMovieInfo} from "../APIHelper";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

function Meny({onNavigate, onMovieSelect}) {

  function onLinkClick(id) {
      onNavigate(id);
  }

  const [searchQuery, setSearchQuery] = React.useState(null);

  return (
      <>
          <div className="top">
              <SearchBar search={setSearchQuery} />
              <div className="dropdown">
  <button className="dropbtn">Menu</button>
  <div className="dropdown-content">
  <button className="item" onClick={() => onLinkClick(1)}>Home</button>
  <button className="item" onClick={() => onLinkClick(2)}>My List</button>
  <button className="item" onClick={() => onLinkClick(3)}>Sign in</button>
  </div>
</div>
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
      currentContent = <MovieInfo />;

  else if (currentPage === 2) {
      currentContent = <Table />;
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
