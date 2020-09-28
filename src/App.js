import React from 'react';
import Home from './Modules/Home';
import Page from './Modules/Page';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/"></Link>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/notification" component={Page}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
