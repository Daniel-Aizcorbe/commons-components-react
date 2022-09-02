import styled from "styled-components";

/*
    @param padding
    @param radio
    @param colorFondo
    @param colorLetra
*/

const Boton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => !props.paddingSize ? "16px 32px" : props.paddingSize };
  border-radius: ${props => props.radio ? props.radio : "25px"};
  border: 1px solid ${props => props.colorFondo ? props.colorFondo : "#2EC4B6"};
  color: ${props => props.colorLetra ? props.colorLetra : "black"};
  background-color: ${props => props.colorFondo ? props.colorFondo : "#2EC4B6"};
  cursor: pointer;
  user-select: none;
  font-family: Verdana, sans-serif;
  transition: .3s ease all;

  &:hover {
    background-color: ${props => props.colorFondo ? props.colorFondo : "#2EC4B6"}80;
  }

  svg {
    padding-right: ${props => props.sinTexto ? 0 : "8px"};
    height: 20px;
    width: 20px;
  }
`;

export default Boton;

