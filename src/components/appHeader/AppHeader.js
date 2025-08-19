import './AppHeader.css'
import { Link } from "react-router-dom";


const AppHeader = () => {
    
    return(
       <header>
            <div className="logo-block">
                <p style={{margin: 0}}> <span className="colorChange">Marvel</span> Information portal</p>
            </div>
            <div>
                <p className='nav-bar'>
                    <Link to="/"><a>Characters </a></Link>/<Link to="/comicsList"><a> Comics</a></Link> 
                </p>
            </div>
       </header> 
    )
}
export default AppHeader 