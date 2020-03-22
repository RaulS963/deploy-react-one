import React from 'react';
import NavBar from './NavBar';
import Erza from './Erza';
import Mira from './Mira';
import Home from './Home';
import Minerva from './Minerva';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="page-content">
      <NavBar />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/erza" component={Erza} />
          <Route path="/mira" component={Mira} />
          <Route path="/minerva" component={Minerva} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
