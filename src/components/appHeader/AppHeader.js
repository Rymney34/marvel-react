import './AppHeader.css'
import { Link, useLocation } from 'react-router-dom';  // Import useLocation

import React, { useState, useEffect } from 'react';

const AppHeader = () => {


     const [selected, setSelected] = useState(null)

    //  if (selected == 1){
    //     console.log('red')
    //  }

     const handleSelect = (id) =>{
        setSelected(id)
        console.log('gazoz')
     }

    const location = useLocation();

    const isCharactersPage = location.pathname === '/';
    const isComicsPage = location.pathname === '/comicsList';

    
   
    
    return(
       <header>
            <div className="logo-block">
                <p style={{margin: 0}}> <span className="colorChange">Marvel</span> Information portal</p>
            </div>
            <div>
                <p className='nav-bar'>
                 
                    <a href='/' onClick={() => handleSelect(1)} className={ isCharactersPage || selected === 1 ? 'highlighted' : ''}>Characters </a>
                  /
                   
                    <a href="/comicsList" onClick={() => handleSelect(2)} className={isComicsPage || selected === 2? 'highlighted' : ''} > Comics</a>
                
                </p>
            </div>
       </header> 
    )
}
export default AppHeader 