import React from 'react';
import MovieInfo from './MovieInfo';
import Menu from "./Menu";
import Table from './Table';
import Info from './info';
import { getMovie, loadSavedMovies, deleteMovie, saveMovie, OAuthCheck } from "../APIHelper";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

import './scss/App.scss';
import SignIn from './SignIn';
import Register from './Register';

export default function App(props) {

    const [username, setUsername] = React.useState(null);
    const [verifier, setVerifier] = React.useState(null);
    const [verifierMethod, setVerifierMethod] = React.useState(null);

    const [currentPage, setCurrentPage] = React.useState(0);
    const [selectedMovie, setSelectedMovie] = React.useState(null);
    const [savedMovies, setSavedMovies] = React.useState(loadSavedMovies());
    const [loggedIn, setLoggedIn] = React.useState(false);
    React.useEffect(() => {OAuthCheck()}, []);

    function navigate(id) {
        console.log(`Navigate: ${id}`)
        setCurrentPage(id);
    }

    function onMovieSave(movie) {
        if(loggedIn){
            saveMovie(movie, username, verifier, verifierMethod);
            setSavedMovies(loadSavedMovies());
        }
    }

    function onSavedMovieDelete(index) {
        deleteMovie(index);
        setSavedMovies(loadSavedMovies());
    }

    function onLogin(username, verifier, verifierMethod) {
        setUsername(username);
        setVerifier(verifier);
        setVerifierMethod(verifierMethod);
        setLoggedIn(true);
    }

    async function onMovieSelected(selectedMovieTitle) {
        try {
            const movie = await getMovie(selectedMovieTitle);
            console.log(movie);
            setSelectedMovie(movie);
        } catch (error) {
            console.log(error);
        }
    }

    let currentContent;
    if (currentPage === 0) {
        currentContent = <Info />;
    }
    if (currentPage === 1)
        currentContent = selectedMovie && <MovieInfo movie={selectedMovie} onMovieSave={(movie) => onMovieSave(movie)} loggedIn={loggedIn}/>;

    else if (currentPage === 2) {
        currentContent = <Table movies={savedMovies} onMovieDelete={(i) => onSavedMovieDelete(i)} loggedIn={loggedIn} />;
    }

    else if (currentPage === 3) {
        currentContent = <SignIn onLogin={onLogin}/>;
    }

    else if (currentPage === 4) {
        currentContent = <Register />;
    }

    return (
        <>
            <Menu onNavigate={navigate} onMovieSelect={onMovieSelected} />
            <main className="guistate-content">
                {currentContent}
            </main>
            {/* <div className="bgcontainer">
                <div className="bgBox"> <div className="mgBox"></div></div>
                <div className="bbgBox"> <div className="mmgBox"></div></div>
            </div> */}
        </>
    )
}
