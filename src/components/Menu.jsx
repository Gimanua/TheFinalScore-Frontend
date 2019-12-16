import React from "react";

import SearchBar from "./SearchBar";
import MenuDrop from "./MenuDrop";
import SearchResult from "./SearchResult";

import {githubClientID} from '../APIHelper';

export default function Menu({ onNavigate, onMovieSelect }) {

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
                        <button className="item"><a href={`https://github.com/login/oauth/authorize?client_id=${githubClientID}`}>Sign in</a></button>
                    </div>
                </div>
            <SearchResult searchQuery={searchQuery} onSelect={onMovieSelect} />
            </div>
        </>
    )
}