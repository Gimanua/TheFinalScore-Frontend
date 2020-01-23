import React from 'react';
import "./scss/App.scss"

export default function SearchBar({search}){
    return ( 
        <>
        <input className="search" spellCheck="false"  onInput={(e) => search(e.target.value)} type="text" placeholder="Search"/>
        </>
    );
}