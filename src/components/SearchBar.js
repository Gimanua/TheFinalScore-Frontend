import React from 'react';

export default function SearchBar({search}){
    return (
        <input onInput={(e) => search(e.target.value)} type="text" placeholder="Search" className="input" />
    );
}