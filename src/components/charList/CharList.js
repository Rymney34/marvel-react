import SingleChar from "../singleChar/singleChar"

import Button1 from "../buttons/button1"
import './charList.css'
import React, { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import { useNavigate} from 'react-router-dom';
import MarvelService from '../../services/MarvelService.js'


function CharList({ marvelData, onCharSelect}){
    
    const [characters, setCharacters] = useState([]);
    const [visibleCount, setVisibleCount] = useState(9);
    const [hovered, setHovered] = useState(false);
  
    const [offset, setOffset] = useState(20);  
    const [chars, setChars] = useState([])
     const [charList, setCharList] = useState([]);
    const [loading, setLoad] = useState(true);
    const [error, setError] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    
    const [charEnded, setCharEnded] = useState(false);
    
    const marvelService = new MarvelService();

    useEffect(() => {
        onRequest();
    }, [])

    const onRequest = (offset) => {
        onCharListLoading();
        marvelService.getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(onError)
          
    }

    const onCharListLoading = () => {
        setNewItemLoading(true);
    }

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList(charList => [...charList, ...newCharList]);
        
        setLoad(loading => false);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);
    }

    const onError = () => {
        setError(true);
        setLoad(loading => false);
    }

    

    //  useEffect(() => {
    //     marvelService
    //     .getAllCharacters()// Call service from props
    //     .then(item => {
    //         // console.log('Marvel Data from Child:', data);
    //         console.log(item.data.results)
    //         const response = item.data.results 
    //         console.log('Data:',response);
            
    //             setCharacters(response);

    //         //  console.log(marvelData.data.results)
    //     })
    //     .catch(error => {
    //         console.error('Error in Child:', error);
    //     });


    //   }, [marvelService]);


    const navigate = useNavigate();
     
        // useEffect(() => {
        //       if (marvelData && marvelData.results) {
                    
        //               const response = marvelData.results;
        //               console.log('Data Char:', response);
        //               setCharacters(response);
        //               setLoad(0)
              
        //       } else {
        //               console.log("Marvel data not loaded or missing results.");
        //       }
        //               // console.log(marvelData?.results)
                      
        //       }, [marvelData]);  
    

      
     

      const charactersToShow = characters.slice(0, visibleCount);



      const elements = charList.map(items => {
        const {id, ...itemProps} = items;

        // console.log(itemProps)

        return(
        //   <div key={id} onClick={()=> onCharSelect(itemProps)}>
        //        <SingleChar  charImg1={itemProps.thumbnail.path + '.' + itemProps.thumbnail.extension} name={itemProps.name}/>
        //   </div>
            <div onClick={()=> onCharSelect(id)}>
               <SingleChar  charImg1={itemProps.thumbnail} name={itemProps.name}/>
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

