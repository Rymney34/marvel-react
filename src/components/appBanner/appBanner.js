import './appBanner.css'





import imgB from '../../resources/img/mjolnir.png';

import Button1 from '../buttons/button1';

import Spinner from '../spinner/Spinner';



import React, { useState, useEffect } from 'react';

const AppBanner = ({marvelService, marvelData}) => {

    const [characters, setCharacters] = useState([]);


    const [char, setChar] = useState([])

    const [loading, setLoad] = useState(true)

    
    
    


    useEffect(() => {
         RandomChar()
       
    },[])
  
  
  
      
       const RandomChar = () => {
       
        const id = Math.floor(Math.random() * 20) + 1;

         marvelService.
            getCharacter(id)
            .then(res=> 
                // console.log(res),
               
                setChar(res.data.results[0]),
                setLoad(false),
               

                
                )
            .catch(error => {
            console.error('Error :', error);
        });

       
        }

    

    return (
        <div className="bannerWrapper">
            <div className="bannerBlock">

                {loading ? <Spinner/> : View(char)}
                
                <div className="randomCTAWrapper">
                   
                    <div className="randomCTABlock">
                        <p>
                            Random character for today!<br></br>
                            
                            Do you want to get to know him better?
                        </p>
                        <p>
                            Or choose another one
                        </p>
                            <div className="buttonSt">
                                <Button1 onClick={RandomChar} text='try it'/>
                            </div>

                    </div>
                    <img className="decorImg" src={imgB} alt='decoration'/>
                     
                  
                    </div>
                   
                    
                    
            </div>
        </div>
    )
}

const View = (char)=>{

    const charName = char?.name || 'No name available';
    const charDescription = char?.description || 'No description available for this character.';
    const charImage = char?.thumbnail ? `${char.thumbnail.path}.${char.thumbnail.extension}` : null;
    const charLinks = char?.urls || 'No Urls available for this character.';
    return(
        <div className="randomInfoBlock">

                    
                    <img className="charImg" alt="Char" src={charImage}/>
                    <div className='charDetails'>
                        <h2 className="charName"><b>{charName}</b></h2>
                        <p className="charDesc"> {charDescription}
                        </p>
                        <div className="buttonsBlock">
                            
                               <Button1 link={charLinks[0].url} text='homepage' />
                           <Button1  link={charLinks[1].url}  wrapStyle={{margin: '0 0 0 30px'}} style={{backgroundColor:'#5C5C5C'}} text='wiki'/>
                            
                        </div>
                    </div>
                    
                    
        </div>
    )
}

export default AppBanner