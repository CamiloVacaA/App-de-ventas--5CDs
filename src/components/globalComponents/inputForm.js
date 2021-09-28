import { GlobalContext } from "../globalState";
import { useContext } from "react"; 

const InputForm = props => {

    const [tema] = useContext(GlobalContext);

    return ( 
            < input className="form-input"
                style={{backgroundColor: tema.principal, color: tema.letraSecundaria}}
                type="text" id={props.id} name="props.id" />
    )
} 

export default InputForm;
