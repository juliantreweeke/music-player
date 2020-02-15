import React, { Component } from "react";
import Tracklist from './Tracklist.js'; 
import { connect } from 'react-redux';
import { actions } from '../../redux/ducks/index.js';

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
    this.props.setPlay();
    this.props.setData(trackOrder);
  }

  componentDidMount() {
    this.props.resetTracks();
    this.animateTitles();
  }
  render() {
      return <Tracklist
                tracks={this.props.tracks}
                selectTrack={this.selectTrack}
            />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TracklistContainer);