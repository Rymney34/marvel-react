import cover from '../../resources/img/UW.png'



const SingleComicBlock = () =>{
    return(
        <div style={{textAlign: 'left', }}>
            <img style={{width: '225px', height:'346px'}}src={cover} alt="commics cover"/>
            <h4 style={{width: '225px',fontSize: '14px', margin:'10px 0 0 0', fontWeight: 600}}>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h4>
            <h5 style={{fontSize: '14px', margin:'10px 0 0 0', fontWeight: 600,color: 'rgba(0, 0, 0, 0.6)' }}>£  9.99</h5>
        </div>
    )

}
export default SingleComicBlock