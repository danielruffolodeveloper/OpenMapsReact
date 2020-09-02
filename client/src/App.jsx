import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import MainView from './pages/MainView';

function App() {
  return (
    <div className="container-fluid">
        <Navbar/>

    <MainView/>
    
    </div>
  );
}

export default App;
