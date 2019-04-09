import React, { Component } from 'react';
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
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

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
  bigAvatar: {
    width: 60,
    height: 60,
  },
  userInfo: {
    paddingTop: theme.spacing.unit * 2,
  },
  description: {
    marginTop: theme.spacing.unit * 2,
  },
  expansionPanel: {
    marginTop: theme.spacing.unit * 2,
    width: "500px",
  },
  detail: {
    height: "400px",
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

  getAllMusic = () => {
    return (
      <React.Fragment>
        {[...Array(20).keys()].map(i => (
          <React.Fragment>
          <PlaylistItem
            index={i}
            songTitle="She will be loved"
            artist="Maroon 5"
            user="hueyjj"
            date="August 20, 2020"
            youtubeURL="https://www.youtube.com/watch?v=nIjVuRTm-dc"
            upvotes={50}
          />
          <Divider/>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }

  getAddedMusic = () => {
    return (
      <React.Fragment>
        {[...Array(20).keys()].map(i => (
          <React.Fragment>
          <PlaylistItem
            index={i}
            songTitle="She will be loved"
            artist="Maroon 5"
            user="hueyjj"
            date="August 20, 2020"
            youtubeURL="https://www.youtube.com/watch?v=nIjVuRTm-dc"
            upvotes={50}
          />
          <Divider/>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }

  getRemovedMusic = () => {
    return (
      <React.Fragment>
        {[...Array(20).keys()].map(i => (
          <React.Fragment>
          <PlaylistItem
            index={i}
            songTitle="She will be loved"
            artist="Maroon 5"
            user="hueyjj"
            date="August 20, 2020"
            youtubeURL="https://www.youtube.com/watch?v=nIjVuRTm-dc"
            upvotes={50}
          />
          <Divider/>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
  
  getCurrentPlaylist= () => {
    return (
      <React.Fragment>
        {[...Array(20).keys()].map(i => (
          <React.Fragment>
          <PlaylistItem
            index={i}
            songTitle="She will be loved"
            artist="Maroon 5"
            user="hueyjj"
            date="August 20, 2020"
            youtubeURL="https://www.youtube.com/watch?v=nIjVuRTm-dc"
            upvotes={50}
          />
          <Divider/>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }

  renderYoutube = () => {
    const embedYoutubeURL = "https://youtube.com/embed/nIjVuRTm-dc";

    return (
      <iframe
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={embedYoutubeURL}
        frameBorder="0"
      />
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
          <Grid container spacing={16}>
            <Grid item> 
              <Avatar
                className={classes.bigAvatar}
                alt="Jasper Jeng"
                src="/static/profilepic.jpeg"
              />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs>
                <Typography 
                  className={classes.userInfo}
                  align="left"
                  variant='h6'
                >
                  Jasper Jeng @ hueyjj
              </Typography>
              </Grid>
              <Grid item xs>
                <Typography align="right">
                  April 08, 2019
              </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Typography
            className={classes.description}
          >
            Hey guys! I'm looking for music that's about love and something along the lines of Maroon 5.
            Also, positive music is definitely preferred!
          </Typography>
          <ExpansionPanel
            className={classes.expansionPanel}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Maroon 5</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.detail}>
              {this.renderYoutube()}
            </ExpansionPanelDetails>
          </ExpansionPanel>
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
          {/* TODO: Must do lazy load. Rendering each PlaylistItem is too expensive */}
          <TabContainer>{this.getAllMusic()}</TabContainer>
          <TabContainer>{this.getAddedMusic()}</TabContainer>
          <TabContainer>{this.getRemovedMusic()}</TabContainer>
          <TabContainer>{this.getCurrentPlaylist()}</TabContainer>
        </SwipeableViews>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Playlist);