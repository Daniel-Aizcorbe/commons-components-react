import styled from "styled-components";

/*
    @param padding
    @param radio
    @param colorFondo
    @param color
*/

const Boton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${props => props.padding ? props.padding : "16px 32px"};
    border-radius: ${props => props.radio ? props.radio : "25px"};
    border: 1px solid ${props => props.colorFondo ? props.colorFondo : "#2EC4B6"};
    color: ${props => props.color ? props.color : "black"};
    background-color: ${props => props.colorFondo ? props.colorFondo : "#2EC4B6"};
    cursor: pointer;
    user-select: none;

    &:hover {
        background-color: ${props => props.colorFondo ? props.colorFondo : "#2EC4B6"}80;
    }
    svg {
        padding-right: 8px;
        height: 20px;
        width: 20px;
    }
`;

export default Boton;

