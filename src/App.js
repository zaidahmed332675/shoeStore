import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css'

// Importing all components
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import AppRoutes from './appRoutes/AppRoutes'
import {GlobalContextProvider} from './context/ContextApi'

let App = () => (
    <Router>
      <NavBar />
      <Banner />
      <GlobalContextProvider >
        <AppRoutes />
      </GlobalContextProvider>
    </Router>
)

export default App;
