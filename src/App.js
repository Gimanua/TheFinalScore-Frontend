import React from 'react';
import './App.css';

function Meny(props) {

  function onLinkClick(id) {
      props.onNavigate(id);
  }

  return (

      <>
          <div className="top">
              <div className="search">Search</div>
              <div></div>
          </div>

      </>
  )

export default function App(props) {
  const [currentPage, setCurrentPage] = React.useState(1);

  function navigate(id) {
      console.log(`Navigate: ${id}`)
      setCurrentPage(id);
  }
/**
* Sends the user to page 4 on login
*/
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