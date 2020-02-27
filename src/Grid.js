import styled from 'styled-components';

const media = {
    xs: (styles) => `
        @media only screen and (max-width: 480px) {
            ${styles}
        }
    `,
    md: (styles) => `
        @media only screen and (max-width: 715px) {
            ${styles}
        }
    `, 
    lg: (styles) => `
        @media only screen and (max-width: 999px) {
            ${styles}
        }
    `, 
}

export const Layout = styled.div`
    margin-left:${(props) => props.margin}vw;
    margin-right:${(props) => props.margin}vw;
    @media only screen and (max-width: 715px) {
    margin-left:10vw;
    margin-right:10vw;
    }
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
    width:50%;
    ${(props) => props.collapse && media[props.collapse](`
    display:none;
    `)};
    margin-right: ${(props) => props.marginRight}px;
    ${(props) => props.marginRight && media['lg'](`
    margin-right:0px;
    `)};
    min-width:300px;
`;
