import React from "react";
import {verify} from '../APIHelper';
import SearchBar from "./SearchBar";
import MenuDrop from "./MenuDrop";
import SearchResult from "./SearchResult";

import {githubClientID} from '../APIHelper';

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
                        <button className="item" onClick={() => verify()}><a href={`https://github.com/login/oauth/authorize?client_id=${githubClientID}`}>Sign in</a></button>

                    </div>
                </div>
            <SearchResult searchQuery={searchQuery} onSelect={(selectedMovie) => {onLinkClick(1); onMovieSelect(selectedMovie); setSearchQuery(null);}} />
            </div>
        </>
    )
}