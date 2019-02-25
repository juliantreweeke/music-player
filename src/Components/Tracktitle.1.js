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

  state = { tracks: [], titles: [] };

  getTrackTitles() {
    const titleList = []
    this.props.data.map((track, i) => {
      titleList.push(track.title)
    })
    this.setState({ titles: [...this.state.titles, titleList] });
  }

  componentDidMount() {

    this.getTrackTitles();
    // new item
    setTimeout(() => this.setState({ tracks: ["track1"] }), 100);
    // new item in between
    setTimeout(() => this.setState({ tracks: ["track1", "track2"] }), 300);
    // deleted items
    setTimeout(
      () => this.setState({ tracks: ["track1", "track2", "track3"] }),
      500
    );
    setTimeout(
      () => this.setState({ tracks: ["track1", "track2", "track3", "track4"] }),
      700
    );
    setTimeout(
      () =>
        this.setState({
          tracks: ["track1", "track2", "track3", "track4", "track5"]
        }),
      900
    );
    setTimeout(
      () =>
        this.setState({
          tracks: ["track1", "track2", "track3", "track4", "track5", "track6"]
        }),
      1200
    );
    setTimeout(
      () =>
        this.setState({
          tracks: [
            "track1",
            "blok",
            "track3",
            "track4",
            "track5",
            "track6",
            "track7"
          ]
        }),
      1500
    );
  }

  render() {

    return (
      <Frame>
        {this.state.titles[0]}
        <Transition
          native
          keys={this.state.tracks}
          from={{ opacity: 0, height: 0 }}
          enter={{ opacity: 1, height: 75 }}
          leave={{ opacity: 0, height: 0 }}
        >
          {this.state.tracks.map(track => styles => (
            <animated.li style={{ ...defaultStyles, ...styles }}>
              <p>{track}</p>
            </animated.li>
          ))}
        </Transition>
      </Frame>
    );
  }
}

// {this.state.tracks.map(track => styles => (
//   <animated.li style={{ ...defaultStyles, ...styles }}>
//     <p>{track}</p>
//   </animated.li>
// ))}