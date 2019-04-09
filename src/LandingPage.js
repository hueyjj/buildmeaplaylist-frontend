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
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import Header from './Header';

const styles = theme =>({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  landingPaper: {
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
  rightIcon: {
    marginRight: theme.spacing.unit * 2,
  },
});

class LandingPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Paper
          className={classes.landingPaper}
          elevation={1}
          square="false"
        >
          <Typography>
            TODO: fill in landing page (static site (serve separate index.html), nginx switch to home (react server) if valid session?)
            Fill in home page
            <Divider />
            <Button 
              component={Link}
              to="/explore"
              color="inherit"
            >
              <SearchIcon className={classes.rightIcon} />
              Explore
            </Button>
            /explore
            <Divider />
            <Button
              component={Link}
              to="/ask"
              color="inherit"
            >
              <CreateIcon className={classes.rightIcon} />
              Ask music
            </Button>
            /ask
            <Divider />
            <Button
              component={Link}
              to="/playlists"
              color="inherit"
            >
              <PlaylistAddCheckIcon className={classes.rightIcon} />
              My playlists
            </Button>
            /playlists/[HASH]
            <Divider />
            <Button
              component={Link}
              to="/choose"
              color="inherit"
            >
              <ThumbsUpDownIcon className={classes.rightIcon} />
              Choose
            </Button>
            /choose 
            <Divider/>
          </Typography>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LandingPage);
