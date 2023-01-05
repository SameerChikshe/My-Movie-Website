import React from 'react'
import Row from "./Row"
import requests from "./request"
import Banner from './Banner'
import Nav from './Nav'

function Homepage() {
  return (
    <div>
        <Nav/>
    <Banner/>
    <Row title = "NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true} />
    <Row title = "TRENDING NOW" fetchURL={requests.fetchTrending} />
    <Row title = "TOP RATED" fetchURL={requests.fetchTopRated} />
    <Row title = "ACTION MOVIES" fetchURL={requests.fetchActionMovies} />
    <Row title = "COMEDY MOVIES" fetchURL={requests.fetchComedyMovies} />
    <Row title = "ROMANCE MOVIES" fetchURL={requests.fetchRomanceMovies} />
    <Row title = "HORROR MOVIES" fetchURL={requests.fetchHorrorMovies} />
    <Row title = "DOCUMANTARIES" fetchURL={requests.fetchDocumantaries} /></div>
  )
}

export default Homepage