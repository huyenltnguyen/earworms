import React, { Component } from 'react';

class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateForm: false,
      title: '',
      artist: '',
      url: ''
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

  showUpdateForm = () => {
    this.setState({ updateForm: !this.state.updateForm });
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
      updateForm: !this.state.updateForm,
      title: '',
      artist: '',
      url: ''
    });
  }

  handleSongDelete = (e) => {
    e.preventDefault();
    this.props.onSongDelete(this.props.uniqueId);
  }

  render() {
    return (
      <div>
        <h2>{ this.props.title } - { this.props.artist }</h2>
        <h3>{ this.props.url }</h3>
        <button onClick={ this.showUpdateForm }>Update</button>
        <button onClick={ this.handleSongDelete }>Delete</button>
        {
          this.state.updateForm ? (
            <form onSubmit={ this.handleSongUpdate }>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={ this.props.title }
                onChange={ this.handleTitleChange } />
              <input
                type="text"
                name="artist"
                placeholder="Artist"
                value={ this.props.artist }
                onChange={ this.handleArtistChange } />
              <input
                type="text"
                name="url"
                placeholder="Youtube URL"
                value={ this.props.url }
                onChange={ this.handleUrlChange } />
              <input type="submit" />
            </form>
          )
          : null
        }
      </div>
    );
  }
}

export default Song;