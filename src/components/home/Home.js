import React from "react";
import AppHeader from '../appHeader/AppHeader';
import AppBanner from '../appBanner/appBanner';
import CharList from '../charList/charList.js';
import EmptyForm from '../charInfo/emptyForm.js';
import CharInfo from '../charInfo/charInfo.js';
import FindChar from '../charInfo/findChar.js';

import char from '../../resources/img/vision.png'
import { Component } from 'react';

class Home extends Component {

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

   

    render() {
    const { marvelService, marvelData, } = this.props;

        return(
                <div className='Main1'>  
                    <div>
                        <AppHeader />
                    </div>
                    
                    
                    <AppBanner/>
                    <div className='mainPage'>
                        <CharList marvelService={marvelService} marvelData={marvelData} />
                        
                        <div className='mainInfoFind'>
                            <CharInfo/>
                            <FindChar/>
                           
                        </div>
                        
                        {/* <EmptyForm/> */}
                        <img className='visionDecor'src={char} alt='decorVision'/>
                    </div>
                
                </div>
        )
    }
   
   
      
}
export default Home;