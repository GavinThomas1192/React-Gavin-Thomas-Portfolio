import React from 'react'
import { withStyles } from 'material-ui/styles'
import WorkDialog from './workDialog'
import { Link } from 'react-router-dom'
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';


import Typography from 'material-ui/Typography'


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
class RecipeReviewCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { widths: { width: '75%', maxWidth: '100%' }, fontSize: 16, expanded: false, cardOpacity: 1, shadow: 24, toggleDialogBox: false, imageSize: 194, fadeInSlow: true }
    }

    componentDidMount() {
        { this.props.feat === 'yes' ? this.setState({ imageSize: 500, fadeInSlow: false }) : undefined }

        window.addEventListener('resize', () => {
            { window.innerWidth < 720 ? this.setState({ widths: {}, fontSize: 12 }) : this.setState({ widths: { maxWidth: '75%', width: '100%' }, fontSize: 16 }) }
            // this.setState({ mediaQuery: true })
        })

        { window.innerWidth < 720 ? this.setState({ widths: {}, fontSize: 12 }) : undefined }

    }

    onMouseOver = () => {
        this.setState({ elevation: 1 })
    }

    onMouseOut = () => {
        this.setState({ elevation: 24 })
    }


    render() {
        const { classes } = this.props
        return (


            <div style={this.state.widths} id="workCardBackground">

                <Link to={`/blog/${this.props.blog.url}`}>
                    <Card
                        onMouseOver={this.onMouseOver}
                        onMouseOut={this.onMouseOut}
                        onClick={this.handleShowDialogBox}
                        style={{ opacity: this.state.cardOpacity }}
                        elevation={this.state.elevation}
                        className={classes.card}
                        square={false}

                    >
                        <CardHeader
                            title={this.props.blog.title}
                            subheader={this.props.blog.date}
                        />

                        <CardContent>
                            <Typography style={{ fontSize: this.state.fontSize }} component="h4">
                                {this.props.blog.body}

                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography style={{ fontSize: 8 }} component="h4">
                                Read on...

                            </Typography>
                        </CardContent>



                    </Card></Link>

            </div>
        )
    }
}

// RecipeReviewCard.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(RecipeReviewCard)