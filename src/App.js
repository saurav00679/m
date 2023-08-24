import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from './components/HomePage';
import MovieDetail from './components/MovieDetail';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/:id' element = {<MovieDetail/>}/>
      <Route path = '/' element = {<HomePage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
