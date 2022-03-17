import { FC } from "react";
import { isPropertySignature } from "typescript";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Popup, PopupCloseButton, PopupContainer, PopupFieldset, PopupSubmitButton, PopupTitle } from "./PopupWithForm.styles";

interface PopupWhitFormProps {
  isOpen: boolean;
  title: string;
  onSubmit: () => void;
  buttonTitle: string;
  onClose: () => void;
}

const PopupWithForm: FC<PopupWhitFormProps> = ({isOpen, title, onSubmit, buttonTitle, onClose, children}) => {
  const { modalType } = useTypedSelector(state => state.modal)
  console.log(modalType)
  return(
    <PopupContainer isOpen={isOpen}>
      <Popup>
        <PopupTitle>{title}</PopupTitle>
        <form>
          <PopupFieldset>
            {children}
          </PopupFieldset>
          <PopupSubmitButton onClick={onSubmit}>{buttonTitle}</PopupSubmitButton>
        </form>
        <PopupCloseButton onClick={onClose}></PopupCloseButton>
      </Popup>
    </PopupContainer>
  )
}

export default PopupWithForm;
