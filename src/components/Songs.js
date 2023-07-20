import React from 'react';
import '../App.css';
import styled from "@mui/material/styles/styled";
import { createMuiTheme, ThemeProvider } from "@mui/material/styles";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

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

const CLIENT_ID = "78a30fe647724ab897180931bb58e282";
const CLIENT_SECRET = "33b2264d59f042ad84024042692599cf"

export const Songs = () => {
  //function expression is when a function is stored in a variable

  // const [roll, setRoll] = useState(false);
  const [spotify, setSpotify] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  // useEffect(() => {
  //   setTimeout(() => {
  //     // animation
  //     setRoll(true);
  //   }, 500);
  // }, []);

  useEffect(() => {

    const authParameters = {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body:
        "grant_type=client_credentials&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET

    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => {
        setAccessToken(data.access_token)
        return data
      })
      .then(response => fetch("https://api.spotify.com/v1/artists/3FcIgTRVZZwASnXLHJ1JNr", {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${response.access_token}`
        }
      }))
      .then(res => res.json())
      .then(data1 => { setSpotify(data1); console.log(data1)})

  }, [])

  return (



    <div style={classes.root}>
      <Grid
        container
        spacing={0}
        // direction="column"
        // alignItems="center"
        // justifyContent="center"
        style={styles.heroContainer}
        alignItems="center"
        justifyContent="center"

      >
        <Grid item xs={12}>

          <Typography sx={{ color: "#A4A9AD", mt: 4, pt: 5, mb: 10 }} variant="h6" align="center">
            <div className="glow">
              SONGS
            </div>
          </Typography>

        </Grid>


        <Grid item xs={12} align="center">
          <iframe src="https://open.spotify.com/embed/album/2IoHLWW6TmUp1QoJxyr7Gw?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

          {/* <iframe src="https://bandcamp.com/EmbeddedPlayer/track=3580342141/size=small/bgcol=ffffff/linkcol=f171a2/transparent=true/" seamless><a href="https://stevewave.bandcamp.com/track/babe-blade">Babe Blade by Steve Wave</a></iframe> */}
        </Grid>

        <Grid item xs={12} align="center">

          <iframe src="https://open.spotify.com/embed/album/2e0Pcn6CSDmN7ss0YamLX7?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

        </Grid>

        <Grid item xs={12} align="center">
          <iframe src="https://open.spotify.com/embed/track/2hxhhr8YscoLlOfnd0Fepp?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </Grid>

        <Grid item xs={3} align="center" sx={{ mt: 2, mb: 0 }}>
          <Card sx={{ minWidth: 275 }}>

            <CardContent style={{ backgroundColor: "#000000" }}>
              <Typography sx={{ fontSize: 18 }} color="#7FFFD4">Spotify Data</Typography>

              <Typography sx={{ fontSize: 13 }} color="#7FFFD4">
                <Box>Name: {spotify.name}</Box>
                 {/* <Box>Followers: {spotify.followers.total}</Box> */}
                <Box>Popularity: {spotify.popularity}</Box> 
                {/* <Box pt={3}><img id="spotify-profile" src={spotify.images[0].url} /></Box>  */}

             </Typography>

            </CardContent>

          </Card>
        </Grid>


      </Grid>
    </div>

  );
};
