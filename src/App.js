import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <Routes>
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/" component={Home} />
                  </Routes>
          </div>
      </Router>
  );
}

export default App;
