import React, { Component } from 'react';
import { Button, Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class SongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist: '',
      url: ''
    }
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleArtistChange = (e) => {
    this.setState({ artist: e.target.value });
  }

  handleUrlChange = (e) => {
    this.setState({ url: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.state.title.trim();
    const artist = this.state.artist.trim();
    const url = this.state.url.trim();

    if (!title || !artist || !url ) { return }
    this.props.onSongSubmit({ title, artist, url });
    this.setState({
      title: '',
      artist: '',
      url: ''
    });

    this.props.handleCloseAddSongModal();
  }

  getValidationState = (str) => {
    if (str.length > 0) {
      return 'success';
    }
    return 'error';
  }

  render() {
    return (
      <div>
        <Modal show={ this.props.openAddSongModal } onHide={ this.props.handleCloseAddSongModal }>
          <Modal.Header closeButton>
            <Modal.Title>Add New Song</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="SongForm" onSubmit={ this.handleSubmit }>
              <ControlLabel>Title</ControlLabel>
              <FormGroup controlId="addSongTitle" validationState={ this.getValidationState(this.state.title) }>
                <FormControl
                  type="text"
                  placeholder="Title"
                  value={ this.state.title }
                  onChange={ this.handleTitleChange } />
                <FormControl.Feedback />
              </FormGroup>

              <ControlLabel>Artist</ControlLabel>
              <FormGroup controlId="addArtist" validationState={ this.getValidationState(this.state.artist) }>
                <FormControl
                  type="text"
                  placeholder="Artist"
                  value={ this.state.artist }
                  onChange={ this.handleArtistChange }  />
                <FormControl.Feedback />
              </FormGroup>

              <ControlLabel>Youtube URL</ControlLabel>
              <FormGroup controlId="addYoutubeUrl" validationState={ this.getValidationState(this.state.url) }>
                <FormControl
                  type="text"
                  placeholder="Youtube URL"
                  value={ this.state.url }
                  onChange={ this.handleUrlChange } />
                <FormControl.Feedback />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ this.props.handleCloseAddSongModal }>Close</Button>
            <Button bsStyle="primary" onClick={ this.handleSubmit }>Add Song</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default SongForm;