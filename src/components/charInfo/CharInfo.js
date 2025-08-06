import Button1 from "../buttons/button1"

import char from '../../resources/img/thor.jpeg'

import './charInfo.css'

const CharInfo = () => {
    return(
        <div className="charInfoForm">
            <div className="mainInfo">
                <div className="topCharInfo">
                    <img className="charImg2" alt='character' src={char}/>
                    <div className="rightTopChar">
                        <h3 className="titleChar">Loki</h3>
                        <div className="buttons">
                                <Button1 style ={{ margin: '10px 0 0px 0px'}}  text='homepage'/>
                                <Button1 style={{backgroundColor:'#5C5C5C', margin: '10px 0 0px 0px'}} text='wiki'/>
                        </div>
                    </div>
                    
                </div>
                <div >
                  
                </div>
                  <p className="description">
                        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. 
                        By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr.
                        By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father,
                        Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
                    
                    </p>
               
                <div className="commicsBlock">
                    <h3>Comics</h3>
                    <div className="comicsList">
                        <ul>
                            <li className="comicsInfo">
                                All winners Squad: Band of Heroes(2011) #3
                            </li>
                             <li className="comicsInfo">
                                All winners Squad: Band of Heroes(2011) #3
                            </li>
                             <li className="comicsInfo">
                                All winners Squad: Band of Heroes(2011) #3
                            </li>
                          <li className="comicsInfo">
                                All winners Squad: Band of Heroes(2011) #3
                            </li>
                             <li className="comicsInfo">
                                All winners Squad: Band of Heroes(2011) #3
                            </li>
                             <li className="comicsInfo">
                                All winners Squad: Band of Heroes(2011) #3
                            </li>
                          
                          
                            
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default CharInfo