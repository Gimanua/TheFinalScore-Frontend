import React from 'react';

const tempSearchResults = [
    'Star Wars',
    'Batman',
    'Lego Batman',
    'Indiana Jones',
    'Indian Jones 2'
];

export default function SearchResult({searchQuery}){
    return (
        <section className="searchDrop">
            <ul className="searchResult">
                {searchQuery && search(searchQuery)}
            </ul>
        </section>
    );
}

function search(query){
    return tempSearchResults.filter(searchResult => searchResult.toLowerCase().includes(query.toLowerCase())).map((searchResult, index) => <li key={index}>{searchResult}</li>);
}