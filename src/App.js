import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

// Importing all components
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import AppRoutes from './components/AppRoutes'


let App = () => (
    <Router>
        <div>
          <NavBar />
          <Banner />
          <AppRoutes />
        </div>
    </Router>
)

export default App;
