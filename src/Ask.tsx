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
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Header from './Header';

const styles = theme =>({
  askPaper: {
    ...theme.mixins.gutters(),
    alignItems: "center",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
  },
});

class Ask extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Paper
          className={classes.askPaper}
          elevation={1}
          square="false"
        >
          <TextField
            id="youtube-url-input"
            label="Enter a youtube url"
            placeholder="https://www.youtube.com/watch?v=eVTXPUF4Oz4"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="description-input"
            label="Description (why this music?)"
            multiline
            rows="10"
            placeholder="This particular music made me feel all warm and fuzzy in the inside"
            className={classes.textField}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/playlists"
          >
            Submit question
          </Button>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Ask);
