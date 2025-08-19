import SingleChar from "../singleChar/singleChar"

import Button1 from "../buttons/button1"
import './charList.css'
import { Component } from "react"

class CharList extends Component {
render () {
    const { marvelService, marvelData, } = this.props;
    
    
    
    marvelService
      .getAllCharacters()// Call service from props
      .then(item => {
        // console.log('Marvel Data from Child:', data);
         console.log(item.data.results)

        //  console.log(marvelData.data.results)
      })
      .catch(error => {
        console.error('Error in Child:', error);
      });
      
    
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
            <div className="buttonsWrap"> 
                <Button1 wrapStyle={{width:'0'}} style={{width: '170px'}} text='Load more'/>
            </div>
        
            
            
        </div>
    )
}

    
}
export default CharList