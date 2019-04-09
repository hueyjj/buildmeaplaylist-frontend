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
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PlaylistItem from './PlaylistItem';
import Divider from '@material-ui/core/Divider';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

const styles = theme =>({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
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
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolBar: {
    minHeight: 0,
  },
});

class Playlist extends Component {
  state = {
    value: 0,
  }

  handleChangeTab = (event, value) => {
    this.setState({ value })
  }

  handleChangeTabIndex = index => {
    this.setState({ value: index })
  }

  getAllPlaylistItems = () => {
    return (
      <React.Fragment>
        <PlaylistItem
          songTitle="She will be loved"
          artist="Maroon 5"
          user="hueyjj"
          date="August 20, 2020"
          youtubeUrl="https://www.youtube.com/watch?v=nIjVuRTm-dc"
          upvotes={50}
        />
        <Divider/>
        <PlaylistItem
          songTitle="She will be loved"
          artist="Maroon 5"
          user="hueyjj"
          date="August 20, 2020"
          youtubeUrl="https://www.youtube.com/watch?v=nIjVuRTm-dc"
          upvotes={50}
        />
        <Divider/>
        <PlaylistItem
          songTitle="She will be loved"
          artist="Maroon 5"
          user="hueyjj"
          date="August 20, 2020"
          youtubeUrl="https://www.youtube.com/watch?v=nIjVuRTm-dc"
          upvotes={50}
        />
        <Divider/>
        <PlaylistItem
          songTitle="She will be loved"
          artist="Maroon 5"
          user="hueyjj"
          date="August 20, 2020"
          youtubeUrl="https://www.youtube.com/watch?v=nIjVuRTm-dc"
          upvotes={50}
        />
      </React.Fragment>
    );
  }

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
          className={classes.askingPaper}
          elevation={1}
          square="false"
        >
        </Paper>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChangeTab}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="All" />
            <Tab label="Added" />
            <Tab label="Removed" />
            <Tab label="Current playlist" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          //axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeTabIndex}
        >
          <TabContainer>{this.getAllPlaylistItems()}</TabContainer>
          <TabContainer>Item Two</TabContainer>
          <TabContainer>Item Three</TabContainer>
          <TabContainer>Item Four</TabContainer>
        </SwipeableViews>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Playlist);