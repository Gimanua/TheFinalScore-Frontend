import React from 'react';
import { searchForMovie } from '../APIHelper';

let timeoutID;

export default function SearchResult({ searchQuery, onSelect }) {
    const [content, setContent] = React.useState(null);
    React.useEffect(() => { 
        if(searchQuery && searchQuery.trim()) {
            clearTimeout(timeoutID);
            timeoutID = setTimeout(() => search(searchQuery, setContent), 525);
        }
        else{
            clearTimeout(timeoutID);
            setContent(null);
        }
    }, [searchQuery]);

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
        try{
            const searchResults = await searchForMovie(query.trim());
            setContent(searchResults.map((searchResult, index) => <li key={index}><a onClick={() => onSelect(searchResult)}>{searchResult}</a></li>));
        } catch(error){
            console.log(error);
        }
    }
}
