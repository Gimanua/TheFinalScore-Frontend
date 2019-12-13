import React from 'react';
import { searchForMovie } from '../APIHelper';

export default function SearchResult({ searchQuery, onSelect }) {
    const [content, setContent] = React.useState(null);
    React.useEffect(() => { 
        if(searchQuery) {
            search(searchQuery, setContent);
        } }, [searchQuery]);

    let classes = "searchDrop";
    if (content) {
        classes += " hasRes"
    }
    return (
        <section className={classes}>
            <ul className="searchResult">
                {content}
            </ul>
        </section>
    );

    async function search(query, setContent) {
        const searchResults = await searchForMovie(query);
        setContent(searchResults.map((searchResult, index) => <li key={index}><a onClick={() => onSelect(searchResult)}>{searchResult}</a></li>));
    }
}
