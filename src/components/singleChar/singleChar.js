import './singleChar.css'
import charImg from '../../resources/img/abyss.jpg'

import char from '../../resources/img/noImage.png'
const SingleChar = (props) =>{

    
      const {id,charImg1, name} = props


     return(
        <div  className='charWrapper' >
            <div key={id} className="charDiv">
                <img alt='charechter' className='charImgM' 
                src={charImg1} 
                onError={(e) => {
                e.target.onerror = null; // prevent infinite loop
                e.target.src = char;
                 }}/>
                 {/* <img alt='charechter' className='charImgM' src={}/> */}
                <h3 className="titleh3" >{name}</h3>
            </div>
        </div>
     )
}
export default SingleChar