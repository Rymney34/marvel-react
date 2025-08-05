import AppHeader from '../appHeader/AppHeader';
import AppBanner from '../appBanner/appBanner';
import CharList from '../charList/charList.js';
import EmptyForm from '../charInfo/emptyForm.js';

import './app.css';

function App() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Roboto Condensed' rel='stylesheet'></link>
      <AppHeader/>
      <AppBanner/>
      <div className='mainPage'>
          <CharList/>
          <EmptyForm/>
      </div>
      
    </div>
  );
}

export default App;
