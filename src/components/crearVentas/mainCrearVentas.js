import {useContext} from 'react';
import { GlobalContext } from '../globalState';

import InputForm from "../globalComponents/inputForm";

const MCreacionVentas = () => {


    const [tema] = useContext(GlobalContext);

    return (
        <form className="form-container"style={{backgroundColor :tema.secundario,
                                                borderColor: tema.letraPrincipal, 
                                                color: tema.letraSecundaria}} >
            <h2 style={{color: tema.contraste}}>Registra tu Venta</h2>

            <p>ID del producto</p>
            < input className="form-input"
                style={{backgroundColor: tema.principal, color: tema.letraSecundaria}}
                type="text" id="IDProducto" name="IDProducto" />

            <p>Cantidad</p>
            <input className="form-input"
                style={{backgroundColor: tema.principal, color: tema.letraSecundaria}}  
                type="text" id="usuario" name="usuario" />
            
            <p>Estado de la venta</p>
            <InputForm id={"estadoVenta"} />  

            <p>Fecha de la venta</p>
            <InputForm id={"fechaVenta"} />  

            <p>Id del cliente</p>
            <InputForm id={"idCliente"} />  

            <button className="form-button"
                style={{backgroundColor: tema.contraste}}>
                Envia
            </button>
        </form>
    ) 
}

export default MCreacionVentas;
