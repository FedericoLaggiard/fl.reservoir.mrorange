/**
 * Created by federicolaggiard on 03/10/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieListItem from '../components/movie_list_item';

class MovieList extends Component {

  render(){
    return (
      <div className="col-xs-12">
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {
                this.props.movies.results ?
                  this.props.movies.results.map( movie =>
                    <MovieListItem movie={movie} key={ movie.id }/>
                  )
                :
                  'nothing'
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    movies: state.movies.all
  }
}

export default connect(mapStateToProps)(MovieList);