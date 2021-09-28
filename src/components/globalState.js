import { createContext, useState } from "react";



// global theme 


export const GlobalContext = createContext(null);



export const GlobalState = props => {
    
    const Themes = {
        modoClaro:{
            principal: "#fff",
            secundario: "#ddd",
            letraPrincipal: "#631",
            letraSecundaria: "#333",
        },
        modoOscuro: {
            principal: "#232124",
            secundario: "#100f12",
            letraPrincipal: "#eee",
            letraSecundaria: "#fff",
        }
    };

    
    const [x, setTema ] = useState(false);
    const [contraste, setContraste ] = useState(0);
    
    const listOfColors = ["#c33", "#c79"];
    const chosenColor = listOfColors[contraste];

    const cambiarTema = () => setTema(!x); 


    
    let tema = !x ? Themes.modoOscuro : Themes.modoClaro;

    tema["contraste"] = chosenColor;
    return (
        <GlobalContext.Provider value={[tema, cambiarTema, setContraste]}>
            {props.children}
        </GlobalContext.Provider>
    );
}
