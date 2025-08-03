import './button1.css';

const Button1 = (props) => {
    return(
        <div className='buttonWrap'>
            <div className='buttonDiv' style={props.style}>
            {/* <div className={`buttonDiv${props.clazz}  `}></div> */}
                <a>{props.text}</a>
            </div>
        </div>
    )
}
export default Button1