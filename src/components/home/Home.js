import React from "react";
import AppHeader from '../appHeader/AppHeader';
import AppBanner from '../appBanner/appBanner';
import CharList from '../charList/charList.js';
import EmptyForm from '../charInfo/emptyForm.js';
import CharInfo from '../charInfo/charInfo.js';
import FindChar from '../charInfo/findChar.js';

import char from '../../resources/img/vision.png'

const Home = () => {

    return(
        <div className='Main1'>  
            
            <AppHeader/>
            
            <AppBanner/>
            <div className='mainPage'>
                <CharList/>
                
                <div className='mainInfoFind'>
                    <CharInfo/>
                    <FindChar/>
                    {console.log(window)}
                </div>
                
                {/* <EmptyForm/> */}
                <img className='visionDecor'src={char} alt='decorVision'/>
            </div>
        
        </div>
    )
   
      
}
export default Home;