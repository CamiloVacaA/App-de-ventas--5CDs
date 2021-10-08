import { GlobalContext } from "../globalState";
import { useContext } from "react"; 

const ButtonForm = props => {

    const { chosenColor } = useContext(GlobalContext);

    return ( 
        <button className="form-button"
            style={{backgroundColor: chosenColor}}>
            { props.children }
        </button>

    )
} 

export default ButtonForm;
