import React, { Component } from 'react';

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
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={ this.state.title }
          onChange={ this.handleTitleChange } />
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={ this.state.artist }
          onChange={ this.handleArtistChange } />
        <input
          type="text"
          name="url"
          placeholder="Youtube URL"
          value={ this.state.url }
          onChange={ this.handleUrlChange } />
        <input type="submit" />
      </form>
    );
  }
};

export default SongForm;