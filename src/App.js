import logo from './logo.svg';
import './App.css';
import Community from './components/Community';
import Tokenomics from './components/Tokenomics';
import Slotto from './components/Slotto';
import Roadmap from './components/Roadmap';
function App() {
  return (
    <div className="App">
      <Community />
      <Tokenomics />
      <Slotto />
      <Roadmap />
    </div>
  );
}

export default App;
