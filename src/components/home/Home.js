
import AppHeader from '../appHeader/AppHeader';
import AppBanner from '../appBanner/appBanner';
import CharList from '../charList/charList.js';
import EmptyForm from '../charInfo/emptyForm.js';
import CharInfo from '../charInfo/charInfo.js';
import FindChar from '../charInfo/findChar.js';

import char from '../../resources/img/vision.png'

import { useState } from 'react';

const Home = ({marvelService, marvelData}) => {

    const [selectedChar, setSelectedChar] = useState(null)
  



        return(
                <div className='Main1'>  
                    <div>
                        <AppHeader />
                    </div>
                    
                    
                    <AppBanner  marvelService={marvelService} marvelData={marvelData}/>
                    <div className='mainPage'>
                        <CharList marvelService={marvelService} marvelData={marvelData}  onCharSelect={setSelectedChar} />
                        
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
                              
                            
                            
                            
                            <FindChar/>
                           
                        </div>
                        
                        {/* <EmptyForm/> */}
                        <img className='visionDecor'src={char} alt='decorVision'/>
                    </div>
                
                </div>
        )
    
   
   
      
}
export default Home;