import './AppHeader.css'
import { Link } from "react-router-dom";

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

    
   
    
    return(
       <header>
            <div className="logo-block">
                <p style={{margin: 0}}> <span className="colorChange">Marvel</span> Information portal</p>
            </div>
            <div>
                <p className='nav-bar'>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/" ><a onClick={() => handleSelect(1)} className={selected === 1 ? 'highlighted' : ''}>Characters </a></Link>/
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/comicsList" onClick={() => handleSelect(2)} className={selected === 2? 'highlighted' : ''} ><a > Comics</a></Link> 

                </p>
            </div>
       </header> 
    )
}
export default AppHeader 