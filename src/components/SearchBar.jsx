import React from "react";

//Styling
import "./scss/App.scss";

/**
 * Displays a search bar where you can search for movies.
 * @param {Object} props The React props object.
 * @param {Function} props.search Callback receiving the search query.
 * @returns {JSX.Element} A React component.
 */
export default function SearchBar({ search }) {
    return (
        <>
            <input className="search" spellCheck="false" onInput={(e) => search(e.target.value)} type="text" placeholder="Search" />
        </>
    );
}