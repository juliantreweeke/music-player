import React, { Component } from "react";
import styled from "styled-components";
import MusicPlayer from "./Components/MusicPlayer";
import SearchBar from "./Components/SearchBar";
import Tracklist from "./Components/Tracklist";
import { Col, Layout, Row} from "./Components/Grid";
import { connect } from 'react-redux';
import { actions } from './redux/ducks/index.js';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
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
  setQuerySearched: () => dispatch(actions.setQuerySearched()),
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
          this.props.setQuerySearched();
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
        <Background>
          <Layout margin="6">
            <Row>
              <Col size="1"> 
                <SearchBar
                handleInputChange={handleInputChange}
                searchTracks={searchTracks} />
              </Col>
              <Col size="1" collapse="md"></Col>
            </Row>
            <Row wrap="true">
              <Col size="1">  
                <MusicPlayer data={data} playing={playing} togglePlay={togglePlay} />
              </Col>
              <Col size="1" >
                <Tracklist />
              </Col> 
            </Row>
          </Layout>
        </Background>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

