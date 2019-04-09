import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const styles = theme =>({
  itemRoot: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemText: {
    fontSize: "small",
  },
  youtube: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

//PlaylistItem creates a playlist item, and when clicked, it expands to
//show the embedded youtube video or spotify link, and more information.
class PlaylistItem extends Component {
  state = {
    isExpanded: false,
  }

  handleToggle= (event, expanded) => {
    this.setState({ isExpanded: expanded });
  }

  renderDetails = () => {
    const { 
      classes,
      songTitle,
      artist,
      user,
      date,
      youtubeURL,
      upvotes,
    } = this.props;

    if (!this.state.isExpanded) {
      return null;
    }

    const youtubeID = youtubeURL.split("v=")[1];
    const embedYoutubeURL = "https://youtube.com/embed/" + youtubeID;

    return (
      <iframe
        style={{
          //position: "absolute",
          top: 0,
          left: 0,
          width: "200px",
          height: "200px",
        }}
        src={embedYoutubeURL}
        frameBorder="0"
      />
    );
  }

  render() {
    const { 
      classes,
      songTitle,
      artist,
      user,
      date,
      youtubeURL,
      upvotes,
    } = this.props;

    return (
      <ExpansionPanel onChange={this.handleToggle}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          {/* <Typography className={classes.heading}>Expansion Panel 1</Typography> */}
          <ListItemText classes={{ primary: classes.itemText }} primary={songTitle} />
          <ListItemText classes={{ primary: classes.itemText }} primary={artist} />
          <ListItemText classes={{ primary: classes.itemText }} primary={artist} />
          <ListItemText classes={{ primary: classes.itemText }} primary={user} />
          <ListItemText classes={{ primary: classes.itemText }} primary={date} />
          <ListItemText classes={{ primary: classes.itemText }} primary={youtubeURL} />
          <ListItemText classes={{ primary: classes.itemText }} primary={upvotes} />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {this.renderDetails()}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(PlaylistItem);