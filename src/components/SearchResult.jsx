import React from 'react';


const tempSearchResults = [
    'Star Wars',
    'Batman',
    'Lego Batman',
    'Indiana Jones',
    'Indian-Jones 2'
];

export default function SearchResult({searchQuery}){
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
}

function search(query){
    return tempSearchResults.filter(searchResult => searchResult.toLowerCase().includes(query.toLowerCase())).map((searchResult, index) => <li key={index}>{searchResult}</li>);
}