import React from "react";
import styled from "styled-components";
import { Transition, animated } from "react-spring";

const defaultStyles = {
  color: "#000000",
  fontSize: "1em",
  listStyle: "none",
  overflow: "hidden",
  margin:"24px",
};


const HeadingContainer =  styled.div`
  align-items:center;
  color:white;
  display:inline-flex;
  margin-top:24px;
  margin-left:24px;
  & h2 {
    margin-top:0px;
  }
  & p {
    margin-left:8px;
    margin-top:0px;
  }
`

const TrackContainer = styled.div`
  overflow:auto;
  height: 400px;
`

// const Frame = styled.ul`
//   position: absolute;
//   width: 100%;
//   top: 0;
//   left: 0;
//   margin: 0px;
//   padding: 0px;
//   overflow: hidden;
//   overflow-y: scroll;
//   height: 100%;
//   & p {
//     text-align: left;
//     margin-left: 15px;
//     margin-top: 30px;
//   }
// `;


// const Frame = styled.ul`
//   & p {
//     text-align: left;
//     margin-left: 15px;
//     margin-top: 30px;
//   }
// `;

export default function Tracklist({querySearched, selectTrack, tracks}) {
  return (
    <div>
        {querySearched && 
        <HeadingContainer>
          <h2>{querySearched}</h2>
          <p>{tracks.length} Search Results</p>
        </HeadingContainer>
          }
          <TrackContainer>
            <Transition
            native
            keys={tracks}
            from={{ opacity: 0, height: 0 }}
            enter={{ opacity: 1, height: 75 }}
            leave={{ opacity: 0, height: 0 }}
            >
            {tracks.map((track, index) => styles => (
              <animated.li style={{ ...defaultStyles, ...styles }}>
                <p index={index} onClick={() => selectTrack(index)}>{index + 1} {track}</p>
              </animated.li>
            ))}
            </Transition>
          </TrackContainer>
        
    </div>
  );
};










