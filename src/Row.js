import React , {useEffect, useState} from 'react'
import axios from "./axios"
import "./Row.css"
import requests from "./request"
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
function Row({title, fetchURL, isLargeRow}) {

  // to load posters first you have to enter base url and then after add that path of that image from api
const base_URL = "https://image.tmdb.org/t/p/original/";
  const [movies,setMovies] = useState([]); 
  // const [trailerUrl,setTrailerUrl] = useState(""); 

  // A snippet of code which runs based on specific condition

useEffect(()=>{
// if [], run once when the row loads and don't run again

async function fetchData(){
const request = await axios.get(fetchURL);
setMovies(request.data.results);
return request;
}
fetchData();

},[fetchURL]);

// below commented code is for fetching trailers of movies from youtube but it is not working

// const opts = {
// height:"390",
// width:"100%",
// playerVars:{
//   autoplay:1,
// }
// };

// const handleClick= (movie) => {
// if (trailerUrl){
// setTrailerUrl('');
// }else {
//   movieTrailer(movie?.title || "")
//   .then((url)=>{

//     const urlParams = new URLSearchParams(new URL(url).search);
//     setTrailerUrl(urlParams.get("v"));

//   })
//   .catch((error)=>{
//     console.log(error)
//   })
// }
// }


  return (
        <div className='row'>

        <h2>{title}</h2>

        <div className='row_posters'>
          {/* several row posters */}
           
             {movies.map(movie=>(


     <img key={movie.id} 
    //  key is used to optimize the code. It is generally used if we are loading many files at a time

    // onClick={()=> handleClick(movie)}
     className={`row_poster ${isLargeRow && "row_poster_large"}`}
     src={`${base_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
     alt={movie.name}/>

          ))}

        </div>

    {/* {trailerUrl && <YouTube videoID={trailerUrl} opts={opts} />} */}

  
       

    </div>
  )
}

export default Row;