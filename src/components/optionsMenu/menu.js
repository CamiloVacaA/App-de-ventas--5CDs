import React, {useState, useContext } from "react";
import logo from "../svg/menuLogoWhite.svg";
import DisplayMenu from "./displayMenu";
import { GlobalContext } from "../globalState";

const MenuPopUp  = props => {

    const [isOpen, setOpen] = useState(false);
    const [ tema ] = useContext(GlobalContext);

    return(
        <>
            <a className="menu-button"  onClick={() => setOpen(!isOpen)} style={{backgroundColor: tema.contraste}} > 
                <img src={logo} alt="logo del menu" width="50%"/>
            </a>
            {isOpen && <DisplayMenu>{props.children}</DisplayMenu>}
        </>
    )
}

export default MenuPopUp;
