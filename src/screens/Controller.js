import React, { Component } from 'react';
import Login from './login/Login';
import Home from './home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class Controller extends Component {

  constructor() {
    super();
    this.baseUrl = "http://localhost:8085/api/v1/";
  }
  /* <Route path='/movie/:id' render={(props) => <Details {...props} baseUrl={this.baseUrl} />} />
          <Route path='/bookshow/:id' render={(props) => <BookShow {...props} baseUrl={this.baseUrl} />} />
          <Route path='/confirm/:id' render={(props) => <Confirmation {...props} baseUrl={this.baseUrl} />} />
          */
  render() {
    return (
      <Router>
        <div className="main-container">
          <Route exact path='/' render={(props) => <Login {...props} baseUrl={this.baseUrl} />} />
          <Route exact path='/home/' render={(props) => <Home {...props} baseUrl={this.baseUrl} />} />
        </div>
      </Router>
    )
  }
}

export default Controller;
