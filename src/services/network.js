import axios from 'axios';
import {REACT_APP_API_URL, REACT_APP_API_KEY} from "@env"

export const getMovies = async (query, pageNumber) => {
    try {
      const response = await fetch(
        `${REACT_APP_API_URL}search/movie?api_key=${REACT_APP_API_KEY}&page=${pageNumber}&query=${query}&include_adult=false`, 
      )
      console.log('netw', `${REACT_APP_API_URL}search/movie?api_key=${REACT_APP_API_KEY}&page=${pageNumber}&query=${query}&include_adult=false`);
      return await response.json()
    } catch (error) {
      console.log(error);
    }
}
