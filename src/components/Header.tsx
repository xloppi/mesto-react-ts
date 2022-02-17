import { FC } from "react";
import { Logo } from "./styles/Header.styles";
import logo from "../images/logo.svg"

const Header: FC = () => {
    return(
        <header>
            <Logo src={logo}/>
            <nav>
              <p>email@email.ru</p>
              <p>Выйти</p>
            </nav>
        </header>
    )
}

export default Header;
