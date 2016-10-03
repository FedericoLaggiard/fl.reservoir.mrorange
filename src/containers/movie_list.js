/**
 * Created by federicolaggiard on 03/10/16.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MovieListItem from '../components/movie_list_item';
import { selectMovie } from '../actions/index';

class MovieList extends Component {

  constructor(props){
    super(props);

    this.state = {
      selectedMovieId: -1
    }
  }

  openMovieRow(movieId){
    this.props.selectMovie(movieId);
  }

  render(){

    return (
      <div className="col-xs-12">
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {
                this.props.movies.results ?
                  this.props.movies.results.map( movie =>
                    <MovieListItem movie={ movie } openMovieRow={ this.openMovieRow.bind(this) } key={ movie.id } selectedMovieId={ this.props.selectedMovieId }/>
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    selectMovie
  }, dispatch)
}
function mapStateToProps(state){
  return {
    movies: state.movies.all,
    selectedMovieId: state.movies.movie
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);