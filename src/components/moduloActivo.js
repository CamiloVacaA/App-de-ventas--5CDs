import LoginForm from "./login/loginForm";
import MCreacionVentas from "./crearVentas/mainCrearVentas";

const ModuloActivo = props => {

    switch(props.indice){
        case 0:   
            return <LoginForm />
        case 1:   
            return <MCreacionVentas />
        default:
            return null;
    }
}

export default ModuloActivo
