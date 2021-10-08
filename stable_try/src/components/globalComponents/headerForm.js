import { GlobalContext } from "../globalState";
import { useContext } from "react"; 

const HeaderForm = props => {

    const {chosenColor } = useContext(GlobalContext);

    return  <h2 style={{color: chosenColor}}> { props.children } </h2>
} 

export default HeaderForm;
