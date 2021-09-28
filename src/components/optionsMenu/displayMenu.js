import {useContext, useState} from "react";
import { GlobalContext } from "../globalState";
import DisplayItem from "./displayItems";
import { changingModule } from "../../App"; 

const DisplayMenu  = () => {

    const [indexMenu, setIndexMenu] = useState(0); 
    const [tema, cambiarTema ] = useContext(GlobalContext);
    const [ modulo, cambiarModulo ] = useContext(changingModule);


    // Esto va a cambiar el conjunto de items dentro del menu
    const MenuStack = () =>{

        switch(indexMenu){

            case 0:
            return(
                <>
                    <DisplayItem method={cambiarTema}> Cambiar Tema </DisplayItem> 
                    <DisplayItem method={ () => setIndexMenu(1) }>Cambiar de Modulo </DisplayItem> 
                </>
            )
            case 1:
            return(
                <>
                    <DisplayItem method={() => cambiarModulo(1)}>Registrar Ventas </DisplayItem> 
                    <DisplayItem>Actualizar Ventas </DisplayItem> 
                    <DisplayItem>Ver Ventas </DisplayItem> 
                    <DisplayItem method={() => cambiarModulo(0)} >Log In </DisplayItem> 
                    <DisplayItem>Introducir Nuevos Productos</DisplayItem> 
                    <DisplayItem method={ () => setIndexMenu(0) } >Volver</DisplayItem> 
                </>
            )
        }
    }
    return(
        <div className="menu-display" style={{borderColor: tema.letraSecundaria, color: tema.letraSecundaria }}> 
            <MenuStack />  
        </div>
    )
}

export default DisplayMenu;
