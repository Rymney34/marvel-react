import './AppHeader.css'

const AppHeader = () => {
    
    return(
       <header>
            <div className="logo-block">
                <p> <span className="colorChange">Marvel</span> Information portal</p>
            </div>
            <nav>
                <p className='nav-bar'>
                    <a>Characters </a>/<a> Comics</a>
                </p>
            </nav>
       </header> 
    )
}
export default AppHeader 