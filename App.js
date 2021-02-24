import React, {useState} from 'react';
import ListResults from './src/components/ListResults';
import Search from "./src/components/Search";

import data from './src/helpers/filmDatas';

export default function App() {
  const [searchText, setSearchText] = useState("Mon texte");
  const [movies, setMovies] = useState(data);

  const getSearchedMovies = (searchedText) => {
    const newMovies = data.filter(movie => movie.title.toLowerCase().includes(searchedText.toLowerCase()));
    setMovies(newMovies);
  }

  console.log(movies);
  return (
    <>
      <Search searchText={searchText} onSearch={(searchedText) => getSearchedMovies(searchedText)} />
      <ListResults movies={movies} searchedText={searchText}/>
    </>
  );
}