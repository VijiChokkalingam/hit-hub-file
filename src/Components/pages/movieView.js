import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

function MovieView() {
  const {id} = useParams();
  const [movieDetails,setMovieDetails] = useState({})
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGRhMGFjMjY2M2EzM2VlYWU0MTkxYThjN2NmNTE1YSIsInN1YiI6IjY0N2FlNzYwMTc0OTczMDBjMTMyMzBiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.btNHVqeq3QXaJ19MZa2efjtD0c7YHSDrh_WDlfnwof0'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then(response => response.json())
      .then(response =>setMovieDetails(response))
      .catch(err => console.error(err));
  },[id]);

  const {original_title, overview, poster_path, } = movieDetails;
  const image = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <div>
    <div class="card mb-3">
   <div class="row g-0">
    <div class="col-md-4">
  <img src={image} class="img-fluid rounded-start" alt="..."/>
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">{original_title}</h5>
    <p class="card-text">
        {overview}
     </p>
    <p class="card-text">
    </p> 
  </div>
</div>
</div>
</div>
</div>
  )
}
export default MovieView;