import React from "react";
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

export default function Tracktitle({select,titles,tracks}) {
  return (
    <div>
      <div>{titles}</div>
      {tracks[0]}
      <Frame>
        <Transition
          native
          keys={tracks}
          from={{ opacity: 0, height: 0 }}
          enter={{ opacity: 1, height: 75 }}
          leave={{ opacity: 0, height: 0 }}
        >
          {tracks.map((track, i) => styles => (
            <animated.li style={{ ...defaultStyles, ...styles }}>
              <p index={i} onClick={() => select(i)}>{track}</p>
            </animated.li>
          ))}
        </Transition>
      </Frame>
    </div>
  );
};









