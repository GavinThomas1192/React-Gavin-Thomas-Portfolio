import React from 'react'
import { withStyles } from 'material-ui/styles'
import WorkDialog from './workDialog'

import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card'



import Typography from 'material-ui/Typography'


const styles = theme => ({
  card: {
    opacity: 1,
    backgroundColor: 'rgba(255,255,255,0.0)',
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
class RecipeReviewCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { cardElevation: 24, expanded: false, fontSize: 24, cardOpacity: 1, shadow: 24, toggleDialogBox: false, imageSize: 194, fadeInSlow: true }
  }

  componentDidMount() {
    { this.props.feat === 'yes' ? this.setState({ fadeInSlow: false }) : undefined }
    window.addEventListener('resize', () => {
      { window.innerWidth < 720 ? this.setState({ fontSize: 16, cardOpacity: 1 }) : this.setState({ fontSize: 24 }) }
      // this.setState({ mediaQuery: true })
    })

    { window.innerWidth < 720 ? this.setState({ fontSize: 16, cardOpacity: 1 }) : undefined }
  }


  onMouseOver = () => {
    this.setState({ cardElevation: 5 })
    // this.handleShowDialogBox()
    // alert('works')

  }
  onMouseOut = () => {
    this.setState({ cardElevation: 24 })
    // this.handleShowDialogBox()
  }
  handleShowDialogBox = () => {
    this.setState({ toggleDialogBox: !this.state.toggleDialogBox })
  };

  handleMouseHover = () => {

  }


  render() {
    const { classes } = this.props
    return (
      <div id="blogCardBackground">
        {this.state.toggleDialogBox ? <WorkDialog project={this.props.project} show={'yes'} /> : undefined}
        <Card
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          style={{ opacity: this.state.cardOpacity, cursor: 'pointer' }}
          elevation={this.state.cardElevation}
          className={classes.card}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          onClick={this.handleShowDialogBox}
          square={false}
        >
          <CardHeader
            title={this.props.project.title}
            subheader={this.props.project.date}
          />
          <CardMedia
            style={{ height: this.state.imageSize }}
            className={classes.media}
            image={this.props.project.img}
            title={this.props.project.title}
          />
          <CardContent>
            <Typography style={{ fontSize: this.state.fontSize }} component="h4">
              {this.props.project.description}
            </Typography>
          </CardContent>
        </Card>

      </div>
    )
  }
}

export default withStyles(styles)(RecipeReviewCard)