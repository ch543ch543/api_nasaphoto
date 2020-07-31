import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Nasaphoto from "./components/Nasaphoto";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div classNAme='app'>
        <Route component={Home} path='/api_nasaphoto' exact /> 
        <Route component={Nasaphoto} path='/api_nasaphoto/Nasaphoto' />
      </div>
    </BrowserRouter>
  );
}

export default App;
