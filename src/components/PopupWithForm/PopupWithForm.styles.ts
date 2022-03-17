import styled from "styled-components";
import close from "../../images/close_icon.svg"

interface PopupProps {
  isOpen: null | boolean;
}

export const PopupContainer = styled.div<PopupProps>`
  display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #000000;
`
export const Popup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 430px;
  min-height: 100px;
  border-radius: 10px;
  padding: 36px;
  background-color: #ffffff;
`

export const PopupTitle = styled.h2`
  font-size: 24px;
  line-height: 29px;
  font-weight: 900;
  margin-bottom: 54px;
`

export const PopupFieldset = styled.fieldset`
  border: 0;
  margin-bottom: 48px;
`

export const PopupInput = styled.input`
  width: 100%;
  height: 27px;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`

export const PopupSubmitButton = styled.button`
  width: 100%;
  min-height: 50px;
  background-color: #000000;
  color: #ffffff;
  font-size: 18px;
  border: 0;
  border-radius: 2px;
`
export const PopupCloseButton = styled.button`
  position: absolute;
  background-color: initial;
  background-image: url(${close});
  background-size: cover;
  background-repeat: no-repeat;
  border: 0;
  top: -36px;
  right: -36px;
  width: 33px;
  height: 33px;
  cursor: pointer;

`
