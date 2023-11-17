import Timer from './Timer';
import './App.css';
import './Countdown';
import CountDown from './Countdown';

function App() {
  return (
    <div className="App">
      <header className="App">
      <div className='container'>
       <CountDown seconds={95} className="count"/>
       </div>
        <div className='container'>
       <Timer className="stop"/>
       </div>
       </header>
    </div>
  );
}

export default App;
