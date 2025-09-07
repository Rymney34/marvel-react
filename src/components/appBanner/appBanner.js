import './appBanner.css'
// import React from "react";
import { Link } from "react-router-dom";

import char from '../../resources/img/thor.jpeg'

import imgB from '../../resources/img/mjolnir.png'

import Button1 from '../buttons/button1'



import React, { useState, useEffect } from 'react';

const AppBanner = ({marvelService}) => {

    const [characters, setCharacters] = useState([]);

    const [selectedChar, setSelectedChar] = useState(null)

    const [char, setChar] = useState(null)

 useEffect(() => {
    marvelService
      .getAllCharacters()// Call service from props
      .then(item => {
        // console.log('Marvel Data from Child:', data);
        const response = item.data.results 
        // console.log('Data Char:',response);
        
            setCharacters(response);

        //  console.log(marvelData.data.results)
      })
      .catch(error => {
        console.error('Error in Child:', error);
      });

      
      }, [marvelService]);

       useEffect(() => {
            const rand = characters[Math.random() * characters.length | 0]
            setChar(rand);
        }, [characters]);

    
    


     const charName = char?.name || 'No name available';
    const charDescription = char?.description || 'No description available for this character.';
    const charImage = char?.thumbnail ? `${char.thumbnail.path}.${char.thumbnail.extension}` : null;
    const charLinks = char?.urls || 'No Urls available for this character.';
   
    // const charLinks = char.urls;
      
       const RandomChar = () => {
        var rand = characters[Math.random() * characters.length | 0]

            if(rand === undefined || ''){
                console.log("String is empty or undefind")
            }
            else setChar(rand)
        }

    return (
        <div className="bannerWrapper">
            <div className="bannerBlock">
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

export default AppBanner