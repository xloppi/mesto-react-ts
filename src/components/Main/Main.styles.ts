import styled from "styled-components";
import avatarButton from "../../images/edit-avatar-button.svg"

export const StyledMain = styled.main`
  padding: 40px 0 66px;
`;

export const AvatarContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  &::before {
    content: '';
    background-color: #000;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s;
  }
  &:hover::before {
    opacity: 0.3;
  }
`

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const ChangeAvatarButton = styled.button`
  background: url(${avatarButton});
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  opacity: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: transparent;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`
