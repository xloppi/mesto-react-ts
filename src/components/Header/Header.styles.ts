import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 45px 0 40px;
  border-bottom: 1px solid rgba(84, 84, 84, 0.7);
`

export const Logo = styled.img`
  width: 142px;
  height: 33px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`
export const NavItem = styled(NavLink)`
  text-decoration: none;
  margin-left: 24px;
  &.active {
    color: #A9A9A9;
  }
`
