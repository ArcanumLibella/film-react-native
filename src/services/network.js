import axios from 'axios';
import {REACT_APP_API_URL, REACT_APP_API_KEY} from "@env"

export const getMovies = async (query) => {
    try {
      const response = await axios.get(
        `${REACT_APP_API_URL}search/movie?api_key=${REACT_APP_API_KEY}&query=${query}&include_adult=false`
      )
      return response && response.data.results;
    } catch (error) {
      console.log(error);
    }
}
