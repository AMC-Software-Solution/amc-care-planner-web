import Styled from 'styled-components';

const GmapWraper = Styled.div`
    wieth: ${props => props.width}; 
    height: ${props => props.height};
    position: relative;
    .leaflet-container {
        wieth: ${props => props.width}; 
        height: ${props => props.height};
    }
`;

export { GmapWraper };
