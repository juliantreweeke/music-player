import React from "react";
import { Spring } from "react-spring";
import styled from "styled-components";
import Tracktitle from "./Tracktitle";

const Frame = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 0 0 8px 8px;
  background: #323435;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  z-index: -1;
`;

const Tracklist = ({ height, top, playing, data, select }) => (
  <Frame style={{ height, top }}>{!playing && <Tracktitle select={select} data={data} />}</Frame>
);

const Cover = ({
    playing,
    data,
    select
  }) => {
  return (
    <Spring
      from={{ color: "black" }}
      to={{
        top: playing ? "100%" : "40%",
        height: playing ? "0%" : "60%"
      }}
      children={Tracklist} // Render prop
      playing={playing}
      data={data}
      select={select}
    />
  );
};

export default Cover;