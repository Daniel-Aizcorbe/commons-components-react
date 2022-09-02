import styled from "styled-components";

const Contenedor = styled.div`
    display: flex;
    flex-direction: ${props => props.direccion ? props.direccion : row};
    align-items: ${props => props.alineacionX ? props.alineacionX : center};
    justify-content: ${props => props.alineacionY ? props.alineacionY : center};
    
`;

export default Contenedor;