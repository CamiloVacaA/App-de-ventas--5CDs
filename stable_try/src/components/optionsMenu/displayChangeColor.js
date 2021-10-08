import { useContext } from "react"
import { GlobalContext } from "../globalState"

const DisplayChangeColor = props => {

    
    const { setContraste } = useContext(GlobalContext);


    return (

        <div className="menu-item display-color" onClick={() => setContraste(props.colId)}>
            <p> {props.children} </p>
            <div className="color-show" style={{backgroundColor : props.color}} />
        </div>
    )
}

export default DisplayChangeColor;
