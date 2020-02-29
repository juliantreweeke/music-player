import React from "react";
import styled from 'styled-components/macro'

const svgStyles = (data) => 
    `z-index:10;
    ${data && `cursor:pointer`}`;

export const ArrowIcon = ({ data, handleClick, rotate180}) => {
    const color = data ? '#70C1B3' : '#333738';
    return (
        <svg 
            css={svgStyles(data)} 
            onClick={handleClick} 
            transform={rotate180 && 'rotate(180)'} 
            width="32" height="32" 
            viewBox="0 0 16 16"
        >
            <path fill={color} d="M2 1v14l10-7z"></path>
            <path fill={color} d="M12 1h2v14h-2v-14z"></path>
        </svg>
    );
} 
