import SingleChar from "../singleChar/singleChar"
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
            
        </div>
    )
}
export default CharList