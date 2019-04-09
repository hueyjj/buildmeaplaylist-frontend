import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

    return(
      <ListItem
        button
        className={classes.itemRoot}
        onClick={this.handleToggle}
      >
        <ListItemText classes={{ primary: classes.itemText }} primary={songTitle} />
        <ListItemText classes={{ primary: classes.itemText }} primary={artist} />
        <ListItemText classes={{ primary: classes.itemText }} primary={artist} />
        <ListItemText classes={{ primary: classes.itemText }} primary={user} />
        <ListItemText classes={{ primary: classes.itemText }} primary={date} />
        <ListItemText classes={{ primary: classes.itemText }} primary={youtubeURL} />
        <ListItemText classes={{ primary: classes.itemText }} primary={upvotes} />
      </ListItem>
    );
  }
}

export default withStyles(styles)(PlaylistItem);