import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
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

class Choose extends Component {
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

export default withStyles(styles)(Choose);
