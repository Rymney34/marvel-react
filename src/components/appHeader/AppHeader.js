import './AppHeader.css'
import { Link, useLocation, NavLink } from 'react-router-dom';  // Import useLocation

import React, { useState, useEffect } from 'react';

const AppHeader = () => {


     const [selected, setSelected] = useState(null)

    //  if (selected == 1){
    //     console.log('red')
    //  }

     const handleSelect = (id) =>{
        setSelected(id)
       
     }

    const location = useLocation();



    
   
    
    return(
       <header>
            <div className="logo-block">
                <p style={{margin: 0}}> <span className="colorChange">Marvel</span> Information portal</p>
            </div>
            <div>
                <p className='nav-bar'>
                 
                    
                    <NavLink 
                        to="/" 
                        end 
                        style={({ isActive }) => ({ color: isActive ? "#9f0013" : "inherit" })}
                    >
                         Characters
                    </NavLink>
                    {' '}/{' '}
                    <NavLink 
                        to="/comicsList" 
                        style={({ isActive }) => ({ color: isActive ? "#9f0013" : "inherit" })}
                    >
                         Comics
                    </NavLink>
                </p>
            </div>
       </header> 
    )
}
export default AppHeader 