import './charHomePage.css'
import AppHeader from '../appHeader/AppHeader'
import AppBanner2 from '../appActBanner2/appActBanner2'
import char from '../../resources/img/thor.jpeg'

// import ReactDOM from "react-dom/client";


const CharHomePage = () => {
    return (
        
        <div className="charHomepage">
            <div className='bannerHeader'>
                <AppHeader/>
            </div>
            <div className='appBanner2'>
                <AppBanner2/>
            </div>
            
            
            <div className='mainCharBlock'>
                <img className='charImage1' alt='charImage' src={char}/>
                <div className='charMainDesc'>
                    <h3 className='charName2'>Title</h3>
                    <p className='charDesription2'>
                        In Norse mythology, Loki is a god or jötunn (or both). 
                        Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. 
                        By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. 
                        By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, 
                        Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir.
                        In addition, Loki is referred to as the father of Váli in the Prose Edda.
                    </p>
                </div>
                
            </div>
        </div>
    )
}
export default CharHomePage