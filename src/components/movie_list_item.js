/**
 * Created by federicolaggiard on 03/10/16.
 */
import React from 'react';


const MovieListItem = ({movie}) => {

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <li className="list-group-item">
        <div className="row">
          <div className="col-xs-2">
            <img width="70px" src={ `${ imgBaseUrl }${ movie.poster_path }` } />
          </div>
          <div className="col-xs-8">
            <h4>{ movie.title }</h4>
          </div>
          <div className="col-xs-2">
            <h6>{ movie.release_date }</h6>
          </div>
        </div>
      </li>
  );

};

export default MovieListItem