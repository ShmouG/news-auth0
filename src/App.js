import React, { Component } from 'react';
import './App.css';
import News from './News';
import Sidenews from './Sidenews';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=google-news'
      },
      news2: {
        type: 'everything',
        query: 'sources=the-guardian-uk'
      },
      news3: {
        type: 'everything',
        query: 'sources=reddit-r-all'
      }
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="/" className="bran-logo center">My Feed</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news1} />
            <News news={this.state.news2} />
          </div>
          <div className="col s4">
            <Sidenews news={this.state.news3}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;