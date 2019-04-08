import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const styles = theme =>({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  optionPaper: {
    ...theme.mixins.gutters(),
    alignItems: "center",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolBar: {
    minHeight: 0,
  },
});

class Search extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
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
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={classes.grow}
              color="inherit"
              align="center"
              variant="h6"
            >
              Build me a playlist
          </Typography>
            <Button color="inherit">Signup</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Paper
          className={classes.optionPaper}
          elevation={1}
          square="false"
        >
          <Typography
          >
            TODO: fill in landing page (static site (serve separate index.html), nginx switch to home (react server) if valid session?)
            Fill in home page
            <Divider />
            <Button 
              component={Link}
              to="/explore"
              color="inherit"
            >
              Explore
            </Button>
            /explore
            <Divider />
            <Button
              component={Link}
              to="/ask"
              color="inherit"
            >
              Ask music
            </Button>
            /ask
            <Divider />
            <Button
              component={Link}
              to="/playlists"
              color="inherit"
            >
              My playlists
            </Button>
            /playlist/[HASH]
            <Divider />
            <Button
              component={Link}
              to="/search"
              color="inherit"
            >
              Search
            </Button>
            /search (do we even need this?)
            <Divider/>
          </Typography>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Search);
