import './charInfo.css'


const EmptyForm = () => {
    return(
        <div className="emptyDiv">
            <h3>Please select a character to see information</h3>
            <div className="emptyDivs">
                <div className="circleDiv">
                    <div className="circle"></div>
                    <div className="divRect"></div>
                </div>
                <div className="hugeRect"></div>
                <div className="hugeRect"></div>
                <div className="hugeRect"></div>
            </div>
        </div>
    )
}

export default EmptyForm