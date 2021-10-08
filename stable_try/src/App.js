import { GlobalContext} from "./components/globalState";
import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// componentes paginas
import MenuPopUp from "./components/optionsMenu/menu";
import Inicio from "./components/home/inicio";
import LoginForm from "./components/login/loginForm";
import Registro from "./components/register/Registro";
import MCreacionVentas from "./components/crearVentas/mainCrearVentas"; 

function App() {
    

    const { tema }  = useContext(GlobalContext);
    return (
        <Router>
            <div className="App" style={{backgroundColor: tema.principal, color: tema.letraPrincipal }} >
                <Switch>              
                
                    <Route exact path="/">
                        <Inicio />
                    </Route>

                    <Route exact path="/login">
                        <LoginForm />
                        <MenuPopUp />
                    </Route>
        
                    <Route exact path="/register">
                        <Registro />
                        <MenuPopUp />
                    </Route>
               
                    <Route exact path="/ventas">
                        <MCreacionVentas />
                        <MenuPopUp />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
