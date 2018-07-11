import React from 'react'
import Grid from 'material-ui/Grid'
import AdvancedGridList from '../components/workCard'
import projects from '../utils/clients'
import ReactGA from 'react-ga'


export default class MyWork extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mediaQuery: false,
        }
    }
    componentDidMount() {
        ReactGA.set({ page: location.pathname })
        ReactGA.pageview(this.props.history.location.pathname)
        document.title = 'Gavin Thomas'
        window.addEventListener('resize', () => {
            { window.innerWidth < 1200 ? this.setState({ mediaQuery: true }) : this.setState({ mediaQuery: false }) }
        })

        { window.innerWidth < 1200 ? this.setState({ mediaQuery: true }) : undefined }
    }
    render() {
        return (
            <div className="uppy">
                <section className="container">
                    <h3 className="col-1-of-1 headline">Work</h3>
                </section>
                <section id="topSpacing">
                    <Grid container spacing={24} justify={'center'}>
                        {this.props.hi}
                        {projects.map(ele => (

                            ele.featured === true || this.state.mediaQuery ?
                                <Grid id="uppyMediumSlow" item xs={10}>
                                    <AdvancedGridList feat={'yes'} project={ele} />
                                </Grid>
                                :
                                < Grid id="uppySlow" item xs={5}>
                                    <AdvancedGridList feat={'no'} project={ele} />
                                </Grid>


                        ))}
                    </Grid>

                </section>


            </div >
        )
    }
}


