import React from "react";
import styled from "styled-components";
import MusicPlayer from "../MusicPlayer";
import SearchBar from "../SearchBar/SearchBar";
import { TracklistContainer } from "../Tracklist/index.js";
import { Col, Layout, Row} from "../../Grid";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: #d2d8db;
  overflow: none;
`;

export const App = ({data,
                    handleInputChange,
                    playing,
                    querySearched,
                    selectedTrack,
                    searchTracks,
                    togglePlay,
                    tracks}) => {
    return (
        <Background>
          <Layout margin="15">
            <Row>
              <Col marginRight="100" size="1"> 
                <SearchBar
                handleInputChange={handleInputChange}
                searchTracks={searchTracks} />
              </Col>
              <Col size="1" collapse="lg"></Col>
            </Row>
            <Row wrap="true">
              <Col marginRight="100" size="1">  
                <MusicPlayer data={data} playing={playing} selectedTrack={selectedTrack} togglePlay={togglePlay}/>
              </Col>
              <Col size="1" >
                <TracklistContainer data={data} querySearched={querySearched} tracks={tracks} selectedTrack={selectedTrack} />
              </Col> 
            </Row>
          </Layout>
        </Background>
    );
}
