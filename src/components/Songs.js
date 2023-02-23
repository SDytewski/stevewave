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
      height: 500,
    
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
           
           <Typography sx={{ color: "#A4A9AD" }} variant="h6" align="center">
              <div className="glow">
               SONGS
                </div>
            </Typography>        
        </Grid>  
            <Grid item xs={12} align="center">

            <iframe src="https://bandcamp.com/EmbeddedPlayer/track=3580342141/size=small/bgcol=ffffff/linkcol=f171a2/transparent=true/" seamless><a href="https://stevewave.bandcamp.com/track/babe-blade">Babe Blade by Steve Wave</a></iframe>
            </Grid>

            <Grid item xs={12} align="center">

            <iframe src="https://bandcamp.com/EmbeddedPlayer/track=2008273704/size=small/bgcol=ffffff/linkcol=f171a2/transparent=true/" seamless><a href="https://stevewave.bandcamp.com/track/in-love-with-a-ghost">In Love with a Ghost by Steve Wave</a></iframe>
           
            </Grid>
           
            <Grid item xs={12} align="center">
            <iframe src="https://bandcamp.com/EmbeddedPlayer/track=269877715/size=small/bgcol=ffffff/linkcol=f171a2/transparent=true/" seamless><a href="https://stevewave.bandcamp.com/track/gypsy">Gypsy by Steve Wave</a></iframe>
            </Grid>
        </Grid>
        </div>
     
    );
};
