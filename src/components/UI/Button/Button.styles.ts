import styled from "styled-components";
import editAvatar from "../../../images/edit-avatar-button.svg";
import addButton from "../../../images/profile__add-button.svg";

export const StyledButton = styled.button`
  border: 1px solid #ffffff;
  outline: none;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const StyledEditProfileButton = styled(StyledButton)`
  width: 24px;
  height: 24px;
  background-image: url(${editAvatar});
  background-size: 10px 10px;
`;

export const StyledAddPlaceButton = styled(StyledButton)`
  width: 150px;
  height: 50px;
  background-image: url(${addButton});
  background-size: 22px 22px;
  border-radius: 2px;
  margin-left: auto;
`;
