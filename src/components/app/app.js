import AppHeader from '../appHeader/AppHeader';
import AppBanner from '../appBanner/appBanner';
import CharList from '../charList/charList.js';

import './app.css';

function App() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Roboto Condensed' rel='stylesheet'></link>
      <AppHeader/>
      <AppBanner/>
      <CharList/>
    </div>
  );
}

export default App;
