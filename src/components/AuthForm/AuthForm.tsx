import { FC } from "react";
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
    </AuthContainer>
  )
}

export default AuthForm;
