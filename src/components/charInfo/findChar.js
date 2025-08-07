import Button1 from '../buttons/button1'

import './charInfo.css'

const FindChar = () => {
    return (
        <div className="findCharWraper">
                <div className="findCharDiv">
                    <h3 className="findTitle">Or find a character by name:</h3>
                    <div className="fieldFormButtons">
                        <input type="text" id="fname" name="fname" value="Enter Name"/>
                        <Button1  text='find'/>
                    </div>
                    <div className='validationErrDiv'>
                        <h5 style={{
                            color: 'red',
                            
                        }}>
                            Erorr
                        </h5>
                        <Button1  text='To page' style={{backgroundColor:'#5C5C5C'}}/>
                    </div>
                </div>
        </div>
                
        
    )
}

export default FindChar