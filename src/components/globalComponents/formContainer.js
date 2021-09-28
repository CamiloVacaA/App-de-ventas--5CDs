import { GlobalContext } from "../globalState";
import { useContext} from "react";


const FormContainer = props => {

    const [tema] = useContext(GlobalContext);

    return(
        <form className="form-container" style={{backgroundColor :tema.secundario,
                                            borderColor: tema.letraPrincipal, 
                                            color: tema.letraSecundaria}} >
            {props.children}
        </form>
    )
}

export default FormContainer;
