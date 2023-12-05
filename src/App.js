import './App.css';
import Background from './Components/Background';
import NavBar from './Components/NavBar';
import StoreListings from './Components/Stores';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
