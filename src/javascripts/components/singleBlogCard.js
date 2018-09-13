import React from 'react';
import { withStyles } from 'material-ui/styles';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';
import Card, {
  CardHeader,
  CardContent,
} from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import classnames from 'classnames';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import RemoveIcon from 'material-ui-icons/Remove';


import blogs from '../utils/blogs';
import Typography from 'material-ui/Typography';
import ReactGA from 'react-ga';

const FacebookIcon = generateShareIcon('facebook')
const TwitterIcon = generateShareIcon('twitter')
const GooglePlusIcon = generateShareIcon('google')
const LinkedinIcon = generateShareIcon('linkedin')


const styles = theme => ({
  card: {
    opacity: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  media: {
    height: 194,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#212121',
  },
  flexGrow: {
    flex: '1 1 auto',
  },
})

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,

} = ShareButtons

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
} = ShareCounts

class RecipeReviewCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      widths: { maxWidth: '75%', width: '100%' },
      fontSize: 16,
      codeTextSize: { fontSize: 14 },
      singleBlog: '',
      expanded: false,
      cardOpacity: 1,
      shadow: 24,
      toggleDialogBox: false,
      imageSize: 194,
      fadeInSlow: true,
    }
  }

  componentDidMount() {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(this.props.history.location.pathname)
    this.setSingleBlog()
    window.addEventListener('resize', () => {
      window.innerWidth < 720
        ? this.setState({ widths: {}, fontSize: 12 })
        : this.setState({
          widths: { maxWidth: '75%', width: '100%' },
          fontSize: 16,
        })
    })

    window.innerWidth < 720 && this.setState({ widths: {}, fontSize: 12 })
  }

  setSingleBlog() {
    blogs.map(ele => {
      ele.url == this.props.match.params.slug &&
        this.setState({ singleBlog: ele }, () => {
          document.title = `${this.state.singleBlog.title}`
        })
    })
  }

  handleExpand = () => {
    this.setState({ expanded: !this.state.expanded })
  };

  handleCodeBig = () => {
    this.setState({
      codeTextSize: { fontSize: this.state.codeTextSize.fontSize + 1 },
    })
  };

  handleCodeSmall = () => {
    this.setState({
      codeTextSize: { fontSize: this.state.codeTextSize.fontSize - 1 },
    })
  };

  render() {
    const { classes } = this.props
    const { singleBlog } = this.state
    return (
      <div style={this.state.widths} id="workCardBackground">
        <Card
          style={{ opacity: this.state.cardOpacity }}
          elevation={24}
          className={classes.card}
          square={false}
        >
          <CardHeader
            title={singleBlog.title}
            subheader={singleBlog.date}
          />

          {singleBlog.bodyTop && (
            <CardContent>
              <Typography
                style={{ fontSize: this.state.fontSize }}
                component="h4"
              >
                {singleBlog.bodyTop}
              </Typography>
            </CardContent>
          )}

          {/* ******* if code answer show this block with answer            */}
          {singleBlog.media && singleBlog.codeAnswer ? (
            <div>
              <Button
                fab
                mini
                style={{
                  color: 'black',
                  backgroundColor: '#ffffff99',
                  marginLeft: '2em',
                  marginRight: '1em',
                }}
                onClick={this.handleCodeBig}
                color="primary"
                aria-label="add"
                className={classes.button}
              >
                <AddIcon />
              </Button>
              <Button
                fab
                mini
                style={{ color: 'black', backgroundColor: '#ffffff99' }}
                onClick={this.handleCodeSmall}
                color="primary"
                aria-label="add"
                className={classes.button}
              >
                <RemoveIcon />
              </Button>
              <CardContent>
                <Typography style={this.state.codeTextSize} component="h4">
                  {/* <SyntaxHighlighter language='javascript' style={atomOneDark}>{singleBlog.code}</SyntaxHighlighter> */}
                  {singleBlog.code}
                </Typography>
                <Typography
                  style={{ fontSize: 12, paddingTop: '1em' }}
                  component="h4"
                >
                  {singleBlog.codeAnswerText}
                </Typography>
              </CardContent>

              {/* ********expand button!!!  */}
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpand}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
              {/* ******** end expand button!!!  */}
              {/* *********** CODE ANSWER */}
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Button
                    fab
                    mini
                    style={{
                      color: 'black',
                      backgroundColor: '#ffffff99',
                      marginLeft: '2em',
                      marginRight: '1em',
                    }}
                    onClick={this.handleCodeBig}
                    color="primary"
                    aria-label="add"
                    className={classes.button}
                  >
                    <AddIcon />
                  </Button>
                  <Button
                    fab
                    mini
                    style={{ color: 'black', backgroundColor: '#ffffff99' }}
                    onClick={this.handleCodeSmall}
                    color="primary"
                    aria-label="add"
                    className={classes.button}
                  >
                    <RemoveIcon />
                  </Button>
                  <Typography style={this.state.codeTextSize} component="h4">
                    {singleBlog.codeAnswer}
                  </Typography>
                </CardContent>
              </Collapse>
              {/* * ***********END CODE ANSWER  */}
            </div>
          ) : (
              <div>
                <CardContent>
                  <Typography style={this.state.codeTextSize} component="h4">
                    {/* <SyntaxHighlighter language='javascript' style={atomOneDark}>{singleBlog.code}</SyntaxHighlighter> */}
                    {singleBlog.code}
                  </Typography>
                </CardContent>
              </div>
            )}
          <CardContent>
            <Typography
              style={{ fontSize: this.state.fontSize }}
              component="h4"
            >
              {singleBlog.body}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography
              style={{ fontSize: this.state.fontSize }}
              component="h4"
            >
              {singleBlog.body2}
            </Typography>
          </CardContent>

          {singleBlog.links && (
            <CardContent>
              <Typography style={{ fontSize: 12 }} component="h4">
                {singleBlog.links.map(ele => (
                  <Typography style={{ fontSize: 12 }} component="h4">
                    <a
                      href={singleBlog.links}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      {ele}
                    </a>
                  </Typography>
                ))}
              </Typography>
            </CardContent>
          )}

          <CardContent>
            <Typography
              style={{ fontSize: 12, display: 'inline-flex' }}
              component="h4"
            >
              <TwitterShareButton
                url={`https://gthomas.me/blog/${singleBlog.url}`}
                title={singleBlog.title}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>

              <LinkedinShareButton
                url={`https://gthomas.me/blog/${singleBlog.url}`}
                title={singleBlog.title}
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>

              <FacebookShareButton
                url={`https://gthomas.me/blog/${singleBlog.url}`}
                title={singleBlog.title}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <GooglePlusShareButton
                url={`https://gthomas.me/blog/${singleBlog.url}`}
                title={singleBlog.title}
              >
                <GooglePlusIcon size={32} round />
              </GooglePlusShareButton>

              <RedditShareButton
                url={`https://gthomas.me/blog/${singleBlog.url}`}
                title={singleBlog.title}
              >
                <RedditShareButton size={32} round />
              </RedditShareButton>
            </Typography>
          </CardContent>

          {singleBlog.pictures && (
            <div style={{ paddingBottom: '2em' }}>
              <img
                style={{
                  margin: 'auto',
                  border: '5px solid black',
                  maxWidth: '50%',
                  maxHeight: '50%',
                }}
                src={singleBlog.pictures}
              />
            </div>
          )}
        </Card>
      </div>
    )
  }
}


export default withStyles(styles)(RecipeReviewCard)
