import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme =>({
  itemRoot: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemText: {
    fontSize: "small",
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
      youtubeURL,
    } = this.props;

    if (!this.state.isExpanded) {
      return null;
    }

    const youtubeID = youtubeURL.split("v=")[1];
    const embedYoutubeURL = "https://youtube.com/embed/" + youtubeID;

    return (
      <iframe
        style={{
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
      index,
      songTitle,
      artist,
      user,
      date,
      youtubeURL,
      thumbsUp,
    } = this.props;

    return (
      <ExpansionPanel onChange={this.handleToggle}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <ListItemText classes={{ primary: classes.itemText }} primary={index} />
          <ListItemText classes={{ primary: classes.itemText }} primary={songTitle} />
          <ListItemText classes={{ primary: classes.itemText }} primary={artist} />
          <ListItemText classes={{ primary: classes.itemText }} primary={user} />
          <ListItemText classes={{ primary: classes.itemText }} primary={date} />
          <ListItemText classes={{ primary: classes.itemText }} primary={youtubeURL} />
          <ListItemText classes={{ primary: classes.itemText }} primary={thumbsUp} />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {this.renderDetails()}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(PlaylistItem);