import React, { Component } from 'react';
import axios from 'axios';
import SongList from './SongList';
import SongForm from './SongForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  handleSongSubmit = (song) => {
    const clonedData = [ ...this.state.data ];
    const newData = clonedData.concat([song]);

    this.setState({ data: newData });

    axios.post(this.props.url, song)
      .catch((err) => {
        console.log(err);
        this.setState({ data: clonedData });
      });
  }

  handleSongDelete = (songId) => {
    axios.delete(`${this.props.url}/${songId}`)
      .then((res) => console.log('Song deleted.'))
      .catch((err) => console.log(err));
  }

  handleSongUpdate = (songId, updatedSong) => {
    axios.put(`${this.props.url}/${songId}`, updatedSong)
      .catch((err) => console.log(err));
  }

  loadSongsFromServer = () => {
    axios.get(this.props.url)
      .then((res) => this.setState({ data: res.data }));
  }

  componentDidMount() {
    this.loadSongsFromServer();
    setInterval(this.loadSongsFromServer, this.props.pollInterval);
  }

  componentWillUnmount() {
    this.req.abort();
  }

  render() {
    return (
      <div className="App">
        <h1>My Earworms App</h1>
        <SongList
          data={ this.state.data }
          onSongDelete={ this.handleSongDelete }
          onSongUpdate={ this.handleSongUpdate } />
        <SongForm onSongSubmit={ this.handleSongSubmit } />
      </div>
    );
  }
}

export default App;
