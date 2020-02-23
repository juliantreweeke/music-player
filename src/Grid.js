import styled from 'styled-components';

const media = {
    xs: (styles) => `
        @media only screen and (max-width: 480px) {
            ${styles}
        }
    `,
    md: (styles) => `
        @media only screen and (max-width: 772px) {
            ${styles}
        }
    `, 
}

export const Layout = styled.div`
    margin-left:${(props) => props.margin}vw;
    margin-right:${(props) => props.margin}vw;
    @media only screen and (max-width: 772px) {
    margin-left:0px;
    margin-right:0px;
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
    ${(props) => props.collapse && media[props.collapse](`
    display:none;
    `)};
    min-width:300px;
    margin-right: ${(props) => props.marginRight}px;
    ${(props) => props.marginRight && media['md'](`
    margin-right:0px;
    `)};
`;
