import React from "react";
import {verify} from '../APIHelper';
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

import {githubClientID} from '../APIHelper';

/**
 * 
 * @param {Object} props The React props object.
 * @param {Function} props.onNavigate Callback receiving the id of the page navigated to.
 * @param {Function} props.onMovieSelect Callback receiving the movie that was selected.
 * @returns {JSX.Element} A React component.
 */
export default function Menu({ onNavigate, onMovieSelect }) {

    /**
     * This verifies that the token the users got is valied.
     */
    

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
                        <button className="item" onClick={() => onLinkClick(0)}>Home</button>
                        <button className="item" onClick={() => onLinkClick(2)}>My List</button>
                        <button className="item" onClick={() => onLinkClick(3)}>Sign in</button>
                        <button className="item" onClick={() => onLinkClick(4)}>Register</button>
                    </div>
                </div>
            <SearchResult searchQuery={searchQuery} onSelect={(selectedMovie) => {onLinkClick(1); onMovieSelect(selectedMovie); setSearchQuery(null);}} />
            </div>
        </>
    )
}