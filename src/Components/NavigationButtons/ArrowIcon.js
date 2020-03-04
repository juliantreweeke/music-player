import React from "react";
import styled, { useTheme } from 'styled-components/macro'

const svgStyles = ({data, theme}) => 
    `z-index:10;
    ${data && `cursor:pointer`};
    path {
        fill:${data ? theme.btnColor : '#333738'};
    };
    &:hover path {
        fill:${data ? 'white' : '#333738'};
    };
    path {
        transition:fill 0.5s ease;
    }
    
`

export const ArrowIcon = ({ data, handleClick, rotate180}) => {
    const theme = useTheme();
    return (
        <svg 
            css={svgStyles({data, theme})} 
            onClick={handleClick} 
            transform={rotate180 && 'rotate(180)'} 
            width="32" height="32" 
            viewBox="0 0 16 16"
        >   
            <path d="M2 1v14l10-7z"></path>
            <path d="M12 1h2v14h-2v-14z"></path>
        </svg>
    );
} 
