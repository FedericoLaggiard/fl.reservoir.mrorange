/**
 * Created by federicolaggiard on 01/10/16.
 */
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}
