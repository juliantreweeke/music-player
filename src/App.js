import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Card from "./Components/Card";
import SearchBar from "./Components/SearchBar"
import { connect } from 'react-redux';
import { actions } from './redux/ducks/index.js';

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
  selectTrack: (index) => dispatch(actions.selectTrack(index)),
  setData: (data) => dispatch(actions.setData(data)),
  setPlay: () => dispatch(actions.setPlay()),
  setQuery: (query) => dispatch(actions.setQuery(query)),
  togglePlay: () => dispatch(actions.togglePlay()),
 })

class App extends Component {

  searchTracks = () => {
    const SOUNDCLOUD_API_KEY = process.env.REACT_APP_SOUNDCLOUD_API_KEY;
    const { query } = this.props;

    fetch(
      `https://api.soundcloud.com/tracks/?client_id=${SOUNDCLOUD_API_KEY}&q=${query}`
    ).then(response => {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(data => {
        if (data) {
          this.props.setData(data);
        }
      });
    });
  }

  handleInputChange = (event) => {
    this.props.setQuery(event.target.value)
  }

  render() {
    const { playing, data, togglePlay } = this.props;
    const { handleInputChange, searchTracks } = this;

    return (
      <div className="App">
        <Background>
          <SearchBar
            handleInputChange={handleInputChange}
            searchTracks={searchTracks} />
          <Card data={data} playing={playing} togglePlay={togglePlay} />
        </Background>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

