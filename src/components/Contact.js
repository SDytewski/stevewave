import React from 'react';
import '../App.css';
import styled from "@mui/material/styles/styled";
import { createMuiTheme, ThemeProvider } from "@mui/material/styles";

import { Grid, Typography, Button, Box, keyframes } from '@mui/material';
// import myteam from '../images/myteam.jpg';
import { createTheme } from '@mui/material/styles';

import { useEffect, useState } from "react";

import backgroundmic2 from '../images/speaker.jpg';

const classes = {
    root: {
      flexGrow: 1
    },
}





const styles = {
    heroContainer: {
     html: 'cover',
    
      backgroundImage: `url(${backgroundmic2})`,
     
      backgroundSize: 'cover',
      height: '90vh',
    
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


export const Contact = () => {


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
           
           <Typography sx={{ color: "#A4A9AD", mt: 3 }} variant="h6" align="center">
              <div className="glow">
               CONTACT
                </div>
            </Typography>        
        </Grid>  

        <Grid item  xs={12} align="center">  

        <div className="container">
        
        <form target="_blank" action="https://formsubmit.co/dy2ski@gmail.com" method="POST">
            <div className="form-group">
                <div className="form-row">
            <div className="col">
                <input type="text" name="name" className="form-control" placeholder="Full Name" required />
            </div>
            <div className="col">
                <input type="email" name="email" className="form-control" placeholder="Email Address" required />
            </div>
                </div>
            </div>
    <div className="form-group">
        <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
    </div>
    <Grid item xs={12} align="center" sx={{mt: 0}}>  
<Button type="submit" variant="contained" color="primary" sx={{ mt: 20 }} xs={12}>Submit Form</Button>
</Grid> 
    
   
</form>


 

</div>
</Grid> 
     
        </Grid>
        </div>
     
    );
};





