import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { createTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faSpotify, faApple } from '@fortawesome/free-brands-svg-icons';


// import { Link } from "react-router-dom"




const theme = createTheme({
  palette: {
    primary: {
      main: '#0d0c0d'
    },
    secondary: {
      main: '#0000'
    }

  }
});

const pages = [{ title: 'Home', href: '/' }, { title: 'Songs', href: '/Songs' }, { title: "Contact", href: '/Contact' }];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar({  setPage }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" theme={theme}>
      <Container maxWidth="xl">
        <createTheme>
          <Toolbar disableGutters>
          
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >

            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.title}  onClick={() => setPage(page.title)}>
                                        <Typography onClick={handleCloseNavMenu} textAlign="center">{page.title}
                      {/* <Link  style={{textDecoration: "none", color:"black"}} to={`/${page.href}`}>
                    </Link> */}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
     
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >

            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button 
                  key={page.title}
                  onClick={() => setPage(page.title)}
                  sx={{ my: 2, color: '#7FFFD4', display: 'block', fontSize: '22px' }}
                  // href={page.href}
                >
                  {page.title}
                </Button>
              ))}
            </Box>

            {/* <Box sx={{ flexGrow: 0 }}> */}

              {/* <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}


            <a href="https://www.instagram.com/stevewave80/" target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faInstagram}  size="xl"  />
            </a>

            
            <a href="https://www.tiktok.com/@stevewave80/" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faTiktok} size="xl"  />
            </a>
             <a href="https://open.spotify.com/artist/3FcIgTRVZZwASnXLHJ1JNr" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faSpotify} size="xl" />
            </a>

            
            <a href="https://music.apple.com/lk/artist/steve-wave/1642869750" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faApple} size="xl"/>
            </a>
            
          </Toolbar>
        </createTheme>
      </Container>
    </AppBar>
  );
}
export default NavBar;
