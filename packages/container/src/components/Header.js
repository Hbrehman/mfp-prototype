import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { DRAWER_WIDTH } from './Sidebar';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
    },
  },
  appBar: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export default function Header({ isSignedIn, onSignOut }) {
  const classes = useStyles();

  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
          >
            App
          </Typography>
          <div>
            <Button
              color="primary"
              variant="contained"
              className={classes.link}
              component={RouterLink}
              to='/'
              onClick={() => { localStorage.clear() }}
            >
              Reset
            </Button>
          <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            component={RouterLink}
            to={isSignedIn ? '/' : '/auth/signin'}
            onClick={onClick}
          >
            {isSignedIn ? 'Logout' : 'Login'}
          </Button>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
