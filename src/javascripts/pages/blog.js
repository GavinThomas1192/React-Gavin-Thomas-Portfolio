import React from 'react'
import Grid from 'material-ui/Grid'
import BlogCard from '../components/BlogCard'
import blogs from '../utils/blogs'
import ReactGA from 'react-ga'





export default class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mediaQuery: false,
        }
    }
    componentDidMount() {
        ReactGA.set({ page: location.pathname })
        ReactGA.pageview(this.props.history.location.pathname)

        document.title = 'Gavin Thomas Blog'

        window.addEventListener('resize', () => {
            { window.innerWidth < 1200 ? this.setState({ mediaQuery: true }) : this.setState({ mediaQuery: false }) }
        })

        { window.innerWidth < 1200 ? this.setState({ mediaQuery: true }) : undefined }
    }



    render() {
        return (
            <div className="uppy">

                <section id="topSpacing">
                    <Grid container spacing={24} justify={'center'}>
                        {blogs.map(ele => (


                            <Grid id="uppyMediumSlow" item xs={10}>
                                <BlogCard params={this.props.match.params} blog={ele} />
                            </Grid>




                        ))}
                    </Grid>

                </section>
            </div >
        )
    }
}


