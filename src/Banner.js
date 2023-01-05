import React , {useEffect, useState} from 'react'
import axios from "./axios"
import requests from "./request"
import "./Banner.css"
function Banner(fetchURL) {
    const [movie,setMovie] = useState([]); 

    useEffect(()=>{
        // if [], run once when the row loads and don't run again
        async function fetchData(){
        const request = await axios.get(requests.fetchTopRated);

        setMovie(
            request.data.results[
                Math.floor(Math.random()* request.data.results.length -1)
            ]
            );

        return request;
        }
        fetchData();
        
        },[])

        console.log(movie);

//this function is used to limit the long text
        function truncate(str,n) {
            return str?.length > n ? str.substr (0, n - 1)+"....." : str;
        }

  return (
    <header className='banner'
    style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` ,
        backgroundPosition:"center center",


}}
    >
    <div className='banner_contents'>
       <h1 className='banner_title'>{movie?.title || movie?.name|| movie?.original_name}</h1> 
       
       <div className='banner_buttons'>
<button className="banner_button">Play</button>
<button className="banner_button">My List</button>
</div>

<h1 className="banner_description">{movie?.overview}</h1>
{truncate (movie?.overview,150)}
    </div> 

<div className='banner_fadebottom'/>

    </header>
  )
}

export default Banner