import React from "react";

//Components
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

/**
 * Displays a menu of the subpages of this website.
 * @param {Object} props The React props object.
 * @param {Function} props.onNavigate Callback receiving the id of the page navigated to.
 * @param {Function} props.onMovieSelect Callback receiving the movie that was selected.
 * @returns {JSX.Element} A React component.
 */
export default function Menu({ onNavigate, onMovieSelect }) {

    const [searchQuery, setSearchQuery] = React.useState(null);

    return (
        <>
            <div className="top">
                <SearchBar search={setSearchQuery} />
                <div className="dropdown">
                    <button className="dropbtn">Menu</button>
                    <div className="dropdown-content">
                        <button className="item" onClick={() => onNavigate(0)}>Home</button>
                        <button className="item" onClick={() => onNavigate(2)}>My List</button>
                        <button className="item" onClick={() => onNavigate(3)}>Sign in</button>
                        <button className="item" onClick={() => onNavigate(4)}>Register</button>
                    </div>
                </div>
                <SearchResult searchQuery={searchQuery} onSelect={(selectedMovie) => { onNavigate(1); onMovieSelect(selectedMovie); setSearchQuery(null); }} />
            </div>
        </>
    )
}