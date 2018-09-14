import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import ReactGA from 'react-ga';

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
            <h4>Skills:</h4>
            {this.state.mediaQuery ? (
              <div style={{ display: 'inline-flex' }}>
                <p style={{ paddingRight: '3em' }}>
                  <ul>
                    <li>Javascript (ES7)</li>
                    <li>React</li>
                    <li>React-Native</li>
                    <li>Redux</li>
                    <li>Sagas</li>
                    <li>Webpack</li>
                    <li>SASS</li>
                    <li>Node</li>
                    <li>Node CQRS</li>
                    <li>Firebase</li>
                  </ul>
                </p>
                <p>
                  <ul>
                    <li>Test Driven Development</li>
                    <li>Express</li>
                    <li>noSQL</li>
                    <li>MongoDB</li>
                    <li>Babel</li>
                    <li>Azure</li>
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>Git</li>
                    <li>Ember.js</li>
                    <li>Ruby on Rails</li>
                    <li>Python</li>
                  </ul>
                </p>{' '}
              </div>
            ) : (
                <p>
                  <ul>
                    <li>Javascript (ES7)</li>
                    <li>React</li>
                    <li>React-Native</li>
                    <li>Redux</li>
                    <li>Sagas</li>
                    <li>Webpack</li>
                    <li>SASS</li>
                    <li>Node</li>
                    <li>Node CQRS</li>
                    <li>Firebase</li>
                  </ul>
                  <ul>
                    <li>Test Driven Development</li>
                    <li>Express</li>
                    <li>noSQL</li>
                    <li>MongoDB</li>
                    <li>Babel</li>
                    <li>Azure</li>
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>Git</li>
                    <li>Ember.js</li>
                    <li>Ruby on Rails</li>
                    <li>Python</li>
                  </ul>
                </p>
              )}
          </div>
          <div id="skills" className="seven">
            <p>
              <strong>Software development: this is what I live for.</strong>
            </p>
            <br />
            <p>
              <strong>
                I love making things that people get excited about using.
              </strong>{' '}
              Nothing is more satisfying than being able to build something
              yourself. Armed with tools like React, Node, and Javascript, I
              have everything I need to create something great from scratch.
              Interested in hiring me?{' '}
              <Link style={{ textDecoration: 'underline' }} to={'/contact'}>
                Let's talk.
              </Link>
              {/* <strong>Software</strong> development provides me with the ability to put my strong problem solving abilities to the test everyday. I love solving user experience problems through Javascript. Javascript can do amazing things, front end, back end, UI, and usable with the best frameworks! This is what I live for. */}
            </p>
            <br />

            <p>
              <strong>
                Being a dev gives me the chance to solve problems and create
                intuitive experiences for users everyday.
              </strong>{' '}
              I have a genuine curiosity about how things work - which is why I
              love working on both the back end and front end. I hold a
              certification in Javascript and am teaching myself new frameworks
              and languages all the time - just check out my{' '}
              <a
                style={{ textDecoration: 'underline' }}
                href="https://github.com/GavinThomas1192"
                target="_blank"
              >
                {' '}
                Github account.{' '}
              </a>
            </p>
            <br />

            <p>
              <strong>If you need a project or website, I can build it.</strong>{' '}
              I'll ask you the right questions so we can come up with a website
              that truly fits your needs or those of your customers. Just send
              me an{' '}
              <a
                style={{ textDecoration: 'underline' }}
                href="mailto:gthomas1192@gmail.com"
              >
                email.
              </a>
            </p>
            <br />
            <p>
              <strong>
                I am also available for advice or mentorship to junior
                developers and beginning coders.
              </strong>{' '}
              Please get in touch if you are interested in collaborating or
              learning something new.{' '}
              {/* <strong>If</strong> you need a project built, advice, or mentorship please reach out to me.{' '} */}
            </p>
            <Link style={{ textDecoration: 'none' }} to="/contact">
              <Button style={{ marginTop: 20 }} raised color="primary">
                Contact
              </Button>
            </Link>
          </div>
        </section>
      </div>
    )
  }
}
