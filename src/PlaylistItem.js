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
});

//PlaylistItem creates a playlist item, and when clicked, it expands to
//show the embedded youtube video or spotify link, and more information.
class PlaylistItem extends Component {
  state = {
    isExpanded: false,
  }

  handleToggle= () => {
    this.setState({ isExpanded: !this.isExpanded });
  }

  render()  {
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
      <ExpansionPanel>
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
        {/* <ListItem
          button
          className={classes.itemRoot}
          onClick={this.handleToggle}
        >
        </ListItem> */}
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(PlaylistItem);