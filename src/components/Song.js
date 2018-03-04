import React, { Component } from 'react';
import { Col, Panel, Dropdown, Glyphicon, MenuItem, Button, Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      artist: this.props.artist,
      url: this.props.url,
      openEditSongModal: false
    };
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

  handleSongUpdate = (e) => {
    e.preventDefault();

    const songId = this.props.uniqueId;
    const title = this.state.title ? this.state.title : null;
    const artist = this.state.artist ? this.state.artist : null;
    const url = this.state.url ? this.state.url : null;
    const song = { title, artist, url };

    this.props.onSongUpdate(songId, song);
    this.setState({
      title: this.props.title,
      artist: this.props.artist,
      url: this.props.url
    });
    this.handleCloseEditSongModal();
  }

  handleSongDelete = (e) => {
    this.props.onSongDelete(this.props.uniqueId);
  }

  handleOpenEditSongModal = () => {
    this.setState({ openEditSongModal: true });
  }

  handleCloseEditSongModal = () => {
    this.setState({ openEditSongModal: false });
  }

  getValidationState = (str) => {
    if (str.length > 0 || str == null) {
      return 'success';
    }
    return 'error';
  }

  render() {
    const url = this.props.url.replace('watch?v=', 'embed/');

    return (
      <div className="Song">
        <Col xs={12} sm={4}>
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">{ this.props.title } - { this.props.artist }</Panel.Title>
              <Dropdown pullRight={ true }>
                <Dropdown.Toggle noCaret>
                  <Glyphicon glyph="list" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <MenuItem onSelect={ this.handleOpenEditSongModal }>
                    <Glyphicon glyph="pencil" />Edit Song
                  </MenuItem>
                  <MenuItem onSelect={ this.handleSongDelete }>
                    <Glyphicon glyph="trash" />Delete Song
                  </MenuItem>
                </Dropdown.Menu>
              </Dropdown>
            </Panel.Heading>

            <Panel.Body>
              <iframe src={ url } title="Youtube Video" width="100%" height="220" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </Panel.Body>
          </Panel>
        </Col>

        <Modal show={ this.state.openEditSongModal } onHide={ this.handleCloseEditSongModal }>
          <Modal.Header closeButton>
            <Modal.Title>Edit Song</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={ this.handleSongUpdate }>
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
            <Button onClick={ this.handleCloseEditSongModal }>Close</Button>
            <Button bsStyle="primary" onClick={ this.handleSongUpdate }>Update Song</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Song;