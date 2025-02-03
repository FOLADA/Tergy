import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ['ნაწარმოებანი', 'ციტატები', 'ესეისტი AI', "ჩვენს შესახებ", "რეგისტრაცია/შესვლა"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#1e2a38', width: '100%', zIndex: 1100 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img 
            src="logo.png" 
            alt="logo" 
            style={{ height: '80px', marginRight: '550px' }} 
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center', color: '#D4AF37' }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 3 }}>
  {pages.map((page) => (
    <Button
      key={page}
      onClick={handleCloseNavMenu}
      sx={{
        my: 2,
        color: '#E5C07B',
        display: 'block',
        border: '2px solid transparent',
        borderRadius: '8px',
        padding: '4px 10px',
        fontWeight: '600',
        letterSpacing: '0.8px',
        textTransform: 'uppercase',
        background: 'linear-gradient(145deg, rgba(40, 40, 40, 0.6), rgba(20, 20, 20, 0.8))',
        backdropFilter: 'blur(1px)',
        transition: 'all 0.45s ease-in-out',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'inset 0 0 2px rgba(255, 215, 0, 0.2)', 

        '&:before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: '8px',
          padding: '2px',
          background: 'linear-gradient(90deg, #C8A14D, #E5C07B, #C8A14D)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
          transition: 'all 0.45s ease-in-out', 
        },

        '&:hover': {
          color: '#2C3E50',
          background: 'linear-gradient(145deg, #FFD700, #E5C07B, #FFD700)',  
          boxShadow: '0 0 8px rgba(255, 215, 0, 0.3), 0 0 16px rgba(217, 186, 8, 0.2)',  

          '&:before': {
            background: 'linear-gradient(90deg, #FFD700, #FFC107, #FFD700)', 
            boxShadow: '0 0 10px rgba(255, 215, 0, 0.3)', 
          },
        }
      }}
    >
      {page}
    </Button>
  ))}
</Box>



        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
