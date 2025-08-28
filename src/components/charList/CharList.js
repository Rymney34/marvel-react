import SingleChar from "../singleChar/singleChar"

import Button1 from "../buttons/button1"
import './charList.css'
import React, { useState, useEffect } from 'react';


function CharList({marvelService}){

    const [characters, setCharacters] = useState([]);
     const [visibleCount, setVisibleCount] = useState(9);
     const [hovered, setHovered] = useState(false);
  
   useEffect(() => {
    marvelService
      .getAllCharacters()// Call service from props
      .then(item => {
        // console.log('Marvel Data from Child:', data);
        const response = item.data.results 
        console.log('Data:',response);
        
            setCharacters(response);

        //  console.log(marvelData.data.results)
      })
      .catch(error => {
        console.error('Error in Child:', error);
      });

      
      }, [marvelService]);

      const charactersToShow = characters.slice(0, visibleCount);



      const elements = charactersToShow.map(items => {
        const {id, ...itemProps} = items;
        
        return(
          <SingleChar key={id} charImg1={itemProps.thumbnail.path + '.' + itemProps.thumbnail.extension} name={itemProps.name}/>
        )
      })

      const loadMore = () =>{
          setVisibleCount(prevCount => prevCount+6); 
      }

        const buttonStyle = {
        width: hovered ? '200px' : '170px',
        transition: 'width 0.3s ease', // Smooth transition
    };
    
    return(
        
        <div className="charListWrap"> 
            <div className="listCharBlock">
            
                {/* <SingleChar/>
                <SingleChar/>
                <SingleChar/>
                <SingleChar/>
                <SingleChar/>
                <SingleChar/>
                <SingleChar/>
                <SingleChar/>
            
                <SingleChar/> */}
                {elements}
            </div>
            <div className="buttonsWrap"> 
                <Button1 onClick={loadMore} wrapStyle={{width:'0'}} style={{width: '170px'}} text='Load more'/>
            </div>
        
            
            
        </div>
    )
}


export default CharList