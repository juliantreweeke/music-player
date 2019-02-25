import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Card from "./Components/Card";
import SearchBar from "./Components/SearchBar"

const Background = styled.div`

  width: 100%;
  height: 100%;
  background: #d2d8db;
  overflow: none;
`;

class App extends Component {

  state = { playing: false, key: null, query: '', data: null };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ key: res.key }))
      .catch(err => console.log(err));
  }

  select = (i) => {
    let trackOrder = this.state.data;
    let temp = trackOrder[0];
    trackOrder[0] = trackOrder[i];
    trackOrder[i] = temp;
    this.setState({ data: trackOrder, playing: true })
  }

  // Fetches GET route from the Express server to get the private key for soundcloud api
  callBackendAPI = async () => {
    const response = await fetch("/soundcloud/key");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };


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
