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
              <Col marginLeftRight="30" size="1"> 
                <SearchBar
                handleInputChange={handleInputChange}
                searchTracks={searchTracks} />
              </Col>
              <Col size="1" collapse="md"></Col>
            </Row>
            <Row wrap="true">
              <Col marginLeftRight="30" size="1">  
                <MusicPlayer data={data} playing={playing} selectedTrack={selectedTrack} togglePlay={togglePlay}/>
              </Col>
              <Col marginLeftRight="30" size="1" >
                <TracklistContainer data={data} querySearched={querySearched} tracks={tracks} selectedTrack={selectedTrack} />
              </Col> 
            </Row>
          </Layout>
        </Background>
    );
}
