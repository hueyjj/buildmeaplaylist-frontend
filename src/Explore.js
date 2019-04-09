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
import Header from './Header';

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

class Explore extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Explore);
