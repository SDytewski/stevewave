import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
// import myteam from '../images/myteam.jpg';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#f56977'
    },
    secondary: {
      main: '#0000'
    }

  }
});




const Body = () => {

  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
  >
  
    <Grid item xs={3}>
    
    </Grid>   
    <Typography variant="h3"  align="center" fontWeight={700}>
            STEVE WAVE
          </Typography>
          <Typography variant="h6"  align="center">
           Award Winning Spotify Artist
           <p> New Single </p>
            "I want her"

          </Typography>
          <Button
            variant="contained"
            theme={theme}
            sx={{ width: '200px', fontSize: '16px' }}
          >
            Click to Listen
          </Button>
  </Grid> 
  );
};

export default Body;

