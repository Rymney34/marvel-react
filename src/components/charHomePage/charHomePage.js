import './charHomePage.css'
import AppHeader from '../appHeader/AppHeader'
import AppBanner2 from '../appActBanner2/appActBanner2'
import char from '../../resources/img/thor.jpeg'
import {useLocation} from 'react-router-dom';
// import ReactDOM from "react-dom/client";


const CharHomePage = () => {
     const location = useLocation();
     
     
    return (
        
        <div className="charHomepage">
            <div className='bannerHeader'>
                <AppHeader/>
            </div>
            <div className='appBanner2'>
                <AppBanner2/>
            </div>
            
            
            <div className='mainCharBlock'>
                <img className='charImage1' alt='charImage' src={location.state.coverImg}/>
                <div className='charMainDesc'>
                    <h3 className='charName2'>{location.state.name}</h3>
                    <p className='charDesription2'>
                        {location.state.description}
                    </p>
                </div>
                
            </div>
        </div>
    )
}
export default CharHomePage