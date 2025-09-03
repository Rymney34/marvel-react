import comic from '../../resources/img/x-men.png'
import AppHeader from '../appHeader/AppHeader'
import AppBanner2 from '../appActBanner2/appActBanner2'
import React from "react";
// import { Link } from "react-router-dom";

import {useLocation} from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

import { useState } from 'react';

const SingleComic = () =>{
    // const {coverImg, title, prices, description, pageCount,language} = props

     const location = useLocation();
const [isHover, setIsHover] = useState(false);

        const handleMouseEnter = () => {
        setIsHover(true);
        };

        const handleMouseLeave = () => {
            setIsHover(false);
        };
   
    return (
        <div>
            <div className="charHomepage">
                <div className='bannerHeader'>
                    <AppHeader/>
                </div>
            <div className='appBanner2'>
                <AppBanner2/>
            </div>
            
            
                <div className='mainCharBlock'>
                    <img className='charImage1' alt='charImage' src={location.state.coverImg} style={{height:'450px'}}/>
                    <div className='charMainDesc'>
                        <div style={{display:'flex',  justifyContent: 'space-between'}}>
                            <h3 className='charName2'>{location.state.title}</h3>
                            <Link to='/comicsList' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                <h5  
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave} 
                                    className="backToAllBtn" 
                                    style={{margin:0, fontSize: '18px',  color: isHover ? 'red' : 'black', fontSize: isHover ? '20px' : '18px'}}>
                                    Back to all
                                </h5>
                            </Link>

                        </div>
                       
                        <p className='charDesription2'>
                            {location.state.description}
                        </p>
                        <div style={{display:'flex', flexDirection: 'column', gap: 25, fontFamily:'Roboto Condensed', fontSize:'18px'}}>
                            <span className="spanPages">
                                {location.state.pageCount} pages
                            </span>
                            <span className="spanLanguages">
                                Language {location.state.language}
                            </span>
                        </div>
                        <h3 className="comicsPrice" style={{margin: '25px 0 0 0', fontSize: '24px', color: 'rgba(159, 0, 19, 1)'}}>£ {location.state.prices}</h3>
                       
                    </div>
                    
                </div>
            </div>
        </div>
    )
} 
export default SingleComic