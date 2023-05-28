import React, {useCallback, useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from "./components/AddMovie";
import security from "./assets/config/security.json";

function App() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // function fetchMoviesHandler() {
    //     // fetch('https://swapi.dev/api/films/'); // default method: GET
    //     // Promise is an object that will eventually yield some data, instead of immediately doing that
    //     // Sending HTTP request is an asynchronous task
    //
    //     fetch('https://swapi.dev/api/films/').then(response => {
    //         // console.log(response);
    //
    //         return response.json(); // translates the JSON body of the response object to a real JavaScript Object
    //         // returns a promise
    //
    //     }).then(data => {
    //         const transformedMovies = data.results.map(movieData => {
    //            return {
    //                id: movieData.episode_id,
    //                title: movieData.title,
    //                openingText: movieData.opening_crawl,
    //                releaseDate: movieData.release_date
    //            };
    //         });
    //         setMovies(transformedMovies);
    //     }).catch(err => {
    //         // catch error
    //         console.log(err);
    //     });
    // }

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(security.moviesUrl); // url is an endpoint
            // fetch does not throw error, so we're checking the 'status code' or the 'ok' field
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();
            const loadedMovies = [];
            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate
                });
            }
            setMovies(loadedMovies);
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);
    // Here, the fetchMoviesHandler function will be called each time after re-evaluation of this component if a new address is allocated to it.
    // REMEMBER: FUNCTIONS are CLOSURES

    async function addMovieHandler(movie) {
        // POST request
        const response = await fetch(security.moviesUrl, {
            method: 'POST',
            body: JSON.stringify(movie), // takes a JavaScript Object or array and turns it to JSON format
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
    }

    let content = <p>Found no movies.</p>;
    if (movies.length > 0) {
        content = <MoviesList movies={movies} />;
    }
    if (error) {
        content = <p>{error}</p>;
    }
    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
      <React.Fragment>
          <section>
              <AddMovie onAddMovie={addMovieHandler} />
          </section>
        <section>
          <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        </section>
        <section>
            {/*{!isLoading && movies.length > 0 && !error && <MoviesList movies={movies} />}*/}
            {/*{!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}*/}
            {/*{!isLoading && error && <p>{error}</p>}*/}
            {/*{isLoading && <p>Loading...</p>}*/}
            {content}
        </section>
      </React.Fragment>
    );
}

export default App;
