import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import ReactGA from 'react-ga';
import Me from '../../img/454.jpg'
import './_test.scss';

export default class NewHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mediaQuery: false,
    }
  }
  componentDidMount() {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(this.props.history.location.pathname)

    document.title = 'Home';
    window.addEventListener('resize', () => {
      {
        window.innerWidth < 480
          ? this.setState({ mediaQuery: true })
          : this.setState({ mediaQuery: false })
      }
      // this.setState({ mediaQuery: true })
    })
  }

  render() {
    return (
      <div>
        <section className="container uppy">
          <Paper id="titleCard" elevation={24}>
            <div>
              <Typography>
                <h1>Full Stack Software Developer</h1>
                <h2>
                  Forging dynamic solutions, fueled by a passion for code.
                </h2>
              </Typography>
            </div>
          </Paper>
        </section>
        <section id="cardBackground" className="container uppy">
          <div id="skills" className="five">
            <img src={Me} />
          </div>
        </section>
      </div>
    )
  }
}
