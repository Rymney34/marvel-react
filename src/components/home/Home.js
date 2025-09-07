import React from "react";
import AppHeader from '../appHeader/AppHeader';
import AppBanner from '../appBanner/appBanner';
import CharList from '../charList/charList.js';
import EmptyForm from '../charInfo/emptyForm.js';
import CharInfo from '../charInfo/charInfo.js';
import FindChar from '../charInfo/findChar.js';

import char from '../../resources/img/vision.png'
import { Component } from 'react';
import { useState } from 'react';

const Home = ({marvelService}) => {

    const [selectedChar, setSelectedChar] = useState(null)
    // componentDidMount() {
    
    
    // marvelService
    //   .getAllCharacters()// Call service from props
    //   .then(item => {
    //     // console.log('Marvel Data from Child:', data);
    //      console.log(item.data.results)

    //      console.log(marvelData.data)
    //   })
    //   .catch(error => {
    //     console.error('Error in Child:', error);
    //   });
      
    // }

   
        // if(selectedChar){
        //     console.log(selectedChar.urls)
        // }
    


        return(
                <div className='Main1'>  
                    <div>
                        <AppHeader />
                    </div>
                    
                    
                    <AppBanner  marvelService={marvelService}/>
                    <div className='mainPage'>
                        <CharList marvelService={marvelService}   onCharSelect={setSelectedChar} />
                        
                        <div className='mainInfoFind'>
                           {
                            selectedChar ? 
                                <CharInfo charImg1={selectedChar.thumbnail.path + '.' + selectedChar.thumbnail.extension} 
                                    name={selectedChar.name}
                                    description={selectedChar.description}
                                    comics={selectedChar.comics.items}
                                    link={selectedChar.urls}
                                
                                /> 
                                    : <EmptyForm/>
                                    
                           }
                              
                            
                            
                            
                            {/* <FindChar/> */}
                           
                        </div>
                        
                        {/* <EmptyForm/> */}
                        <img className='visionDecor'src={char} alt='decorVision'/>
                    </div>
                
                </div>
        )
    
   
   
      
}
export default Home;