import styled from "styled-components";

/* 
    @param direccion
    @param alineacionX
    @param alineacionY
    @param ancho
    @param alto
    @param border 
    @param radio
*/

const Contenedor = styled.div`
  display: flex;
  flex-direction: ${props => props.direccion ? props.direccion : "row"};
  align-items: ${props => props.alineacionY ? props.alineacionY : "center"};
  justify-content: ${props => props.alineacionX ? props.alineacionX : "center"};
  width: ${props => props.ancho ? props.ancho : "100%"};
  height: ${props => props.alto ? props.alto : "auto"};
  padding: ${props => props.padding ? props.padding : "20px"};
  border: ${props => props.border ? props.border : "none"};
  border-radius: ${props => props.radio ? props.radio : "0px"};
  background-color: ${props => props.colorFondo ? props.colorFondo : "initial"};
`;

export default Contenedor;