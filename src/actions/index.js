import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';
//export const CREATE_POST = 'CREATE_POST';
//export const FETCH_POST = 'FETCH_POST';

const ROOT_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=8fe51454e77a8227c204d0180b28e1c7';

export function fetchMovies(query){
  const request = axios.get(`${ROOT_URL}/search/movie${API_KEY}&query=${query}`);

  return {
    type: FETCH_MOVIES,
    payload: request
  }
}

//export function createPost(props){
//  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,props);
//
//  return {
//    type: CREATE_POST,
//    payload: request
//  }
//}
//
//export function fetchPost(id){
//  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
//
//  return {
//    type: FETCH_POST,
//    payload: request
//  }
//}

