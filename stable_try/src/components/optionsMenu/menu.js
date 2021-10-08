import React, {useState, useContext } from "react";
import logo from "../svg/menuLogoWhite.svg";
import DisplayMenu from "./displayMenu";
import { GlobalContext } from "../globalState";

const MenuPopUp  = props => {

    const [isOpen, setOpen] = useState(false);
    const { chosenColor } = useContext(GlobalContext);
    const chg = () => setOpen(!isOpen);
    

    console.log(chosenColor)
    return(
        <>
            <a className="menu-button"  onClick={chg} style={{backgroundColor: chosenColor}} > 
                <img src={logo} alt="logo del menu" width="50%"/>
            </a>
            {isOpen && <DisplayMenu>{props.children}</DisplayMenu>}
        </>
    )
}

export default MenuPopUp;
