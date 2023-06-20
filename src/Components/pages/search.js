import React,{useEffect,useState,useContext} from 'react';
import MovieCard from "../pages/movieCard";
import { AppContext } from './rootLayout';

function SearchPage() {
  const {searchMovies} = useContext(AppContext)
    // const [searchMovies,setSearchMovies] = useState("");
    const [result,setResult] = useState([]);
    useEffect(() => {
    const options = {
        method: "GET",  
        headers: {
          accept: "application/json",
          Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGRhMGFjMjY2M2EzM2VlYWU0MTkxYThjN2NmNTE1YSIsInN1YiI6IjY0N2FlNzYwMTc0OTczMDBjMTMyMzBiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.btNHVqeq3QXaJ19MZa2efjtD0c7YHSDrh_WDlfnwof0",
  },
};

fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchMovies}&include_adult=false&language=en-US&page=1`,
 options
 )
  .then((response) => response.json())
  .then((response) => setResult(response.results))
  .catch((err) => console.error(err));
    },[searchMovies]); 
  return(
    <div className="mt-2">
    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
       {result.map((movie,i)=>(
       <MovieCard movie={movie} key={i}/> 
       ))}
        </div>
    </div>
  );
 
}

export default SearchPage;