import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Card from "./Components/Card";
import SearchBar from "./Components/SearchBar"
// require('dotenv').config({ path: '/' })


const Background = styled.div`
  width: 100%;
  height: 100%;
  background: #d2d8db;
  overflow: none;
`;

class App extends Component {

  state = { playing: false, key: process.env.REACT_APP_SOUNDCLOUD_API_KEY, query: '', data: null };

  componentDidMount(){
    console.log('olo', this.state)
  }

  select = (i) => {
    let trackOrder = this.state.data;
    let temp = trackOrder[0];
    trackOrder[0] = trackOrder[i];
    trackOrder[i] = temp;
    this.setState({ data: trackOrder, playing: true })
  }

  searchTracks = () => {
    const { key, query } = this.state;
    fetch(
      `https://api.soundcloud.com/tracks/?client_id=${key}&q=${query}`
    ).then(response => {
      if (response.status != 200) {
        console.log(response.status);
        return;
      }
      response.json().then(data => {
        if (data) {
          this.setState({ data: data })
          console.log(this.state.data);
        }
      });
    });
  }

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  togglePlay = () => this.setState(state => ({ playing: !state.playing }));

  render() {
    const { handleInputChange, searchTracks, togglePlay, select } = this;
    const { playing, data } = this.state;

    return (
      <div className="App">
        <Background>
          <SearchBar
            playing={playing}
            handleInputChange={handleInputChange}
            searchTracks={searchTracks} />
          <Card select={select} data={data} playing={playing} togglePlay={togglePlay} />
        </Background>
      </div>
    );
  }
}

export default App;
