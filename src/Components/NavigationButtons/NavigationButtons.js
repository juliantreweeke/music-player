import React from "react";
import styled from 'styled-components/macro'
import { ArrowIcon } from './ArrowIcon';
import { useTracks } from '../../Hooks/useTracks.js';
import { usePlaying } from '../../Hooks/usePlaying.js';


const Layout = styled.div`
  display:flex;
  width:60%;
  margin-left:auto;
  margin-right:auto;
  margin-top:auto;
  height:200px;
  background: transparent;
  align-items:center;
  justify-content: space-between;
`;

const BackButton = ({data, selectedTrack}) => {
    const { setSelectedTrack } = useTracks();
    const { setPlay } = usePlaying();

    const previousTrack = () => {
        if(selectedTrack === 0){
            setSelectedTrack(data.length - 1)
          } else {
            setSelectedTrack(selectedTrack -= 1 )
          }
          setPlay();
    }
    return (
        <ArrowIcon 
        data={data}
        handleClick={data && previousTrack}
        rotate180={true}
        />    
    ) 
} 

const NextButton = ({data, selectedTrack}) => {
    const { setSelectedTrack } = useTracks();
    const { setPlay } = usePlaying();

    const nextTrack = () => {
        if(selectedTrack === data.length - 1){
          setSelectedTrack(0);
        } else {
          setSelectedTrack(selectedTrack += 1);
        }
        setPlay();
    }
    return (
        <ArrowIcon 
        data={data}
        handleClick={data && nextTrack}
        />
    ) 
} 

export const NavigationButtons = ({data,selectedTrack}) => {
    return (
        <Layout>
            <BackButton data={data} selectedTrack={selectedTrack}/>
            <NextButton data={data} selectedTrack={selectedTrack}/>
        </Layout>)
}