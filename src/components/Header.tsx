import { FC } from "react";
import logo from '../images/logo.svg';


const Header: FC = () => {
    return(
        <header>
            <img src={logo} alt="logo"/>
            <nav>
              <p>email@email.ru</p>
              <p>Выйти</p>
            </nav>
        </header>
    )
}

export default Header;
