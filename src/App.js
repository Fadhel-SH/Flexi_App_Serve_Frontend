import './styles/stylesheet.css';
import React from 'react';

// import Templet 
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// page import from page list

// Importing the Authentication Components
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";

// Importing the Profile
import Profile from "./pages/Profile";


// Importing Help Componets
import Help from './pages/Help';

// Importing About Components
import About from "./pages/About";

// Importing Contact Components
import Contact from "./pages/Contact";

// Importing Homepage Components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import Home from './pages/Home';



function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <Routes>
                  <Route path="/login" component={Login} />
                  <Route path="/logout" component={Logout} />
                  <Route path="/register" component={Register} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/" component={Home} />
                  </Routes>
                  <Footer />
          </div>
      </Router>
  );
}

export default App;
