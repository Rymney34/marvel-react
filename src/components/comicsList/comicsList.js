import SingleComicBlock from './comicsSingle'
import AppHeader from '../appHeader/AppHeader'
import AppBanner2 from '../appActBanner2/appActBanner2'
import Button1 from '../buttons/button1'
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate} from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './comicsList.css'
import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary.js';

const ComicsList = ({marvelService}) => {

const navigate = useNavigate();

   

    const [comics, setComic] = useState([]);
    const [visibleCount, setVisibleCount] = useState(8);

    const [isHover, setIsHover] = useState(false);
     const [loading, setLoad] = useState(1)
     const [error, setError] = useState(false);


    const handleMouseEnter = () => {
    setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };
          
  
   useEffect(() => {
    marvelService
      .getComics()
      .then(item => {
        // console.log('Marvel Data from Child:', data);
        const response = item.data.results
        // console.log('Data:',response);
        
            setComic(response);
            setLoad(0)
        //  console.log(marvelData.data.results)
      })
      .catch(onError);


      
      }, [marvelService]);

      const onError = () => {
        setError(true);
        setLoad(loading => false);
    }

      const comicsToShow = comics.slice(0, visibleCount);



      const elements = comicsToShow.map(items => {
        const {id, ...itemProps} = items;


         
        function Page (){
              navigate("/singleComic", 
                  {
                  state:{
                        
                        coverImg:itemProps.thumbnail.path+'.'+itemProps.thumbnail.extension, 
                        title:itemProps.title, 
                        prices:itemProps.prices[0].price,
                         description:itemProps.description,
                          pageCount: itemProps.pageCount,
                          language: itemProps.textObjects.languages
                   }});  
            //   console.log("page")
        }

        
        return(
            <div onClick={Page}>
                    <ErrorBoundary><SingleComicBlock coverImg={itemProps.thumbnail.path + '.' + itemProps.thumbnail.extension} title={itemProps.title} prices={itemProps.prices[0].price}/></ErrorBoundary> 
            </div>
                
           
         
        )
      })

      const loadMore = () =>{
          setVisibleCount(prevCount => prevCount+8); 
      }
       const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
      const content = !(loading || error) ? elements : null



    return(
        <div className="comicsList">
            <div className="commicsHomepage">
                <div className='bannerHeader'>
                    <AppHeader/>
                </div>
                <div className='appBanner2'>
                    <AppBanner2/>
                </div>

                <div className="comicsList2">
                    {errorMessage}
                    {spinner}
                    {content}
                </div>
                <div style={{display:'flex', margin:'45px', width: '170px'}}>
                    <Button1 onClick={loadMore} wrapStyle={{width:'0'}} style={{width: '170px'}} text='Load more'/>
                </div>
                
            </div>
        </div>
    )
}
export default ComicsList