import SingleComicBlock from './comicsSingle'
import AppHeader from '../appHeader/AppHeader'
import AppBanner2 from '../appActBanner2/appActBanner2'
import Button1 from '../buttons/button1'

import './comicsList.css'

const ComicsList = () => {
    return(
        <div className="comicsList">
            <div className="commicsHomepage">
                <div className='bannerHeader'>
                    <AppHeader/>
                </div>
                <div className='appBanner2'>
                    <AppBanner2/>
                </div>

                <div className="comicsList2">
                    <SingleComicBlock/>
                    <SingleComicBlock/>
                    <SingleComicBlock/>
                    <SingleComicBlock/>
                    <SingleComicBlock/>
                    <SingleComicBlock/>
                    <SingleComicBlock/>
                    <SingleComicBlock/>
                </div>
                <div style={{display:'flex', margin:'45px', width: '170px'}}>
                    <Button1 wrapStyle={{width:'0'}} style={{width: '170px'}} text='Load more'/>
                </div>
                
            </div>
        </div>
    )
}
export default ComicsList