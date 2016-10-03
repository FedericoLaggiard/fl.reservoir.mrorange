import { FETCH_MOVIES, SELECT_MOVIE } from '../actions/index';

const INITIAL_STATE = {
  all: [],
  movie: null
};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case FETCH_MOVIES:
      return { ...state, all: action.payload.data };
    case SELECT_MOVIE:
      return { ...state, movie: action.payload };
    default:
      return state;
  }
}
