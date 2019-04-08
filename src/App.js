import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import LandingPage from './LandingPage';
import Explore from './Explore';
import Ask from './Ask';
import Playlist from './Playlist';
import Search from './Search';

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

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/explore' component={Explore}/>
          <Route path='/ask' component={Ask}/>
          <Route path='/playlists' component={Playlist}/>
          <Route path='/search' component={Search}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
