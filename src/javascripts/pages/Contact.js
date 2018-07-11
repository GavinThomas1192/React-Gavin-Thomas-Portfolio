import React from 'react';
import firebase from 'firebase';
import axios from 'axios';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import SendIcon from 'material-ui-icons/Send';
import ReactGA from 'react-ga';

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
      isSubmitting: false,
      buttonState: 'Send Message',
      name: '',
      email: '',
      message: '',
      errors: false,
    }
  }

  componentDidMount() {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(this.props.history.location.pathname)
    document.title = 'Contact';
    const config = {
      apiKey: 'AIzaSyDSslYWMNOKBctjgImLmEXoo47owiuEWvg',
      authDomain: 'react-portfolio-18a58.firebaseapp.com',
      databaseURL: 'https://react-portfolio-18a58.firebaseio.com',
      projectId: 'react-portfolio-18a58',
      storageBucket: 'react-portfolio-18a58.appspot.com',
      messagingSenderId: '453774721585',
    }
    firebase.initializeApp(config)
  }

  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  };

  validateForm = formData => ({
    name: formData.name.length > 0,
    email: /.+@.+/.test(formData.email),
    message: formData.message.length > 0,
  });

  handleSubmit = async e => {
    e.preventDefault()

    const { name, email, message } = this.state
    const formSpree = 'https://formspree.io/gthomas1192@gmail.com';

    const variables = { name, email, message }
    const validateForm = this.validateForm(variables)

    const valid = Object.keys(validateForm).every(
      v => validateForm[v] === true
    )
    if (valid) {
      try {
        const data = {
          name,
          email,
          message,  
          }
        await axios.post(formSpree, {data})
            this.setState({
              submitted: true,
              name: '',
              email: '',
              message: '',
          })
      }
      catch(error){() => console.log('error', error)}
       

      this.setState({
        submitted: true,
        name: '',
        email: '',
        message: '',
      })
    } else {
      this.setState({
        errors: true,
      })
    }
  };
  render() {
    return (
      <section id="cardBackground" className="contact container uppy small">
        <div className="col-1-of-1">
          <h1>I'm happy to help with anything you need...</h1>
          <h2>
            My personal email is{' '}
            <a href="mailto:gthomas1192@gmail.com">gthomas1192@gmail.com</a>
          </h2>
        </div>

        <form id="form" noValidate autoComplete="on">
          <TextField
            id="name"
            label="Name"
            placeholder="Gavin Thomas"
            error={this.state.errors}
            margin="normal"
            onChange={this.handleInputChange('name')}
            value={this.state.name}
          />
          <br />
          <TextField
            id="email"
            label="Email"
            placeholder="helloworld@test.com"
            onChange={this.handleInputChange('email')}
            margin="normal"
            error={this.state.errors}
            value={this.state.email}
          />
          <br />
          <TextField
            id="message"
            label="Message"
            placeholder="What's up?"
            style={{ width: '100%' }}
            multiline
            onChange={this.handleInputChange('message')}
            margin="normal"
            error={this.state.errors}
            value={this.state.message}
          />
          <br />
          {this.state.errors ? (
            <h1>Whoops! Lets fill out all the options...</h1>
          ) : (
            undefined
          )}
          {this.state.submitted ? (
            <h1>Thanks! I'll be in touch with you soon!</h1>
          ) : (
            undefined
          )}
          <Button onClick={this.handleSubmit} raised color="primary">
            <SendIcon />
          </Button>
        </form>
      </section>
    )
  }
}
