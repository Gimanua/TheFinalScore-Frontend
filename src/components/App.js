import React from 'react';
import './css/App.css';
import SearchBar from './SearchBar';

function Meny(props) {

  function onLinkClick(id) {
      props.onNavigate(id);
  }

  return (

      <>
          <div className="top">
              <SearchBar />
              <div></div>
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
      <div>
          <Meny onNavigate={navigate} />
          <div className="guistate-content">
              {currentContent}
          </div>
      </div>
  )
}
