import AppHeader from '../appHeader/AppHeader';
import AppBanner from '../appBanner/appBanner';

import './app.css';

function App() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Roboto Condensed' rel='stylesheet'></link>
      <AppHeader/>
      <AppBanner/>
    </div>
  );
}

export default App;
