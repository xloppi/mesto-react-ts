enum ModalTypes {
  EDIT_PROFILE = 'EDIT_PROFILE',
  ADD_PLACE = 'ADD_PLACE',
  EDIT_AVATAR = 'EDIT_AVATAR',
}

enum ModalActionTypes {
  MODAL_SHOW = 'MODAL_SHOW',
  MODAL_HIDE = 'MODAL_HIDE',
}

interface ModalState {
  modalType: null | ModalTypes
}

const initialState: ModalState = {
  modalType: null,
}

interface ModalAction {
  type: ModalActionTypes,
  modalType: ModalTypes,
}

export const modalReducer = (state = initialState, action: ModalAction): ModalState => {
  switch(action.type) {
    case ModalActionTypes.MODAL_SHOW:
      return { modalType: action.modalType}
    case ModalActionTypes.MODAL_HIDE:
      return initialState
    default:
      return state
  }
}
