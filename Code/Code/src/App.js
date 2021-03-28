import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Auth from './Component/Auth';
import Registration from './Component/Registration';
import Welocome from './Component/Welocome';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={Auth} />
        <Route path="/welcome/:name" component={Welocome} />
        <Route path="/register" component={Registration} />
      </div>
    );
  }
}

export default App;
