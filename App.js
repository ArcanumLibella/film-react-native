import React, {useState, useEffect} from 'react';
import ListResults from './src/components/ListResults';
import Search from "./src/components/Search";
import {REACT_APP_API_URL, REACT_APP_API_KEY} from "@env"

// import data from './src/helpers/filmDatas';
import {getMovies} from './src/services/network'

export default function App() {
  const [searchText, setSearchText] = useState("Mon texte");
  const [movies, setMovies] = useState([]);

  const getSearchedMovies = (searchedText) => {
    if (!searchedText) {
      fetchMovies()
    }

    const newMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchedText.toLowerCase()));
    setMovies(newMovies);
  }

  async function fetchMovies() {
    const result = await getMovies(null)
    if (result) setMovies(result)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <>
      <Search searchText={searchText} onSearch={(searchedText) => getSearchedMovies(searchedText)} />
      <ListResults movies={movies} searchedText={searchText}/>
    </>
  );
}