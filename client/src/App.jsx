import React from 'react';
import './App.css';
import MapView from './components/MapView';
import FormView from './components/FormView';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <div className="row">
        <div className="col">
          <FormView/>
        </div>  
        <div className="col">
          <MapView/>
        </div>
      </div>
    
    </div>
  );
}

export default App;
