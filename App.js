//====================== Movie Search ===================//

import React, { Fragment, useEffect, useState } from "react";
import "./style.css";
import axios from 'axios'
import styles from './style.module.css'
import MovieCards from "./MovieCards";


function App() {

  const [movieName, setMovieName] = useState("");
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);


  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716"
      )
      .then((response) => {
        setPopularMovies(response.data.results);
      })
  }, []);

  useEffect(() => {
    if (movieName == "") {
      setSearchedMovies([])
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=cfe422613b250f702980a3bbf9e90716`
        )
        .then((response) => {
          setSearchedMovies(response.data.results);
        })
    }
  }, [movieName]);


  return (
    <>

      <form className={styles.search}>
        <input
          className={styles.inputBar}
          type="search"
          value={movieName}
          placeholder="Search for A Movie ..."
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
      </form>

      {searchedMovies.length == 0 && movieName == "" ? <div className={styles.movieWrapper} >

        {popularMovies.map((movie, i) => {

          return (
            <MovieCards poster_path={movie.poster_path} original_title={movie.original_title} />
          )

        })}

      </div> : <div className={styles.movieWrapper}>
        {searchedMovies.map((movie, i) => {

          return (
            <MovieCards poster_path={movie.poster_path} original_title={movie.original_title} />
          )

        })}
      </div>}

    </>
  )
}

export default App;

//====================== Movie Search ===================//

//========================== Practise Code ================//
// import React from "react";

// function App() {

// return(

//   <h1>My App Works Fine OR Meri App Acche se Kaam Krti hain</h1>

// )
// }
// export default App
//========================== Practise Code ================//
