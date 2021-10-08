import backg from "./external-content.duckduckgo.com.jpg";
import { Link } from "react-router-dom";
const Inicio = () => {
    

    return (
        <div className="Fondo-de-inicio"
             style = {{backgroundImage: `url(${backg})`,
                     backgroundSize: "cover",
                     backgroundPosition: "center"
             }}>
            <div className="home-container">
               
                <div className="whitestripe">
                    
                    <h2>Bienvenido</h2>
                            
                    <p><Link to="login">Inicia tu sesión </Link></p>
                    <p><Link to="register">¿No tienes cuenta? registrate </Link></p>

                </div>

            </div>
        </div>
    )
} 

export default Inicio;
