import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolBar: {
    minHeight: 0,
  },
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return(
      <AppBar
        position="static"
        color="default"
      >
        <Toolbar
          className={classes.toolBar}
        >
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            component={Link}
            to="/"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.grow}
            color="inherit"
            align="center"
            variant="h6"

          >
            <Button
              color="inherit"
              component={Link}
              to="/"
            >
              Build me a playlist
             </Button>
          </Typography>
          <Button
            color="inherit"
            component={Link}
            to="/"
          >
            Signup
             </Button>
          <Button
            color="inherit"
            component={Link}
            to="/"
          >
            Login
             </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);