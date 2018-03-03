import React, { Component } from 'react';
import axios from 'axios';
import SongList from './SongList';
import SongForm from './SongForm';
import Footer from './Footer';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      openAddSongModal: false
    }
  }

  handleOpenAddSongModal = () => {
    this.setState({ openAddSongModal: true });
  }

  handleCloseAddSongModal = () => {
    this.setState({ openAddSongModal: false });
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

  render() {


    return (
      <Grid fluid={ true } className="App">
        <Navbar fluid={ true }>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">My Earworms</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#" onClick={ this.handleOpenAddSongModal }>
              Add Song
            </NavItem>
          </Nav>
        </Navbar>

        {
          this.state.data.length === 0
          ? <p className="loading-text text-center">Loading...</p>
          : <div>
              <SongList
                  data={ this.state.data }
                  onSongDelete={ this.handleSongDelete }
                  onSongUpdate={ this.handleSongUpdate } />

              <SongForm
                onSongSubmit={ this.handleSongSubmit }
                openAddSongModal={ this.state.openAddSongModal }
                handleCloseAddSongModal={ this.handleCloseAddSongModal } />
              </div>
        }
        <Footer />
      </Grid>

    );
  }
}

export default App;
