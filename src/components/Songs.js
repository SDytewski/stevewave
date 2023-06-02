import React from 'react';
import '../App.css';
import styled from "@mui/material/styles/styled";
import { createMuiTheme, ThemeProvider } from "@mui/material/styles";

import { Grid, Typography, Button, Box, keyframes } from '@mui/material';
// import myteam from '../images/myteam.jpg';
import { createTheme } from '@mui/material/styles';

import { useEffect, useState } from "react";



import backgroundmic from '../images/microphone.jpg';

const classes = {
    root: {
      flexGrow: 1
    },
}





const styles = {
    heroContainer: {
      height: '90vh',
    
      backgroundImage: `url(${backgroundmic})`,
     
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


export const Songs = () => {
//function expression is when a function is stored in a variable

    const [roll, setRoll] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        // animation
        setRoll(true);
      }, 500);
    }, []);



    return (
        

        
    <div style={classes.root}>
       <Grid
            container
            spacing={0}
            // direction="column"
            // alignItems="center"
            // justifyContent="center"
            style={styles.heroContainer} 

          >
     
       
        <Grid item  xs={12}>      
           
           <Typography sx={{ color: "#A4A9AD", mt: 4, pt: 10 }} variant="h6" align="center">
              <div className="glow">
               SONGS
                </div>
            </Typography>        
        </Grid>  
            <Grid item xs={12} align="center">
            <iframe src="https://open.spotify.com/embed/album/2IoHLWW6TmUp1QoJxyr7Gw?utm_source=generator"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

            {/* <iframe src="https://bandcamp.com/EmbeddedPlayer/track=3580342141/size=small/bgcol=ffffff/linkcol=f171a2/transparent=true/" seamless><a href="https://stevewave.bandcamp.com/track/babe-blade">Babe Blade by Steve Wave</a></iframe> */}
            </Grid>

            <Grid item xs={12} align="center">

            <iframe src="https://open.spotify.com/embed/album/2e0Pcn6CSDmN7ss0YamLX7?utm_source=generator"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
           
            </Grid>
           
            <Grid item xs={12} align="center">
            <iframe src="https://open.spotify.com/embed/track/2hxhhr8YscoLlOfnd0Fepp?utm_source=generator"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </Grid>
        </Grid>
        </div>
     
    );
};
