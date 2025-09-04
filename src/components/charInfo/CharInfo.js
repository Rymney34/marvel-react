import Button1 from "../buttons/button1"

import char from '../../resources/img/thor.jpeg'

import './charInfo.css'

const CharInfo = (props) => {
   const {charImg1, name, description, comics, link} = props

   
    const elem = comics.map(items => {
        
        return(
            <li className="comicsInfo">
                        {items}
            </li>
        )
        
    })

    console.log('fa'+ link[0].url)

    return(
        <div className="charInfoForm">
            <div className="mainInfo">
                <div className="topCharInfo">
                    <img className="charImg2" alt='character' src={charImg1}/>
                    <div className="rightTopChar">
                        <h3 className="titleChar">{name}</h3>
                        <div className="buttons">
                                <Button1 link={link[0].url} style ={{ margin: '10px 0 0px 0px'}}  text='homepage'/>
                                <Button1 link={link[1].url} style={{backgroundColor:'#5C5C5C', margin: '10px 0 0px 0px'}} text='wiki'/>
                        </div>
                    </div>
                    
                </div>
                <div >
                  
                </div>
                  <p className="description">
                        {description}
                    
                    </p>
               
                <div className="commicsBlock">
                    <h3>Comics</h3>
                    <div className="comicsList">
                        <ul>
                            {elem}

                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default CharInfo