import FormContainer from "../globalComponents/formContainer";
import HeaderForm from "../globalComponents/headerForm";
import InputForm from "../globalComponents/inputForm";
import ButtonForm from "../globalComponents/buttonForm";


const Registro = () => {
   
    return(
        <FormContainer>
       
            <HeaderForm>Registro de Usuarios</HeaderForm>

            <p>Correo</p>
            <InputForm id={"correo"} />

            <p>Nombre</p>
            <InputForm id={"nombre"} />
            
            <p>Apellido</p>
            <InputForm id={"apellido"} />
            
            <p>Id</p>
            <InputForm id={"id"} />
            
            <p>Contraseña</p>
            <InputForm id={"contraseña"} />

        
            <ButtonForm>Log in</ButtonForm>
            <ButtonForm>Conectate con tu cuenta Google</ButtonForm>

        </FormContainer>

    );
}


export default Registro;
