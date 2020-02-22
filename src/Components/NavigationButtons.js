import React from "react";
import styled from 'styled-components/macro'
import { selectTrack } from '../../src/redux/commonActions';

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

const svgStyles = (data) => 
    `z-index:10;
    ${data && `cursor:pointer`}`;

const BackButton = ({data, selectedTrack}) => {
    const previousTrack = () => {
        if(selectedTrack === 0){
            selectTrack(data.length - 1)
          } else {
            selectTrack(selectedTrack--)
          }
    }
    const color = data ? '#70C1B3' : '#333738';
    return (
        <svg 
            css={svgStyles(data)} 
            onClick={previousTrack} 
            transform={'rotate(180)'} 
            width="32" height="32" 
            viewBox="0 0 16 16"
        >
            <path fill={color} d="M2 1v14l10-7z"></path>
            <path fill={color} d="M12 1h2v14h-2v-14z"></path>
        </svg>
    );
} 

const NextButton = ({data,selectedTrack}) => {
    const nextTrack = () => {
        if(selectedTrack === data.length - 1){
          selectTrack(0)
        } else {
          selectTrack(selectedTrack++)
        }
    }
    const color = data ? '#70C1B3' : '#333738';
    return (
        <svg 
            css={svgStyles(data)}  
            onClick={nextTrack}
             width="32" height="32" 
             viewBox="0 0 16 16"
        >
            <path fill={color} d="M2 1v14l10-7z"></path>
            <path fill={color} d="M12 1h2v14h-2v-14z"></path>
        </svg>
    );   
} 

export const NavigationButtons = ({data,selectedTrack}) => {
    return (
        <Layout>
            <BackButton data={data} selectedTrack={selectedTrack}/>
            <NextButton data={data} selectedTrack={selectedTrack}/>
        </Layout>)
}