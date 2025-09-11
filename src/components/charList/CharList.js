import SingleChar from "../singleChar/singleChar"

import Button1 from "../buttons/button1"
import './charList.css'
import React, { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import { useNavigate} from 'react-router-dom';



function CharList({marvelService, marvelData, onCharSelect}){

    const [characters, setCharacters] = useState([]);
    const [visibleCount, setVisibleCount] = useState(9);
    const [hovered, setHovered] = useState(false);
    const [loading, setLoad] = useState(1)

    const navigate = useNavigate();
     
        useEffect(() => {
              if (marvelData && marvelData.results) {
                    
                      const response = marvelData.results;
                      console.log('Data Char2221:', response);
                      setCharacters(response);
                      setLoad(0)
              
              } else {
                      console.log("Marvel data not loaded or missing results.");
              }
                      // console.log(marvelData?.results)
                      
              }, [marvelData]);  
    

      
     

      const charactersToShow = characters.slice(0, visibleCount);



      const elements = charactersToShow.map(items => {
        const {id, ...itemProps} = items;


        return(
          <div onClick={()=> onCharSelect(itemProps)}>
               <SingleChar key={id} charImg1={itemProps.thumbnail.path + '.' + itemProps.thumbnail.extension} name={itemProps.name}/>
          </div>
         
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
                {loading ? <Spinner/> : elements}
            </div>
            <div className="buttonsWrap"> 
                <Button1 onClick={loadMore} wrapStyle={{width:'0'}} style={{width: '170px'}} text='Load more'/>
            </div>
        
            
            
        </div>
    )
}


export default CharList