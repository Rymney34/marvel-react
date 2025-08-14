import comic from '../../resources/img/x-men.png'
import AppHeader from '../appHeader/AppHeader'
import AppBanner2 from '../appActBanner2/appActBanner2'
import React from "react";
import { Link } from "react-router-dom";

const SingleComic = () =>{
    return (
        <div>
            <div className="charHomepage">
                <div className='bannerHeader'>
                    <AppHeader/>
                </div>
            <div className='appBanner2'>
                <AppBanner2/>
            </div>
            
            
                <div className='mainCharBlock'>
                    <img className='charImage1' alt='charImage' src={comic} style={{height:'450px'}}/>
                    <div className='charMainDesc'>
                        <div style={{display:'flex',  justifyContent: 'space-between'}}>
                            <h3 className='charName2'>Title</h3>
                            <h5 className="backToAllBtn" style={{margin:0, fontSize: '18px'}}>Back to all</h5>

                        </div>
                       
                        <p className='charDesription2'>
                            In Norse mythology, Loki is a god or jötunn (or both). 
                            Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. 
                            By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. 
                            By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, 
                            Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir.
                            In addition, Loki is referred to as the father of Váli in the Prose Edda.
                        </p>
                        <div style={{display:'flex', flexDirection: 'column', gap: 25, fontFamily:'Roboto Condensed', fontSize:'18px'}}>
                            <span className="spanPages">
                                144 pages
                            </span>
                            <span className="spanLanguages">
                                Language: en-us
                            </span>
                        </div>
                        <h3 className="comicsPrice" style={{margin: '25px 0 0 0', fontSize: '24px', color: 'rgba(159, 0, 19, 1)'}}>9.99</h3>
                       
                    </div>
                    
                </div>
            </div>
        </div>
    )
} 
export default SingleComic