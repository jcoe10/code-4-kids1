import React, { Component } from 'react';

class Nav extends Component {
    render() {
      return (
        <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="index.html">Code 4 Kids</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="game.html">Game</a>
              </li>
              <li>
              <a type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal1">Log in</a>
              <a type="button" class="btn btn-secondary" data-toggle="modal" data-target="#modal2">Sign up</a>  
            </li>
            </ul>
          </div>
        </div>
      </nav>
      );
    }
  }
  export default Nav;
