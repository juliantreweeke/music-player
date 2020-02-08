import React, { Component } from "react";
import Tracktitle from './Tracktitle.js'; 

export default class TracktitleContainer extends Component {
  state = { tracks: [] };
  animateTitles = () => {
    const { data } = this.props;
    let timeOutLength = 100;
    if (data) {
      data.forEach(track => {
        setTimeout(() => this.setState({ tracks: [...this.state.tracks, track.title] }), timeOutLength);
        timeOutLength += 200;
      })
    }
  }

  resetTrackList = () => {
    this.setState({tracks:[]})
  }

  componentDidMount() {
    this.resetTrackList();
    this.animateTitles();
  }
  render() {
      return <Tracktitle 
                titles={this.state.titles}
                tracks={this.state.tracks}
                select={this.props.select}
            />;
  }
}








