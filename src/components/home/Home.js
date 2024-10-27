import React from 'react'
import Hero from '../hero/Hero'

const Home = ({movies}) => {
    console.log("Movies passed to Home component: ", movies);
  return (
    <Hero movies={movies}/>
  )
}

export default Home
