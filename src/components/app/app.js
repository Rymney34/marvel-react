import AppHeader from '../appHeader/AppHeader';
import AppBanner from '../appBanner/appBanner';
import CharList from '../charList/charList.js';
import EmptyForm from '../charInfo/emptyForm.js';
import CharInfo from '../charInfo/charInfo.js';
import FindChar from '../charInfo/findChar.js';

import char from '../../resources/img/vision.png'

import './app.css';

function App() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Roboto Condensed' rel='stylesheet'></link>
      <AppHeader/>
      <AppBanner/>
      <div className='mainPage'>
          <CharList/>
         
          <div className='mainInfoFind'>
             <CharInfo/>
             <FindChar/>
          </div>
          
          {/* <EmptyForm/> */}
           <img className='visionDecor'src={char} alt='decorVision'/>
      </div>
     
      
    </div>
  );
}

export default App;
