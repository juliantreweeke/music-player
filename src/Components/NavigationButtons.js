import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display:flex;
  width:100%;
  margin-left:20%;
  margin-right:20%;
  margin-top:auto;
  height: 25%;
  background: transparent;
  align-items:center;
  justify-content: space-between;
  &svg {
      border:2px solid red;
  }
`;

const NextButton = () => (
    <svg version="1.1" width="32" height="32" viewBox="0 0 16 16">
        <path fill="#70C1B3" d="M2 1v14l10-7z"></path>
        <path fill="#70C1B3" d="M12 1h2v14h-2v-14z"></path>
    </svg>
);

export const NavigationButtons = () => {
    return (
        <Layout>
            <NextButton/>
            <NextButton/>
        </Layout>)
}