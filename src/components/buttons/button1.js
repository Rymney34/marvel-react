import './button1.css';


const Button1 = (props) => {

    const { link} = props;
    console.log('gazoz'+props.link)
    return(
        <a href={props.link} style={{ textDecoration: 'none', outlineColor: 'transparent'}}> 
        
            <div className='buttonWrap' href="default.asp" onClick={props.onClick} style={props.wrapStyle} >
                <div className='buttonDiv' style={props.style}>
                {/* <div className={`buttonDiv${props.clazz}  `}></div> */}
                    <a>{props.text}</a>
                </div>
            </div>
        </a>
    )
}
export default Button1