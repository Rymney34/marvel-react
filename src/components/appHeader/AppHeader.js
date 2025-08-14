import './AppHeader.css'
import { Link } from "react-router-dom";


const AppHeader = () => {
    
    return(
       <header>
            <div className="logo-block">
                <p> <span className="colorChange">Marvel</span> Information portal</p>
            </div>
            <div>
                <p className='nav-bar'>
                    <Link to="/"><a>Characters </a></Link>/<Link to="/singleComic"><a> Comics</a></Link> 
                </p>
            </div>
       </header> 
    )
}
export default AppHeader 