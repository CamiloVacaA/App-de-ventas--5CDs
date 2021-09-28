import { GlobalContext} from "./components/globalState";
import {createContext, useContext, useState} from "react";
import MenuPopUp from "./components/optionsMenu/menu";
import ModuloActivo from "./components/moduloActivo";

export const changingModule = createContext(null);

function App() {
    

    const [tema, cambiarTema]  = useContext(GlobalContext);
    const [modulo, cambiarModulo] = useState(0);
    return (
        <changingModule.Provider value={[modulo, cambiarModulo]} >
            <div className="App" style={{backgroundColor: tema.principal, color: tema.letraPrincipal }} >
                <ModuloActivo indice={modulo}  />
                <MenuPopUp>
                </MenuPopUp>
            </div>
        </changingModule.Provider>
    );
}

export default App;
