import React from "react";
import styled from 'styled-components/macro'
import { selectTrack } from '../../redux/commonActions';
import { ArrowIcon } from './ArrowIcon';

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
    const previousTrack = () => {
        if(selectedTrack === 0){
            selectTrack(data.length - 1)
          } else {
            selectTrack(selectedTrack--)
          }
    }
    return (
        <ArrowIcon 
        data={data}
        handleClick={data && previousTrack}
        rotate180={true}
        />    
    ) 
} 

const NextButton = ({data,selectedTrack}) => {
    const nextTrack = () => {
        if(selectedTrack === data.length - 1){
          selectTrack(0)
        } else {
          selectTrack(selectedTrack++)
        }
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