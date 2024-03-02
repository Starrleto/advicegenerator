import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';
import HomePageComponent from './Components/HomePageComponent';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePageComponent></HomePageComponent>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
