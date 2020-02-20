import React from "react";
import styled from "styled-components";
import MusicPlayer from "./Components/MusicPlayer";
import SearchBar from "./Components/SearchBar";
import { TracklistContainer } from "./Components/Tracklist/index.js";
import { Col, Layout, Row} from "./Components/Grid";
import { useDispatch, useSelector } from "react-redux";
import { actions } from './redux/ducks/index.js';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: #d2d8db;
  overflow: none;
`;

export const App = () => {

  const data = useSelector(state => state.data);
  const playing = useSelector(state => state.playing);
  const query = useSelector(state => state.query);
  const querySearched = useSelector(state => state.querySearched);
  const tracks = useSelector(state => state.tracks);
  const selectedTrack = useSelector(state => state.selectedTrack);
  const dispatch = useDispatch();

  const searchTracks = () => {
    const SOUNDCLOUD_API_KEY = process.env.REACT_APP_SOUNDCLOUD_API_KEY;
    fetch(
      `https://api.soundcloud.com/tracks/?client_id=${SOUNDCLOUD_API_KEY}&q=${query}`
    ).then(response => {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(data => {
        if (data) {
          dispatch(actions.resetSelectedTrack());
          dispatch(actions.setData(data));
          dispatch(actions.setQuerySearched());
        }
      });
    });
  }

  const handleInputChange = (event) => {
    dispatch(actions.setQuery(event.target.value));
  }

    return (
        <Background>
          <Layout margin="15">
            <Row>
              <Col marginRight="100" size="1"> 
                <SearchBar
                handleInputChange={handleInputChange}
                searchTracks={searchTracks} />
              </Col>
              <Col size="1" collapse="md"></Col>
            </Row>
            <Row wrap="true">
              <Col marginRight="100" size="1">  
                <MusicPlayer data={data} playing={playing} selectedTrack={selectedTrack} togglePlay={() => dispatch(actions.togglePlay())} />
              </Col>
              <Col size="1" >
                <TracklistContainer data={data} querySearched={querySearched} tracks={tracks} selectedTrack={selectedTrack} />
              </Col> 
            </Row>
          </Layout>
        </Background>
    );
}
