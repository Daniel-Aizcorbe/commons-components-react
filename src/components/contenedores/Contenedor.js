import styled from "styled-components";

/* 
    @param direccion
    @param alineacionX
    @param alineacionY
    @param width
    @param height
    @param border 
    
*/

const Contenedor = styled.div`
    display: flex;
    flex-direction: ${props => props.direccion ? props.direccion : "row"};
    align-items: ${props => props.alineacionX ? props.alineacionX : "center"};
    justify-content: ${props => props.alineacionY ? props.alineacionY : "center"};
    width: ${props => props.width ? props.width : "auto"};
    height: ${props => props.height ? props.height : "auto"};
    padding: ${props => props.padding ? props.padding : "20px"};
    border: ${props => props.border ? props.border : "none"};
`;

export default Contenedor;