import React from "react";

import SearchBar from "./SearchBar";
import MenuDrop from "./MenuDrop";
import SearchResult from "./SearchResult";

export default function Menu({onNavigate, onMovieSelect}) {

    function onLinkClick(id) {
        onNavigate(id);
    }

    const [searchQuery, setSearchQuery] = React.useState(null);

    return (
        <>
            <div className="top">
                <SearchBar search={setSearchQuery} />
                <MenuDrop />
            </div>
            <SearchResult searchQuery={searchQuery} onSelect={onMovieSelect} />
        </>
    )
}