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
`

export const Row = styled.div`
    display:flex;
    ${(props) => props.wrap && (`
    flex-wrap: wrap;
    `)}
`;

export const Col = styled.div`
    flex: ${(props) => props.size};
    ${(props) => props.collapse && media[props.collapse](`
    display:none;
    `)};
    margin-right: 40px;
    min-width:300px;
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;



