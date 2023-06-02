import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import { Grid } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import  { useState, useEffect } from 'react';





const theme = createTheme({
    palette: {
        primary: {
            main:  "#ff8f00" 
        },
        secondary: {
            main: "#ffcc80"
        }

    }
});

// function Copyright() {
//     return (
//         <Typography variant="body2" color="white">
//             {'Copyright © '}
//             <Link color="inherit" href="https://stevewave.com/">
//                 Steve Wave
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

export default function Footer() {
    return (
      <div className="noglow">
      <Box sx={{ bgcolor: '#000000', color: '#7FFFD4', p: 2 }}>
      <Grid item xs={12} align="center" sx={{ mt: 20, mb:10 }}  >
    
      <div> &#169; 2023 STEVE WAVE</div>
  
  </Grid>
  </Box>
  </div>
        )  }


// function Footer() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

    // useEffect(()=>{
    //   document.title = `You clicked ${count} times`;
//     })


//     const obj = {
//         name: "Vinnie",
//         id: 1, 
//         food: 'pizza', 
//         dob: '10/1/84'
//     }

// const { name, id } = obj


  // return (
  //   <div>
  //     <p>You clicked {count} times</p>
  //     <button onClick={() => setCount(count + 1)}>Click me</button>
  //     <button onClick={() => setCount(count - 1)}>Click me</button>
  //   </div>
  // );
// }

// export default Footer;

//     );
// }
