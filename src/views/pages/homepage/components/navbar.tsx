import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import {AppBar, Box, Button, Container, IconButton, Menu, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = (): JSX.Element => {
    const navItemClasses = {mr: 2, display: { xs: 'none', md: 'flex' },flexGrow: 1,justifyContent:"center" }
  return (
      <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color={"transparent"}>
              <Toolbar>
                  <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                  >
                      LOGO FOR ANOTHER TIME
                  </Typography>
                  <Typography variant="h2" component="div" sx={navItemClasses} >
                      <Button color="inherit" size="large"><b>Benefits</b></Button>
                  </Typography>
              </Toolbar>
          </AppBar>
      </Box>

  );
};

export default Navbar;
