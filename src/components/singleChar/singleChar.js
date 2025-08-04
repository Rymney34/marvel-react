import './singleChar.css'
import charImg from '../../resources/img/abyss.jpg'

const SingleChar = () =>{
     return(
        <div className='charWrapper'>
            <div className="charDiv">
                <img alt='charechter' src={charImg}/>
                <h3 className="titleh3">Abbys</h3>
            </div>
        </div>
     )
}
export default SingleChar