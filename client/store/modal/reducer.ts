import { ModalState, OPEN_MODAL, CLOSE_MODAL, ModalActionTypes } from './types';

const initialState: ModalState = {
  modalIsOpen: false,
  modalGameData: null
};

export const modalReducer = (state = initialState, action: ModalActionTypes): ModalState => {
  switch(action.type) {
    case OPEN_MODAL: 
      return {
        ...state,
        modalIsOpen: true,
        modalGameData: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        modalGameData: null
      }
    default: 
      return state;
  }

}