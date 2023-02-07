import React from 'react';
import '../App.css';
import styled from "@mui/material/styles/styled";
import { createMuiTheme, ThemeProvider } from "@mui/material/styles";

import { Grid, Typography, Button, Box, keyframes } from '@mui/material';
// import myteam from '../images/myteam.jpg';
import { createTheme } from '@mui/material/styles';
import backgroundsand from '../images/27230.jpg';
import { useEffect, useState } from "react";





const textShadowPopBr = keyframes`
  0% {
    text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    text-shadow: 1px 1px #555555, 2px 2px #555555, 3px 3px #555555, 4px 4px #555555, 5px 5px #555555, 6px 6px #555555, 7px 7px #555555, 8px 8px #555555;
    -webkit-transform: translateX(-8px) translateY(-8px);
            transform: translateX(-8px) translateY(-8px);
  }
`;


const rollInLeft = keyframes`
  0% {
    -webkit-transform: translateX(-800px) rotate(-540deg);
            transform: translateX(-800px) rotate(-540deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    opacity: 1;
  }

`;

const Holder = styled(Box)(({ roll }) => ({
  width: "800px",
  height: "100px",
 
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  visibility: !roll && "hidden",
  animation: roll && `${rollInLeft} 0.6s ease-out both`
}));

const Title = styled(Typography)(() => ({
  color: "#FF8886",

  "&:hover": {
    animation: `${textShadowPopBr} 0.6s both`
  }
}));




const styles = {
    heroContainer: {
      height: 500,
    
      backgroundImage: `url(${backgroundsand})`,
     
      backgroundSize: 'cover',
    
    },


   };


   const theme = createTheme({
    palette: {
       primary: {
          main: "#ff8f00" // This is an orange looking color
                 },
       secondary: {
          main: "#ffcc80" //Another orange-ish color
                  },
                }
         
});


const Body = () => {


    const [roll, setRoll] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        // animation
        setRoll(true);
      }, 500);
    }, []);



    return (
        
        
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={styles.heroContainer} 
        
            
          >
      <Holder roll={roll} >
        <Title variant="h1">STEVE WAVE</Title>
      </Holder>
          
                 
           
            <Typography sx={{ color: "#A4A9AD" }} variant="h6" align="center">
                Award Winning Spotify Artist
                "I want her"
                New Single
            </Typography>
                    
            <Button href="https://open.spotify.com/track/2hxhhr8YscoLlOfnd0Fepp"  variant="outlined" color="primary">I WANT HER</Button>
            <Typography sx={{ color: "#A4A9AD" }} variant="h6" align="center">
                
                "I want her"
              
            </Typography>
         
    
         
        </Grid>

     
    );
};



export default Body;

