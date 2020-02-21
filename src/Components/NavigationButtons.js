import React from "react";
import styled from "styled-components";

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

const BackButton = (disabled) => {
    const color = disabled ? 'grey' : '#70C1B3'
    return (
        <svg style={{pointer:"cursor"}} transform={'rotate(180)'} version="1.1" width="32" height="32" viewBox="0 0 16 16">
            <path fill={color} d="M2 1v14l10-7z"></path>
            <path fill={color} d="M12 1h2v14h-2v-14z"></path>
        </svg>
    );
} 

const NextButton = (selectedTrack) => (
    <svg style={{pointer:"cursor"}} version="1.1" width="32" height="32" viewBox="0 0 16 16">
        <path fill="#70C1B3" d="M2 1v14l10-7z"></path>
        <path fill="#70C1B3" d="M12 1h2v14h-2v-14z"></path>
    </svg>
);

export const NavigationButtons = (selectedTrack) => {
    return (
        <Layout>
            <BackButton selectedTrack={selectedTrack} disabled/>
            <NextButton selectedTrack={selectedTrack}/>
        </Layout>)
}