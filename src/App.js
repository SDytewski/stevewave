import './App.css';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js'
import Body from './components/Body.js'

const theme = createTheme({
  // Override or create new styles, colors, palettes...
  palette: {
    primary: {
      main: "#2a9461"
    }
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    // MUI components
 
    <div className="app">
      <NavBar/>
      <Body/>
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
