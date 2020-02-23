import React from "react";
import styled from "styled-components";
import  SVG  from './SVG'

const Container= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:150px;
`;
const Searchbox = styled.div`
  position:relative;
  top:50px;
  background:black;
  height:60px;
  border-radius:40px;
  cursor:pointer;
  transition: width 2s;
`;

const SearchInput = styled.input`
  float:left;
  background:none;
  border:none;
  outline:none;
  color:rgb(112, 193, 179);
  font-size: 1em;
  transition: 0.4s;
  padding:0;
  height:60px;
  line-height:60px
  transition: width 0.8s;
  ${Searchbox}:hover & {
    width:200px;
  }
  text-indent: 2em;
  width:0px;
`

const SearchButton = styled.a`
  float:right;
  background: black;
  height:60px;
  width:60px;
  border-radius:50%;
  cursor:pointer;
  transition: background 0.8s;
  ${Searchbox}:hover & {
    background:white;
  }
`;

const SearchBar = ({
        handleInputChange,
        searchTracks
    }) => {
    return (
        <Container>
            <Searchbox>
                <SearchInput
                    placeholder="Search for..."
                    onChange={handleInputChange}
                /> 
                <SearchButton onClick={searchTracks}><SVG fill="rgba(112, 193, 179, 1)" /></SearchButton>
            </Searchbox>
        </Container>
    );
};

export default SearchBar;