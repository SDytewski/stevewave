import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
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

function Copyright() {
    return (
        <Typography variant="body2" color="white">
            {'Copyright © '}
            <Link color="inherit" href="https://stevewave.com/">
                Steve Wave
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    return (

        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="body1" color="white">
                    Steve Wave
                </Typography>
                             <Copyright />
            </Container>
        </Box>

    );
}
