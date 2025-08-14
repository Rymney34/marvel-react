import './appBanner2.css';

import AvvLogo from '../../resources/img/Avengers_logo.png'

import Avv from '../../resources/img/Avengers.png'



const AppBanner2 = () => {
    return (
        <div className="AppBanner2">
            <div className='leftBanner'>
                <img alt="heroes" src={Avv}/>
                <p className='parBanner'>New comics every week!<br/> stay tuned!</p>
            </div>
            <div className='rightBanner'>
                 <img alt="logo" src={AvvLogo}/>
            </div>

           
        </div>
    )
}
export default AppBanner2