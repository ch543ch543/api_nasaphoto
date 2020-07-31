import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Nasaphoto from "./components/Nasaphoto";
import './App.css';

console.log(process.env.PUBLIC_URL);
function App() {
  return (
    <BrowserRouter>
      <div classNAme='app'>
        <Route component={ Home } path={process.env.PUBLIC_URL + '/'} exact /> 
        <Route component={ Nasaphoto } path={process.env.PUBLIC_URL + '/Nasaphoto'} />
      </div>
    </BrowserRouter>
  );
}


export default App;
