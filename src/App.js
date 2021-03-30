import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import Chat from './pages/Chat/Chat';
import Home from './pages/Home/Home';
import Navigation from './pages/Navigation/Navigation';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/chat">
          <Navigation page={Chat} />
        </Route>
        <Route path="/">
          <Navigation page={Home} />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
