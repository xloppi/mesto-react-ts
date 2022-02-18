import { FC } from "react";
import { Logo, Nav, NavItem, StyledHeader } from "./Header.styles";
import logo from "../../images/logo.svg"

const Header: FC = () => {
    return(
        <StyledHeader>
            <Logo src={logo}/>
              <Nav>
                <p>email@email.ru</p>
                <NavItem to="/">Выйти</NavItem>
              </Nav>
        </StyledHeader>
    )
}

export default Header;
