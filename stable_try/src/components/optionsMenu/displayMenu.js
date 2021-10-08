import {useContext, useState} from "react";
import { GlobalContext } from "../globalState";
import DisplayItem from "./displayItems";
import { Link } from "react-router-dom"; 
import DisplayChangeColor from "./displayChangeColor";

const DisplayMenu  = () => {

    const [indexMenu, setIndexMenu] = useState(0); 
    const { tema, cambiarTema, listOfColors } = useContext(GlobalContext);
    
    const mapping = array => {
        let x = [];
        for(let i = 0; i < array.length; i++)
        {
            x.push(<DisplayChangeColor colId={i} color={array[i][0]}>
            {array[i][1]}
            </DisplayChangeColor>);
        }
        return x;
    };

    const colorChangers = mapping(listOfColors);

    // Esto va a cambiar el conjunto de items dentro del menu
    const MenuStack = () =>{

        switch(indexMenu){

            case 0:
            return(
                <>
                    <DisplayItem method={cambiarTema}> Cambiar Tema </DisplayItem> 
                    <DisplayItem method={ () => setIndexMenu(1) }>Cambiar de Modulo </DisplayItem> 
                    <DisplayItem method={ () => setIndexMenu(2) }>Cambiar de color de contraste</DisplayItem> 
                </>
            )
            case 1:
            return(
                <>
                    <Link to="ventas"> <DisplayItem> Registrar Ventas </DisplayItem> </Link>
                    <DisplayItem>Actualizar Ventas </DisplayItem> 
                    <DisplayItem>Ver Ventas </DisplayItem> 
                    <Link to="login"> <DisplayItem>Log In </DisplayItem> </Link>
                    <Link to="register"> <DisplayItem> Registrate </DisplayItem> </Link>
                    <DisplayItem>Introducir Nuevos Productos</DisplayItem> 
                    <DisplayItem method={ () => setIndexMenu(0) } >Volver</DisplayItem> 
                </>
            )
            case 2:
            return(
                <>
                    {colorChangers}
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
