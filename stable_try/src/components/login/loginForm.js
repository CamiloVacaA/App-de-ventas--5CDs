import FormContainer from "../globalComponents/formContainer";
import HeaderForm from "../globalComponents/headerForm";
import InputForm from "../globalComponents/inputForm";
import ButtonForm from "../globalComponents/buttonForm";

const LoginForm = () => {

    return(
        <FormContainer>
       
            <HeaderForm>Inicia Sesion</HeaderForm>

            <p>Correo</p>
            <InputForm id={"correo"} />


            <p>Contraseña</p>
            <InputForm id={"contraseña"} />

        
            <ButtonForm>Log in</ButtonForm>
            <ButtonForm>Conectate con tu cuenta Google</ButtonForm>

        </FormContainer>
    )
}

export default LoginForm;

