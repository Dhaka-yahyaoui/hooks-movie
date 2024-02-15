import React from 'react'

const MoviesList = ({movies}) => {
  return (
    <div>
      {pmovies.map(el => <MovieCard movie={el} />)}
    </div>
  )
}

export default MoviesList
