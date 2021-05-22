import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Navbar from './layout/Navbar';
import ProtectRoute from './layout/ProtectRoute';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          </Route>
          <Route path="/login"><Login /></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
