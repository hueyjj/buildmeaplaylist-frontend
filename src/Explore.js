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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Header from './Header';

const thread = {
  title: "Looking for music like She Will Be Loved by Maroon 5",
  user: "hueyjj",
  date: "December 25, 2019",
  upvotes: 682,
};

const styles = theme =>({
  askingPaper: {
    ...theme.mixins.gutters(),
    alignItems: "center",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
  },
  itemText: {
    fontSize: "small",
  },
});

class Explore extends Component {
  renderThreads = () => {
    const { classes } = this.props;

    return (
      <React.Fragment>
        {[...Array(100).keys()].map(index => (
          <ListItem 
            button
            component={Link}
            to="/playlists"
            color="inherit"
          >
            <ListItemText classes={{ primary: classes.itemText }} primary={index} />
            <ListItemText classes={{ primary: classes.itemText }} primary={thread.upvotes + " upvotes"} />
            <ListItemText classes={{ primary: classes.itemText }} primary={thread.title} />
            <ListItemText classes={{ primary: classes.itemText }} primary={thread.user} />
            <ListItemText classes={{ primary: classes.itemText }} primary={thread.date} />
          </ListItem>
        ))}
      </React.Fragment>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Paper
          className={classes.askingPaper}
          elevation={1}
          square="false"
        >
        <List>
          {this.renderThreads()}
        </List>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Explore);
