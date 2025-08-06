import SingleChar from "../singleChar/singleChar"

import Button1 from "../buttons/button1"
import './charList.css'

const CharList = () => {
    return(
        <div className="charListWrap"> 
            <div className="listCharBlock">
                <SingleChar/>
                <SingleChar/>
                <SingleChar/>
                <SingleChar/>
                <SingleChar/>
                <SingleChar/>
                <SingleChar/>
                <SingleChar/>
                <SingleChar/>
            </div>
            <div className="buttonsWrap"> 
                <Button1 style={{width: '170px', margin: '45px 0px 0px 140px'}} text='Load more'/>
            </div>
        
            
            
        </div>
    )
}
export default CharList