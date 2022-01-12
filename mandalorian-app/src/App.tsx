import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './stars.scss';
import '../src/components/Shared/font.css';
import Routing from './routing/Routing';

function App() {
  return (
    <div className="app">
      <Routing/>
      <div className="stars">
        <div className="background-container">
        <img className="stars" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt=""></img>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
