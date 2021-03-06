import React from "react";
import { useTracks } from '../../Hooks/useTracks.js';
import { usePlaying } from '../../Hooks/usePlaying.js';
import styled from 'styled-components/macro'
import { Transition } from 'react-spring/renderprops';
import { media } from "../../Grid";

const Card = styled.div`
  min-width:80%;
  height: 500px;
  border-radius: 8px;
  background: transparent;
  border: 2px solid black;
  ${media['md'](`
  border-top-left-radius:0px;
  border-top-right-radius:0px;
  `)};
  ${media['sm'](`
  border-radius:0px;
  `)};
`;

const listStyles = `
  color:#000000;
  background:transparent;
  font-size:1em;
  list-style:none;
  overflow:hidden;
  margin:8px;
  display:flex;
  align-items:center;
  transition: background 0.5s ease;
  cursor:pointer;
  & p {
    padding-left:16px;
    display:inline-flex;
  }
  &:hover {
    background: #c1c6c9;
    border-radius:12px;
  }
`

const selectedStyles = `
  color:#FFFFFF; 
  background:black;
  border-radius:12px;
  &:hover {
  background:black;
  }
`

const HeadingContainer =  styled.div`
  align-items:center;
  color:black;
  margin-top:24px;
  width:100%;
  border-bottom:black 1px solid;
  & span {
    margin-left:24px;
    display:inline-flex;
    align-items:center;
  }
  & h2 {
    margin-top:0px;
  }
  & p {
    margin-left:8px;
    margin-top:0px;
  }
`
const TrackContainer = styled.ul`
  padding:0px;
  overflow:auto;
  height: 400px;
`

export const Tracklist = ({querySearched, selectedTrack, tracks}) => {

  const { setSelectedTrack } = useTracks();
  const { setPlay } = usePlaying();

  const handleTrackClick = (index) => {
    setSelectedTrack(index);
    setPlay();
  }

  return (
    <Card>
        {querySearched && 
        <HeadingContainer>
          <span>
            <h2>{querySearched}</h2>
            <p>{tracks.length} Search Results</p>
          </span>  
        </HeadingContainer>
          }
          <TrackContainer>
            <Transition
              items={tracks}
              keys={item => item.index}
              from={{ opacity: 0, height: 0 }}
              enter={{ opacity: 1, height: 75 }}
              leave={{ opacity: 0, height: 0 }}
            >
              {(item, state, index) => props => {
                const isTrackSelected = index === selectedTrack;
                return (
                  <li css={`${listStyles};${isTrackSelected && selectedStyles};`} style={{ ...props }}
                    onClick={() => handleTrackClick(index)}
                  >
                    <p>{item.title}</p>
                  </li>
              )}}
            </Transition>
          </TrackContainer>
    </Card>
  );
};






