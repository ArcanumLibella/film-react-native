import React, {useState, useEffect} from 'react';
import ListResults from './src/components/ListResults';
import Search from "./src/components/Search";
import {REACT_APP_API_URL, REACT_APP_API_KEY} from "@env"

// import data from './src/helpers/filmDatas';
import {getMovies} from './src/services/network'

export default function App() {
  const [searchText, setSearchText] = useState(null);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getSearchedMovies = (searchedText) => {
    setCurrentPage(1)
    setMovies([])
    setSearchText(searchedText === ''? null :searchedText )
    fetchMovies(searchedText === ''? null :searchedText, currentPage, true )
  }

  function fetchMovies(query, pageNumber, isSearching = false) {
    getMovies(query, pageNumber)
    .then(res => {
      if (isSearching) {
        setMovies(res.results)
      } else {
        setMovies([...movies, ...res.results])
      }
      setTotalPages(res.total_pages)
    })
    // if (result) console.log(result)
  }

  function fetchMoreMovies() {
    let newCurrentPage = currentPage + 1
    setCurrentPage(newCurrentPage)
    if (newCurrentPage <= totalPages) {
      fetchMovies(searchText, newCurrentPage)
    }
    console.log('end');
  }

  useEffect(() => {
    fetchMovies(searchText, currentPage)
  }, [])

  return (
    <>
      <Search searchText={searchText} onSearch={(searchedText) => getSearchedMovies(searchedText)} />
      <ListResults movies={movies} searchedText={searchText} onEndReached={fetchMoreMovies}/>
    </>
  );
}