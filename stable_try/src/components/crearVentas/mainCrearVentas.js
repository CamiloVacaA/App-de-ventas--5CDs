import InputForm from "../globalComponents/inputForm";
import HeaderForm from '../globalComponents/headerForm';
import ButtonForm from '../globalComponents/buttonForm';
import FormContainer     from '../globalComponents/formContainer';
const MCreacionVentas = () => {


    return (

        <FormContainer>
            <HeaderForm>Registra tu venta</HeaderForm>

            <p>ID del producto</p>
            <InputForm id={"productId"} />  

            <p>Cantidad</p>
            <InputForm id={"Cantidad"} />  
            
            <p>Estado de la venta</p>
            <InputForm id={"estadoVenta"} />  

            <p>Fecha de la venta</p>
            <InputForm id={"fechaVenta"} />  

            <p>Id del cliente</p>
            <InputForm id={"idCliente"} />  
    
            <ButtonForm>Envia</ButtonForm>
        </FormContainer>
    ) 
}

export default MCreacionVentas;
