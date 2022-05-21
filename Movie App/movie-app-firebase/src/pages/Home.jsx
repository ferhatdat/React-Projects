import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Search from "../components/Search";
import { AuthContext } from "../context/AuthContext";
import Toastify from "../helpers/Toastify";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const {searchTerm, currentUser } = useContext(AuthContext)
  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);
  const handleSubmit = (e)=> {
    e.preventDefault()
    if(currentUser && searchTerm){
        getMovies(SEARCH_API + searchTerm)
    } else if (!currentUser) {
        Toastify('Please log in to search movie')
    } else {
        Toastify('Please enter a text')
    }
    
  }
  return (
      <>
      <Search handleSubmit={handleSubmit}/>
      <div className="d-flex justify-content-center flex-wrap">
        {movies?.map(movie => 
           <MovieCard key={movie.id} {...movie} /> )}
      </div>
      
      </>
  )
  ;
};

export default Home;
