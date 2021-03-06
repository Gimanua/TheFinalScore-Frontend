import React from "react";

//Utility functions
import { searchForMovie } from "../APIHelper";

/**
 * This is used to set a timeout to issue a search and possibly interrupt it.
 */
let timeoutID;

/**
 * Displays a list of search result.
 * @param {Object} props The React props object.
 * @param {String} props.searchQuery What to search for.
 * @param {Function} props.onSelect Callback receiving title of a movie that's being clicked.
 * @returns {JSX.Element} A React component.
 */
export default function SearchResult({ searchQuery, onSelect }) {
    const [content, setContent] = React.useState(null);
    React.useEffect(() => {
        if (searchQuery && searchQuery.trim()) {
            clearTimeout(timeoutID);
            timeoutID = setTimeout(() => search(searchQuery, setContent), 525);
        }
        else {
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
        try {
            const searchResults = await searchForMovie(query.trim());
            setContent(searchResults.map((searchResult, index) => <li key={index}><a onClick={() => onSelect(searchResult.title)}>{`${searchResult.title} (${searchResult.year})`}</a></li>));
        } catch (error) {
            console.log(error);
        }
    }
}
