import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

const installedApps = JSON.parse(localStorage.getItem('mfes'))

export const DRAWER_WIDTH = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

}));

export default function Sidebar() {
    const classes = useStyles();    
    return (
        <div>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    {installedApps.map(app => {
                        return (<ListItem >
                            <Link to={app.path}>
                                <Button variant="contained" color="primary">
                                    {app.description}
                                </Button>
                            </Link>
                        </ListItem>

                        )
                    })}
                </List>
            </Drawer >
        </div>
    )
}
