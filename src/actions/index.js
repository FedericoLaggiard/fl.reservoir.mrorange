import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const SELECT_MOVIE = 'SELECT_MOVIE';

const ROOT_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=8fe51454e77a8227c204d0180b28e1c7';

export function fetchMovies(query){
  const request = axios.get(`${ROOT_URL}/search/movie${API_KEY}&query=${query}`);

  return {
    type: FETCH_MOVIES,
    payload: request
  }
}

export function selectMovie(movieId){
  return {
    type: SELECT_MOVIE,
    payload: movieId
  }
}

