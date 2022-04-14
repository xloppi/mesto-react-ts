import { FC } from "react";
import { Link } from "react-router-dom";
import { AuthContainer, AuthFieldset, AuthInput, AuthSubmit, AuthTitle } from "./AuthForm.styles";

const AuthForm: FC = () => {
  return (
    <AuthContainer>
      <AuthTitle>Вход</AuthTitle>
      <form>
        <AuthFieldset>
          <AuthInput />
          <AuthInput />
          <AuthSubmit>Войти</AuthSubmit>
        </AuthFieldset>
      </form>
      <p><Link to="/signup">Зарегистрироваться</Link></p>
    </AuthContainer>
  )
}

export default AuthForm;
