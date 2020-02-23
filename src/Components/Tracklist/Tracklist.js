import React from "react";
import styled from 'styled-components/macro'
import { Transition } from 'react-spring/renderprops';

const listStyles = `
  color:#000000;
  font-size:1em;
  list-style:none;
  overflow:hidden;
  margin:12px;
  max-width:400px;
`
const selectedStyles = `color:#FFFFFF; background:black`

const HeadingContainer =  styled.div`
  align-items:center;
  color:black;
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

export default function Tracklist({querySearched, selectTrack, selectedTrack, tracks}) {
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
              items={tracks}
              keys={item => item}
              from={{ opacity: 0, height: 0 }}
              enter={{ opacity: 1, height: 75 }}
              leave={{ opacity: 0, height: 0 }}
            >
              {(item, state, index) => props => {
                const isTrackSelected = index === selectedTrack;
                return (
                  <li css={`${listStyles};${isTrackSelected && selectedStyles};`} style={{ ...props }}>
                    <p index={index} onClick={() => selectTrack(index)}>{index + 1} {item}</p>
                  </li>
              )}}
            </Transition>
          </TrackContainer>
    </div>
  );
};






