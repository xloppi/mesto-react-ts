import { useDispatch } from "react-redux";
import { StyledAddPlaceButton } from "./Button.styles";

const AddPlaceButton = () => {
  const dispatch = useDispatch();

  const handleAddPlaceClick = () => {
    dispatch({ type: "MODAL_SHOW", modalType: "ADD_PLACE" });
  };

  return (
    <StyledAddPlaceButton onClick={handleAddPlaceClick}></StyledAddPlaceButton>
  );
};

export default AddPlaceButton;
