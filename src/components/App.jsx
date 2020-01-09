import React from 'react';
import MovieInfo from './MovieInfo';
import Menu from "./Menu";
import Table from './Table';
import Info from './info';
import {getMovie} from "../APIHelper";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

import './scss/App.scss';
import SignIn from './SignIn';

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

  async function onMovieSelected(selectedMovieTitle){
    try{
        const movie = await getMovie(selectedMovieTitle);
        console.log(movie);
        setSelectedMovie(movie);
    } catch (error){
        console.log(error);
    }
  }

  let currentContent;
  if(currentPage === 0){
      currentContent = <Info/>;
  }
  if (currentPage === 1)
      currentContent = selectedMovie && <MovieInfo {...selectedMovie} />;

  else if (currentPage === 2) {
      currentContent = <Table />;
  }

  else if (currentPage === 3) {
      currentContent = <SignIn />;
  }

  else if (currentPage === 4) {
      currentContent = null;
  }

  return (
      <>
          <Menu onNavigate={navigate} onMovieSelect={onMovieSelected} />
          <main className="guistate-content">
              {currentContent}
          </main>
      </>
  )
}
