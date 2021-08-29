import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AlbumIcon from '@material-ui/icons/Album';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import { Link } from '@material-ui/core';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  link: {
    color: theme.palette.text.primary,
  }
}));

function SideBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        open={props.side}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <Link underline='none' href="/" className={classes.link} >
              <ListItem button >

                <ListItemIcon><AlbumIcon /></ListItemIcon>
                <ListItemText primary={'Albums'} />
              </ListItem>
            </Link>
            <Divider />
            <Link underline='none' href="/edit" className={classes.link} >

              <ListItem button >
                <ListItemIcon><AddBoxOutlinedIcon /></ListItemIcon>
                <ListItemText primary={'Edit Page'} />
              </ListItem>
            </Link>
            <Divider />
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default SideBar;