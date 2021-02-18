import React, {useContext} from 'react';
import {MovieContext} from './MovieContext'

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <nav className="main-header">
            <h3>Movie Tickets</h3>
            <p>List of Movies: {movies.length}</p>
        </nav>
    );
}

export default Nav;