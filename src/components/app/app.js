
import CharHomePage from '../charHomePage/charHomePage.js';



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../home/Home.js';


import SingleComic from '../singleComic/SingleComic.js';

import './app.css';
import ComicsList from '../comicsList/comicsList.js';


import { useEffect, useState } from 'react';
import MarvelService from '../../services/MarvelService.js'


import ErrorBoundary from '../errorBoundary/ErrorBoundary.js';


const App = () => {
const marvelService = new MarvelService();

  // const [selectdChar, setChar] = useState(null);

  // const onCharSelected = (id) => {
  //   setChar(id)
  // }
    
//  this.marvelService = new MarvelService()

  
//     useEffect(()=>{
//          console.log('mount')
    
//       this.marvelService
//         .getAllCharacters() // Assuming your service has a method like this
//         .then(data => {
//           this.setState({
//             marvelData: data,
//             error: true
//           });
          
//         })
//         .catch(error => {
//           this.setState({
//             error: error,
            
//           });
//         });
//     })


    // console.log('render')
  // marvelService.getAllCharacters().then(res=> res.data.results.forEach(item => console.log(item)));

  
      return (
          
          
                <Router>
                      <div className="App">
                      <link href='https://fonts.googleapis.com/css?family=Roboto Condensed' rel='stylesheet'></link>
                      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            
                          <Routes>
                              {/* <Route
                                  path="/"
                                  element={<Home marvelService={this.marvelService} />}
                              /> */}
                              <Route
                                  path="/"
                                  element={<Home />}
                              />
                              <Route
                                  path="/charHome"
                                  element={<CharHomePage />}
                              />

                              
                                <Route
                                  path="/singleComic"
                                  element={<ErrorBoundary> <SingleComic/> </ErrorBoundary>}
                                />
                            
                            
                              <Route
                                path="/comicsList"
                                element={<ComicsList marvelService={marvelService} />}
                              />
                              <Route
                                path="/charHomePage"
                                element={<CharHomePage marvelService={marvelService} />}
                              />
                              
                          </Routes>
                      </div>
                  </Router>
          
            
     

          
      );
  }

  

export default App;
