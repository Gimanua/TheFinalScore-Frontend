import React from 'react';
import "./css/App.css"

export default function SearchBar({search}){
    return (
        <input className="search" onInput={(e) => search(e.target.value)} type="text" placeholder="Search" />
    );
}