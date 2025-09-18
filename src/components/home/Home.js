
import AppHeader from '../appHeader/AppHeader';
import AppBanner from '../appBanner/appBanner';
import CharList from '../charList/charList.js';
import EmptyForm from '../charInfo/emptyForm.js';
import CharInfo from '../charInfo/charInfo.js';
import FindChar from '../charInfo/findChar.js';

import char from '../../resources/img/vision.png'

import { useState, useEffect } from 'react';


import ErrorBoundary from '../errorBoundary/ErrorBoundary.js';
import MarvelService from '../../services/MarvelService.js'


    
const Home = ({ marvelData}) => {
const marvelService = new MarvelService()
    const [selectedChar, setSelectedChar] = useState(null)
  
        return(
                <div className='Main1'>  
                    <div>
                        <AppHeader />
                    </div>
                    
                    
                    <AppBanner  marvelService={marvelService} />
                    <div className='mainPage'>
                        <CharList   onCharSelect={setSelectedChar} />
                        
                        <div className='mainInfoFind'>
                           {
                            selectedChar ? 
                               
                               
                                 <CharInfo id={selectedChar}/> 
                                    : <EmptyForm/>
                                    
                           }
                              
                            
                            
                            
                            <FindChar/>
                           
                        </div>
                        
                        {/* <EmptyForm/> */}
                        <img className='visionDecor'src={char} alt='decorVision'/>
                    </div>
                
                </div>
        )
    
   
   
      
}
export default Home;