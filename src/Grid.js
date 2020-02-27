import styled from 'styled-components';

export const media = {
    xs: (styles) => `
        @media only screen and (max-width: 480px) {
            ${styles}
        }
    `,
    md: (styles) => `
        @media only screen and (max-width: 749px) {
            ${styles}
        }
    `, 
    lg: (styles) => `
        @media only screen and (max-width: 1028px) {
            ${styles}
        }
    `, 
    xlg: (styles) => `
        @media only screen and (min-width: 1028px) {
            ${styles}
        }
    `, 
}

export const Layout = styled.div`
    margin-left:${(props) => props.margin}vw;
    margin-right:${(props) => props.margin}vw;
    ${media['lg'](`
        margin-left:2vw;
        margin-right:2vw;
    `)};
    ${media['xs'](`
        margin-left:0px;
        margin-right:0px;
    `)};
`
export const Row = styled.div`
    display:flex;
    ${(props) => props.wrap && (`
    flex-wrap: wrap;
    `)}
    align-items:center;
`;

export const Col = styled.div`
    flex: ${(props) => props.size};
    ${(props) => props.collapse && media[props.collapse](`
    display:none;
    `)};
    margin-left: ${(props) => props.marginLeftRight}px;
    margin-right: ${(props) => props.marginLeftRight}px;
    min-width:300px;
`;