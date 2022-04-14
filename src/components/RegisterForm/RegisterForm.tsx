import { Link } from "react-router-dom"
import { AuthContainer, AuthFieldset, AuthInput, AuthSubmit, AuthTitle } from "../AuthForm/AuthForm.styles"


const RegisterForm = () => {
    return (
    <AuthContainer>
      <AuthTitle>Регистрация</AuthTitle>
      <form>
        <AuthFieldset>
          <AuthInput />
          <AuthInput />
          <AuthSubmit>Зарегистрироваться</AuthSubmit>
        </AuthFieldset>
      </form>
      <p>Уже зарегестрированны? <Link to="/signin">Войти</Link></p>
    </AuthContainer>
    )
}

export default RegisterForm