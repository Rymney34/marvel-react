import './appBanner.css'





import imgB from '../../resources/img/mjolnir.png';

import Button1 from '../buttons/button1';

import Spinner from '../spinner/Spinner';

import ErrorMessage from '../errorMessage/ErrorMessage';



import React, { useState, useEffect } from 'react';

const AppBanner = ({marvelService, marvelData}) => {

    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(false);

    const [char, setChar] = useState([])
   
    

    const [loading, setLoad] = useState(true)

    
    
    const onError =() => {
        setError(true);
        setLoad(false);
    }

    const onCharLoaded = (char) => {
        setLoad(false);
        setChar(char);
    }


    useEffect(() => {
         RandomChar()
       
    },[])
  
  
  
      
       const RandomChar = () => {
       
        const id = Math.floor(Math.random() * 20) + 1;

         marvelService.
            getCharacter(id)
            .then(res=> 
                // console.log(res),
                onCharLoaded(res.data.results[0])
                // setChar(res.data.results[0]),
                // setLoad(false),
               

                
                )
            .catch(onError);

       
        }


         const errorMessage = error ? <ErrorMessage/> : null;
          const spinner = loading ? <Spinner/> : null;
         const content = !(loading || error || !char) ? View(char) : null;

    return (
        <div className="bannerWrapper">
            <div className="bannerBlock">
                {errorMessage}
                {spinner}
                {content}
                
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