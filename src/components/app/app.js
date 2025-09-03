import AppHeader from '../appHeader/AppHeader';
import AppBanner from '../appBanner/appBanner';
import CharList from '../charList/charList.js';
import EmptyForm from '../charInfo/emptyForm.js';
import CharInfo from '../charInfo/charInfo.js';
import FindChar from '../charInfo/findChar.js';
import Routes1 from '../routes/routes1.js';
import { Outlet, Link } from "react-router-dom";
import CharHomePage from '../charHomePage/charHomePage.js';
import React from 'react';

import char from '../../resources/img/vision.png'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../home/Home.js';


import SingleComic from '../singleComic/SingleComic.js';

import './app.css';
import ComicsList from '../comicsList/comicsList.js';
import SingleChar from '../singleChar/singleChar.js';

import { Component } from 'react';
import MarvelService from '../../services/MarvelService.js'

// const marvelService = new MarvelService();

class App extends Component{

    constructor(props) {
      
      super(props);
      this.state = {
        marvelData: null, // To store the data fetched from MarvelService
        isLoading: true,   // To track loading state
        error: null        // To handle errors
      };
      this.marvelService = new MarvelService()
    }

  
    // componentDidMount() {
    //   this.marvelService
    //     .getAllCharacters() // Assuming your service has a method like this
    //     .then(data => {
    //       this.setState({
    //         marvelData: data,
    //         isLoading: false
    //       });
    //     })
    //     .catch(error => {
    //       this.setState({
    //         error: error,
    //         isLoading: false
    //       });
    //     });
    // }

  render (){
    
  // marvelService.getAllCharacters().then(res=> res.data.results.forEach(item => console.log(item)));

  const { marvelData, isLoading, error } = this.state;
      return (
          
          <div className="App">
            <link href='https://fonts.googleapis.com/css?family=Roboto Condensed' rel='stylesheet'></link>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            
                <Router>
                      <Routes>
                          <Route
                              path="/"
                              element={<Home marvelService={this.marvelService} marvelData={marvelData} />}
                          />
                          <Route
                              path="/charHome"
                              element={<CharHomePage />}
                          />
                          <Route
                            path="/singleComic"
                            element={<SingleComic/>}
                          />
                          <Route
                            path="/comicsList"
                            element={<ComicsList marvelService={this.marvelService} />}
                          />
                           <Route
                            path="/charHomePage"
                            element={<CharHomePage marvelService={this.marvelService} />}
                          />
                          
                      </Routes>
                  </Router>
          
            
          </div>

          
      );
  }
}
  

export default App;
