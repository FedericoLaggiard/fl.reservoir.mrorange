/**
 * Created by federicolaggiard on 03/10/16.
 */
import React from 'react';
import moment from 'moment';

import Style from '../../styles/movie_list_item.css';

const MovieListItem = ({ movie, openMovieRow, selectedMovieId }) => {

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w92';
  let itemClass = "row movie-row-detail" + (selectedMovieId === movie.id ? ' open' : '');

  return (

    <li className="list-group-item"
        onClick={ () => openMovieRow(movie.id) }>
        <div className="row">
          <div className="col-xs-2">
            {
              movie.poster_path ?
                <img width="70px" src={ `${ imgBaseUrl }${ movie.poster_path }` }/>
                :
                ''
            }
          </div>
          <div className="col-xs-10">

            <div className="row">
              <div className="col-xs-9">
                <h4>{ movie.title }</h4>
              </div>
              <div className="col-xs-3">
                <h6>{ moment(movie.release_date, "YYYY-MM-DD").format('DD MMM YYYY') }</h6>
              </div>
            </div>
            <div className={itemClass}>
              <div className="col-xs-9">
                { movie.overview }
              </div>
            </div>

          </div>

        </div>
      </li>
  );

};

export default MovieListItem