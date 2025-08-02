import './appBanner.css'

import char from '../../resources/img/thor.jpeg'

import imgB from '../../resources/img/mjolnir.png'

const AppBanner = () => {
    return (
        <div className="bannerWrapper">
            <div className="bannerBlock">
                <div className="randomInfoBlock">
                    <img className="charImg" alt="Char" src={char}/>
                    <div className='charDetails'>
                        <h2 className="charName"><b>Thor</b></h2>
                        <p className="charDesc"> As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted ham
                            mer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
                        </p>
                        <div className="buttonsBlock">
                            <div className="button1">
                                <a>Homepage</a>
                            </div>
                            <div className="button1">
                                <a>wiki</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="randomCTABlock">
                    <p>
                        Random character for today!<br></br>
                        
                        Do you want to get to know him better?
                    </p>
                    <p>
                        Or choose another one
                    </p>
                    <div className="buttonTry">
                            <div className="button1">
                                <a>tryit</a>
                            </div>
                    </div>
                    <div className="imageBlock">
                        <img className="img" src={imgB} alt='decoration'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppBanner