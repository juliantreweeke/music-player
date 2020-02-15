import React, { Component } from "react";
import styled from "styled-components";
import Tracklist from './Tracklist.js'; 
import { CenteredContainer } from "../Grid";
import { connect } from 'react-redux';
import { actions } from '../../redux/ducks/index.js';

export const Card = styled.div`
  min-width:80%;
  height: 500px;
  border-radius: 8px;
  background: transparent;
  border: 2px solid black;
`;

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  resetTracks: () => dispatch(actions.resetTracks()),
  setData: (data) => dispatch(actions.setData(data)),
  setPlay: () => dispatch(actions.setPlay()),
  setTracks: (tracks) => dispatch(actions.setTracks(tracks)),
 })

class TracklistContainer extends Component {

  componentDidUpdate(prevProps) {
    if ( this.props.data !== prevProps.data ) {
      this.props.resetTracks();
      this.animateTitles();
    }
  }
  
  animateTitles = () => {
    const { data } = this.props;
    let timeOutLength = 100;
    if (data) {
      data.forEach(track => {
        setTimeout(() => this.props.setTracks([...this.props.tracks, track.title]), timeOutLength);
        timeOutLength += 200;
      })
    }
  }

   selectTrack = (i) => {
    let trackOrder = this.props.data;
    let temp = trackOrder[0];
    trackOrder[0] = trackOrder[i];
    trackOrder[i] = temp;
    this.props.resetTracks();
    this.props.setPlay();
    this.props.setData(trackOrder);
    this.animateTitles();
  }

  render() {  
      return (
        <CenteredContainer>
          <Card>
             {this.props.tracks && <Tracklist
              querySearched={this.props.querySearched}
              tracks={this.props.tracks}
              selectTrack={this.selectTrack}
            />}
          </Card>
        </CenteredContainer>
      )       
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TracklistContainer);