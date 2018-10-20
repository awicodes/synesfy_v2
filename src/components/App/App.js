import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Question from '../Question/Question';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    };

    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  search() {
    Spotify.search().then(searchResults => {
      this.setState({searchResults: searchResults});
    });

    console.log(this.state.searchResults);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks});
  }

  render() {
    return (
      <div>
        <span className="title login">Synesfy</span>
        <div className="App">
          <div id="tag-line">
            Explore music with your senses.
            </div>
          <div id="blurb">
            Enjoy an audio experience that takes you on a journey through your senses.
            Explore smell, touch, sight, taste, and sound in a new way. How you feel is up to you.
            <br/><br/><br/>
            Get cozy and enjoy.
          </div>
          <Question />
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
