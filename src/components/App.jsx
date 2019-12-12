import React from 'react';
import './css/App.css';
import MoviePage from './Movie.jsx';
import SearchBar from './SearchBar.jsx';
import SearchResult from './SearchResult.jsx';
import MovieInfo from './MovieInfo.jsx';
import Table from './Table.jsx';

function Meny(props) {

  function onLinkClick(id) {
      props.onNavigate(id);
  }

  const [searchQuery, setSearchQuery] = React.useState(null);

  return (
      <>
          <div className="top">
              <SearchBar search={setSearchQuery} />
              <SearchResult searchQuery={searchQuery} />
              <MovieInfo />
              <Table />
          </div>
      </>
  )
  }
export default function App(props) {
  const [currentPage, setCurrentPage] = React.useState(1);

  function navigate(id) {
      console.log(`Navigate: ${id}`)
      setCurrentPage(id);
  }

  function onLogin() {
      setCurrentPage(4);
  }


  let currentContent = null;
  if (currentPage === 1)
      currentContent = <MoviePage />;

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
      <div>
          <Meny onNavigate={navigate} />
          <div className="guistate-content">
              {currentContent}
          </div>
      </div>
  )
}
