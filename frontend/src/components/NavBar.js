import { AppBar, Button, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    marginLeft: theme.spacing(6),
  },
  grow: {
    flexGrow: 1,
  }
}));

function NavBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = () => {
    setAuth(!auth);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseMenu = () => {
    handleChange()
    handleClose();
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          Artist
          </Typography>
          <Typography variant="h6" className={classes.title}>
          Album
          </Typography>
          <Typography variant="h6" className={classes.title}>
          Streaming Service
          </Typography>
          <div className={classes.grow}/>
          {auth ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Button variant={'outlined'} color={'inherit'} onClick={handleChange}>Fazer Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;