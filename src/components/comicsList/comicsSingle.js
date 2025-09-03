import cover from '../../resources/img/UW.png'
import React from "react";
import { useState } from 'react';


const SingleComicBlock = (props) =>{
     const {coverImg, title, prices} = props

      const [isHover, setIsHover] = useState(false);

        const handleMouseEnter = () => {
        setIsHover(true);
        };

        const handleMouseLeave = () => {
            setIsHover(false);
        };
     


    return(
        <div  onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} style={{ 
                    boxShadow: isHover ? '0px 0px 10px red' : '0px 0px 0px white',
                    transform: isHover ? 'translateY(-10px)': 'translateY(0px)', 
                    transition: isHover ? 'transform 0.3s ease' : 0 }}>
            <img style={{width: '225px', height:'346px'}}src={coverImg} alt="commics cover"/>
            <h4 style={{width: '225px',fontSize: '14px', margin:'10px 0 0 0', fontWeight: 600}}>{title}</h4>
            <h5 style={{fontSize: '14px', margin:'10px 0 0 0', fontWeight: 600,color: 'rgba(0, 0, 0, 0.6)' }}>£ {prices}</h5>
        </div>
    )

}
export default SingleComicBlock