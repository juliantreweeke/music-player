import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Card from "./Components/Card";
import SearchBar from "./Components/SearchBar"
import { connect } from 'react-redux';

import { simpleAction } from './actions/simpleAction';


const Background = styled.div`
  width: 100%;
  height: 100%;
  background: #d2d8db;
  overflow: none;
`;

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

class App extends Component {

  
  componentDidMount(){
    console.log('olo', this.props)
  }

  simpleAction = (event) => {
    this.props.simpleAction();
   }

  
  select = (i) => {
    let trackOrder = this.state.data;
    let temp = trackOrder[0];
    trackOrder[0] = trackOrder[i];
    trackOrder[i] = temp;
    this.setState({ data: trackOrder, playing: true })
  }

  searchTracks = () => {
    const SOUNDCLOUD_API_KEY = process.env.REACT_APP_SOUNDCLOUD_API_KEY;
    const { query } = this.props;
    fetch(
      `https://api.soundcloud.com/tracks/?client_id=${SOUNDCLOUD_API_KEY}&q=${query}`
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
    const { playing, data } = this.props;
    const { handleInputChange, searchTracks, togglePlay, select } = this;

    return (
      <div className="App">
        <Background>
        <pre>
          {
            JSON.stringify(this.props)
          }
          </pre>
        <button onClick={this.simpleAction}>Test redux action</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);

