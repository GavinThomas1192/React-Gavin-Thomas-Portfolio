import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog'

class ResponsiveDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  componentDidMount() {
    { this.props.show === 'yes' ? this.handleClickOpen() : undefined }
  }

  handleClickOpen = () => {
    this.setState({ open: !this.state.open })
  };

  handleClose = () => {
    this.setState({ open: !this.state.open })
  };

  render() {
    const { fullScreen } = this.props

    return (
      <div >

        <Dialog

          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{this.props.project.title}</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
            {this.props.project.video ? 
             
                <div>

                <br/>
                <video loop autoPlay controls>
                  <source src={this.props.project.video} type="video/mov" />
                  Your browser doe not support this video!
                </video>
                </div>
             
                : undefined 
                
            }
               
            </DialogContentText> */}
            <DialogContentText style={{ color: 'black' }}>
              <h3>{this.props.project.stack}</h3><br />
              <h4>
                {this.props.project.technicalDescription}
              </h4>
            </DialogContentText>
            <DialogContentText>
              {this.props.project.secondaryPictures.map(ele => (
                <div>

                  <br />
                  <img src={ele} />
                </div>
              ))}

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            <a href={this.props.project.github} target='_blank'>
              <Button onClick={this.handleClose} color="primary">
                Github
            </Button></a>
            <a href={this.props.project.link} target='_blank' ><Button onClick={this.handleClose} color="primary" autoFocus>
              Link
            </Button></a>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
}

export default withMobileDialog()(ResponsiveDialog)