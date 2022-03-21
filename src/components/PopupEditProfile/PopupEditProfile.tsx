import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { PopupInput } from "../PopupWithForm/PopupWithForm.styles";

const PopupEditProfile = () => {
  const { modalType } = useTypedSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: "MODAL_HIDE", modalType: null });
  };

  return (
    <PopupWithForm
      isOpen={modalType === "EDIT_PROFILE"}
      title="Редактировать профиль"
      onSubmit={() => console.log("СОЗДАНО")}
      buttonTitle="Создать"
      onClose={handleClose}
    >
      <PopupInput />
      <PopupInput />
    </PopupWithForm>
  );
};

export default PopupEditProfile;
