import Button1 from "../buttons/button1"

import char from '../../resources/img/thor.jpeg'
import {useState, useEffect } from "react"
import MarvelService from '../../services/MarvelService.js'
import './charInfo.css'
import Spinner from '../spinner/Spinner';

const CharInfo = (props) => {

    const [char, setChar] = useState([])
    const [loading, setLoad] = useState(true);

   const {id} = props
    const marvelService = new MarvelService();

    useEffect(() => {
        marvelService.
            getCharacter(id)
            .then(res=> 
                // console.log(res),
               
                setChar(res.data.results[0]),
                setLoad(false)
                )
            .catch(error => {
            console.error('Error in Child:', error);
        });

    },[id])
  

   
    // const elem = char.map((items, index )=> {
        
       
    //     return(
    //         <li key={index} className="comicsInfo">
    //                     {items}
                       
    //         </li>
    //     )
        
    // })

    console.log(char)
    const charThumbnailPath = char.thumbnail?.path
    const charThumbnailExtension = char.thumbnail?.extension
    const charUrls = char.urls || []
    
    
    return(
        <>
            {loading ? <Spinner/> : <View char={char} charThumbnailPath={charThumbnailPath} charThumbnailExtension={charThumbnailExtension} charUrls={charUrls} />}
        </>
        
        
    )

    
    
    }
    
       const View = ({ char, charThumbnailPath, charThumbnailExtension, charUrls ,}) => {
    return (
        <div className="charInfoForm">
            <div className="mainInfo">
                <div className="topCharInfo">
                    {/* Only render image if charThumbnailPath is available */}
                    {charThumbnailPath && charThumbnailExtension ? (
                        <img
                            className="charImg2"
                            alt="character"
                            src={`${charThumbnailPath}.${charThumbnailExtension}`}
                        />
                    ) : (
                        <div className="noImage">No image available</div>
                    )}
                    <div className="rightTopChar">
                        <h3 className="titleChar">{char.name}</h3>
                        <div className="buttons">
                            {charUrls.length > 0 && (
                                <>
                                    <Button1 link={charUrls[0]?.url} style={{ margin: '10px 0 0px 0px' }} text="homepage" />
                                    <Button1
                                        link={charUrls[1]?.url}
                                        style={{ backgroundColor: '#5C5C5C', margin: '10px 0 0px 0px' }}
                                        text="wiki"
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <p className="description">{char.description || "No description available"}</p>

                {/* Comics block */}
                <div className="commicsBlock">
                    <h3>Comics</h3>
                    <div className="comicsList">
                        <ul>
                            {/* Render comics if available */}
                            {char.comics?.items?.map((comic, index) => (
                                <li key={index} className="comicsInfo">
                                    {comic}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default CharInfo