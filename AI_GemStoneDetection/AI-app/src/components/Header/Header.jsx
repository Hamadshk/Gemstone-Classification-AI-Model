import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Gems from '../../assets/Images/gems.jpg'

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#0b1c38"}}>
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="success" component="div">
          Gem Stone Identifier
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
