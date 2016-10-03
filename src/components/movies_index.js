import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';

import { fetchMovies } from '../actions/index';
import SearchBar from '../containers/search_bar';
import MovieList from '../containers/movie_list';

export default class MoviesIndex extends Component {

  render(){
    return (
      <div className="row">

        <div className="col-xs-12">
          <h1 className="text-xs-center">Movies</h1>
        </div>

        <SearchBar />

        <div className="col-xs-12">
          &nbsp;
        </div>

        <MovieList />

      </div>
    );
  }

  //constructor(props){
  //  super(props);
  //
  //  this.state = {
  //    term: ''
  //  };
  //
  //  this.onInputChange = this.onInputChange.bind(this);
  //  this.onFormSubmit = this.onFormSubmit.bind(this);
  //}
  //
  //onInputChange(e){
  //  this.setState({term: e.target.value});
  //}
  //
  //onFormSubmit(e){
  //  e.preventDefault();
  //
  //  this.props.fetchMovies(this.state.term);
  //  this.setState({ term: '' });
  //}

  //renderMovie(movie){
  //
  //  return (<li className="list-group-item">
  //    <div className="row">
  //      <div className="col-xs-2">
  //        <img width="70px" src="https://image.tmdb.org/t/p/w500/fTWi7V04VrtDj0hm1YDJYK4VpJW.jpg" />
  //      </div>
  //      <div className="col-xs-8">
  //        <h4>Superman</h4>
  //      </div>
  //      <div className="col-xs-2">
  //        <h6>2016-03-23</h6>
  //      </div>
  //    </div>
  //  </li>);
  //}

  //render() {
  //  return (
  //    <div className="row">
  //
  //      <div className="col-xs-12">
  //        <h1 className="text-xs-center">Movies</h1>
  //      </div>
  //      <form onSubmit={this.onFormSubmit}>
  //        <div className="col-xs-10">
  //          <input
  //            type="search"
  //            className="form-control"
  //            placeholder="Search movies by title..."
  //
  //            onChange={this.onInputChange}
  //            value={this.state.term}
  //          />
  //        </div>
  //        <div className="col-xs-2">
  //          <button type="submit" className="btn btn-default">Search</button>
  //        </div>
  //      </form>
  //
  //      <div className="col-xs-12">
  //        &nbsp;
  //      </div>
  //
  //      <div className="col-xs-12">
  //        <div className="row">
  //          <div className="col-md-12">
  //            <ul className="list-group">
  //
  //              {
  //                function(){
  //                  return this.props.movies.all ?
  //                    this.props.movies.all.results.map(this.renderMovie)
  //                    :
  //                    'nothing to show..'
  //                }
  //
  //              }
  //
  //            </ul>
  //          </div>
  //        </div>
  //      </div>
  //
  //    </div>
  //  );
  //}
}

//function mapDispatchToProps(dispatch){
//  return bindActionCreators({ fetchMovies }, dispatch);
//}
//function mapStateToProps( movies ){
//  return { movies: movies };
//}
//
//export default connect(mapStateToProps, mapDispatchToProps)(MoviesIndex);
