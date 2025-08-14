import AppHeader from '../appHeader/AppHeader';
import AppBanner from '../appBanner/appBanner';
import CharList from '../charList/charList.js';
import EmptyForm from '../charInfo/emptyForm.js';
import CharInfo from '../charInfo/charInfo.js';
import FindChar from '../charInfo/findChar.js';
import Routes1 from '../routes/routes1.js';
import { Outlet, Link } from "react-router-dom";
import CharHomePage from '../charHomePage/charHomePage.js';

import char from '../../resources/img/vision.png'

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../home/Home.js';


import SingleComic from '../singleComic/SingleComic.js';

import './app.css';

function App() {
  return (
    
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Roboto Condensed' rel='stylesheet'></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      
          <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<Home/>}
                    />
                    <Route
                        path="/charHome"
                        element={<CharHomePage />}
                    />
                    <Route
                      path="/singleComic"
                      element={<SingleComic />}
                    />
                </Routes>
            </Router>
     
      
    </div>

    
  );
}

export default App;
