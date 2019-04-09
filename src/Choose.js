import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Header from './Header';

const music = [
  { songTitle: "Misery", artist: "Maroon 5", user: "hueyjj", date: "April 12, 2019", youtubeURL: "https://www.youtube.com/watch?v=6g6g2mvItp4", thumbsUp: 120 },
  { songTitle: "Maps", artist: "Maroon 5", user: "hueyjj", date: "April 15, 2019", youtubeURL: "https://www.youtube.com/watch?v=NmugSMBh_iI", thumbsUp: 40 },
  { songTitle: "Payphone ft. Wiz Khalifa", artist: "Maroon 5", user: "hueyjj", date: "April 30, 2019", youtubeURL: "https://www.youtube.com/watch?v=KRaWnd3LJfs", thumbsUp: 241 },
  { songTitle: "One More Night", artist: "Maroon 5", user: "hueyjj", date: "April 07, 2019", youtubeURL: "https://www.youtube.com/watch?v=fwK7ggA3-bU", thumbsUp: 544 },
  { songTitle: "Moves Like Jagger ft. Christina Aguilera", artist: "Maroon 5", user: "hueyjj", date: "August 12, 2019", youtubeURL: "https://www.youtube.com/watch?v=iEPTlhBmwRg", thumbsUp: 700 },
];

const styles = theme =>({
  card: {
    minWidth: "500px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 20,
  },
  media: {
    height: "400px",
  },
});

class Choose extends Component {
  state = {
    index: 0,
  }

  handleIncrementIndex = () => {
    this.setState({index: this.state.index + 1})
  }

  renderCard = () => {
    const { classes } = this.props;

    const rec = music[this.state.index]
    const youtubeID = rec.youtubeURL.split("v=")[1];
    const embedYoutubeURL = "https://youtube.com/embed/" + youtubeID;

    return(
      <div className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar
                aria-label="Pickachu"
                className={classes.avatar}
                src="/static/pickachu.png"
              />
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={rec.songTitle + " recommended by " + rec.user + " and " + rec.thumbsUp + " others"}
            subheader={rec.date}
          />
          <CardMedia
            className={classes.media}
            component="iframe"
            src={embedYoutubeURL}
            title={rec.songTitle}
            frameborder="0"
          />
          <CardContent>
            <Typography component="p">
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        {this.renderCard()}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Choose);
