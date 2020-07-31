import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Nasaphoto from "./components/Nasaphoto";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path='/' exact /> 
        <Route component={Nasaphoto} path='/Nasaphoto' />
      </div>
    </BrowserRouter>
  );
}

export default App;
