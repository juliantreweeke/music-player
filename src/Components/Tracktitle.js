import React, { Component } from "react";
import styled from "styled-components";
import { Transition, animated } from "react-spring";

const defaultStyles = {
  border: "1px black solid",
  color: "#70C1B3",
  fontSize: "1em",
  listStyle: "none",
  overflow: "hidden"
};

const Frame = styled.ul`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  overflow-y: scroll;
  height: 100%;
  & p {
    text-align: left;
    margin-left: 15px;
    margin-top: 30px;
  }
`;

const List = styled.span`
border: "1px black solid",
color: "black",
fontSize: "1em",
listStyle: "none"
`;

export default class Tracktitle extends Component {

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

    const { select } = this.props;

    return (
      <div>
        <div>{this.state.titles}</div>
        <Frame>

          <Transition
            native
            keys={this.state.tracks}
            from={{ opacity: 0, height: 0 }}
            enter={{ opacity: 1, height: 75 }}
            leave={{ opacity: 0, height: 0 }}
          >
            {this.state.tracks.map((track, i) => styles => (
              <animated.li style={{ ...defaultStyles, ...styles }}>
                <p index={i} onClick={() => select(i)}>{track}</p>
              </animated.li>
            ))}
          </Transition>
        </Frame>
      </div>
    );
  }
}








