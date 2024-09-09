import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
              </Switch>
          </div>
      </Router>
  );
}

export default App;
