import { GlobalContext } from "../globalState";
import { useContext } from "react"; 

const HeaderForm = props => {

    const [tema] = useContext(GlobalContext);

    return  <h2 style={{color: tema.contraste}}> { props.children } </h2>
} 

export default HeaderForm;
