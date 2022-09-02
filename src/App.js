import './App.css';
import Modal from "./components/modal/Modal.js";
import Boton from "./components/botones/Boton";
import {useState} from "react";

function App() {
    
    const [estadoModal, setEstadoModal] = useState(false);
    
    return (
        <div className="App">
            <h1>
                COMPONENTES GENERICOS
            </h1>
            <Boton
                onClick={() => setEstadoModal(true)}
            >
                OPEN MODAL
            </Boton>
            <Modal
                colorContainer={"white"}
                radio={"10px"}
                ancho={"400px"}
                alto={"400px"}
                estado={estadoModal}
                cambiarEstado={setEstadoModal}
                colorBorde={"#2EC4B6"}
            >
                <h1>
                    Titulo
                </h1>
                <p>
                    Parrafo parrafo jajaja
                </p>
            </Modal>
        </div>
    );
}

export default App;
