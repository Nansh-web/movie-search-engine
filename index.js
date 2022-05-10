import React from 'react'
import styles from "./styles.module.css"

function MovieCards({poster_path, original_title}) {
  return (
    
    <div  className={styles.posters} >
    <img className={styles.movieImage} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`} />

    <figcaption>
      <h2 className={styles.movie_title}> {original_title} </h2>
    </figcaption>

  </div>

  )
}

export default MovieCards
