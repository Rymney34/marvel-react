import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/app/app';
import reportWebVitals from './reportWebVitals';
import MarvelService from './services/MarvelService'

const marvelService = new MarvelService();

// marvelService.getCharacter(2).then(res=> console.log(res));

// marvelService.getAllCharacters().then(res=> res.data.results.forEach(item => console.log(item.name)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
