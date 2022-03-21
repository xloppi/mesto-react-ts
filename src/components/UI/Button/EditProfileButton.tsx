import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { StyledButton, StyledEditProfileButton } from "./Button.styles";

const EditProfileButton = () => {
  const dispatch = useDispatch();


  const handleEditProfileClick = () => {
    dispatch({ type: 'MODAL_SHOW', modalType: 'EDIT_PROFILE' });
  };

  return (
    <StyledEditProfileButton
      onClick={handleEditProfileClick}
    ></StyledEditProfileButton>
  );
};

export default EditProfileButton;
