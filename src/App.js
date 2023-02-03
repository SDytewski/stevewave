import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js'
import Body from './components/Body.js'

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
