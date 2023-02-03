import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
// import myteam from '../images/myteam.jpg';
import { createTheme } from '@mui/material/styles';
import backgroundsand from '../images/backgroundsand.jpg';

const styles = {
    heroContainer: {
      height: 400,
    
      backgroundImage: `url(${backgroundsand})`,
     
      backgroundSize: 'cover',
    
    }
   };




const theme = createTheme({

    palette: {
        primary: {
            main: '#f56977'
        },
        secondary: {
            main: '#0000'
        },
    }


})


const Body = () => {

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={styles.heroContainer}
            
          >
        


            <Typography sx={{ color: "white" }} variant="h3" align="center" fontWeight={700}>
                STEVE WAVE
            </Typography>
           
            <Typography sx={{ color: "#A4A9AD" }} variant="h6" align="center">
                Award Winning Spotify Artist
                "I want her"
                New Single
            </Typography>
            <Typography sx={{ color: "#A4A9AD" }} variant="h6" align="center">
                
                "I want her"
              
            </Typography>
            <Typography sx={{ color: "#A4A9AD" }} variant="h6" align="center">
                
                
                New Single
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

