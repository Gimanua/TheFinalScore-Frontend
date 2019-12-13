import React from 'react';
import {searchForMovie} from '../APIHelper';

export default function SearchResult({searchQuery, onSelect}){
    let content = searchQuery && search(searchQuery);
    let classes = "searchDrop";
    if(content){
        classes += " hasRes"
    }
    return (
        <section className={classes}>
            <ul className="searchResult">
                {content}
            </ul>
        </section>
    );

    function search(query){
        const searchResults = searchForMovie(query);
        return searchResults.map((searchResult, index) => <li key={index} onClick={() => onSelect(searchResult)}>{searchResult}</li>);
    }
}
