import { GlobalContext } from "../globalState";
import { useContext } from "react"; 

const ButtonForm = props => {

    const [tema] = useContext(GlobalContext);

    return ( 
        <button className="form-button"
            style={{backgroundColor: tema.contraste}}>
            { props.children }
        </button>

    )
} 

export default ButtonForm;
