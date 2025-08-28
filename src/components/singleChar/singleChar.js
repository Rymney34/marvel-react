import './singleChar.css'
import charImg from '../../resources/img/abyss.jpg'

const SingleChar = (props) =>{
      const {id,charImg1, name} = props
     return(
        <div key={id}className='charWrapper' >
            <div className="charDiv">
                <img alt='charechter' className='charImgM' src={charImg1}/>
                <h3 className="titleh3" >{name}</h3>
            </div>
        </div>
     )
}
export default SingleChar