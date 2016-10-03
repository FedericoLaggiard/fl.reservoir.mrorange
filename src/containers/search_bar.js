/**
 * Created by federicolaggiard on 03/10/16.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMovies } from '../actions/index';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e){
    this.setState({term: e.target.value});
  }

  onFormSubmit(e){
    e.preventDefault();

    this.props.fetchMovies(this.state.term);
    this.setState({ term: '' });
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="col-xs-10">
          <input
            type="search"
            className="form-control"
            placeholder="Search movies by title..."

            onChange={this.onInputChange}
            value={this.state.term}
          />
        </div>
        <div className="col-xs-2">
          <button type="submit" className="btn btn-default">Search</button>
        </div>
      </form>
    );
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchMovies }, dispatch);
}
function mapStateToProps( movies ){
  return { movies: movies };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);