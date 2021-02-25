import React, {useState, useEffect} from 'react';
import ListResults from './src/components/ListResults';
import Search from "./src/components/Search";
import {REACT_APP_API_URL, REACT_APP_API_KEY} from "@env"

// import data from './src/helpers/filmDatas';
import {getMovies} from './src/services/network'

export default function App() {
  const [searchText, setSearchText] = useState(null);
  const [movies, setMovies] = useState([]);

  const getSearchedMovies = (searchedText) => {
    setSearchText(searchedText === ''? null :searchedText )
    fetchMovies(searchedText === ''? null :searchedText )
  }

  function fetchMovies(query) {
    getMovies(query)
    .then(res => setMovies(res.results))
    // if (result) console.log(result)
  }

  useEffect(() => {
    fetchMovies(searchText)
  }, [])

  return (
    <>
      <Search searchText={searchText} onSearch={(searchedText) => getSearchedMovies(searchedText)} />
      <ListResults movies={movies} searchedText={searchText}/>
    </>
  );
}