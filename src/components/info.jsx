import React from "react";

//Styling
import "./scss/InfoPage.scss";

/**
 * Displays information about this website.
 * @param {Object} props The React props object. This is actually not used here, it's just there to clarify that it's a React component.
 * @returns {JSX.Element} A React component.
 */
export default function Info(props) {
  return (
    <div id="infodiv">
      <h1 className="info-h1">The Final Score</h1>
      <p id="Info">This is a page where you can check the score of movies from sources such as IMDB, <br />
        metacritic and rottentomatoes. Api that are used are <a href="https://www.omdbapi.com" target="_Blank">omdbapi.com</a> and <a href="https://api.themoviedb.org">themoviedb.org</a>.<br />
        This api is used to get the info such as the title of the film,<br />
        score from the sources listed above and the basic plot of the movie.<br />
        Final Scores offeres the average score from all the sources and gives you a Final Score for the movie<br />
        You can log in via github and add movies to your own list, to keep track on what movies you’ve seen.<br /></p>
    </div>
  );
}
