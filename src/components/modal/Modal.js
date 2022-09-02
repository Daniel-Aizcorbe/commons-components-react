import React from "react";
import styled from "styled-components";
import Contenedor from "../contenedores/Contenedor";
import Boton from "../botones/Boton";
import {AiOutlineClose} from "react-icons/ai";

const Modal = ({
                   children,
                   colorOverlay,
                   colorContainer,
                   ancho,
                   alto,
                   radio,
                   estado,
                   cambiarEstado,
                   colorBorde
               }) => {
    
    return (estado &&
        <Overlay
            colorFondo={colorOverlay}
        >
            <ContenedorModal
                ancho={ancho}
                alto={alto}
                colorFondo={colorContainer}
                radio={radio}
                direccion={"column"}
                padding={"10px"}
            >
                <EncabezadoModal
                    style={{borderBottom: `2px solid ${colorBorde}`}}
                    ancho={"100%"}
                    alto={"30px"}
                >
                
                </EncabezadoModal>
                <Contenedor
                    direccion={"column"}
                    padding={0}
                    alto={"100%"}
                >
                    {children}
                </Contenedor>
                <Contenedor
                    alineacionX={"space-around"}
                    padding={"10px"}
                    alineacionY={"flex-end"}
                >
                    <Boton
                        onClick={() => alert("ACEPTA HIJO DE PUTA")}
                        colorLetra={"#000"}
                        colorFondo={"#fff"}
                    >
                        Cancelar
                    </Boton>
                    <Boton onClick={() => cambiarEstado(!estado)}>
                        Aceptar
                    </Boton>
                </Contenedor>
                <BotonCerrarModal
                    paddingSize={"0"}
                    sinTexto={true}
                    radio={"0"}
                >
                    <AiOutlineClose />
                </BotonCerrarModal>
            </ContenedorModal>
        </Overlay>
    );
};

export default Modal;

const Overlay = styled.div`
  background-color: ${props => props.colorFondo ? props.colorFondo : "#03071e"}80;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/*
    @param direccion
    @param alineacionX
    @param alineacionY
    @param ancho
    @param alto
    @param border
    @param radio
 */

const ContenedorModal = styled(Contenedor)`
  position: relative;
  justify-content: space-between;
`;

const EncabezadoModal = styled(Contenedor)`
  padding: 0 10px 20px;
`;

const BotonCerrarModal = styled(Boton)`
  position: absolute;
  top: 15px;
  right: 15px;
`;