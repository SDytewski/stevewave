import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js'
import  Home  from './components/Home.js'
import { Contact } from './components/Contact.js'
import { Songs } from './components/Songs.js'
import { useState } from 'react';

const theme = createTheme({
  // Override or create new styles, colors, palettes...
  palette: {
    primary: {
      main: "#FF8886"
    },
    secondary: {
    
      main: "#000000"
    }
    
  },

  

  typography: {
    fontFamily: [
      'Expletus Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Tilt Neon',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

  spacing: 2

});


function App() {
  const [page, setPage] = useState('Home')

  function displayPage() {
    if (page === "Home") {

      return (
        <Home />
      )
    } else if (page === 'Songs') {
      return (
        <Songs />
      )
    } else {
      return <Contact />
    }
  }

  return (
    <ThemeProvider theme={theme}>


      <div className="app">

        {/* <Router> */}
        <NavBar page={page} setPage={setPage} />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes> */}
        {displayPage()}
        <Footer />
        {/* </Router> */}



        {/* <NavBar/>
      <Body/>
      <Footer/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
