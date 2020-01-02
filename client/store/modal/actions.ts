import { ModalGameData, OPEN_MODAL, CLOSE_MODAL, ModalActionTypes } from './types';

export const openModal = (gameData: ModalGameData): ModalActionTypes => ({
  type: OPEN_MODAL,
  payload: gameData
});

export const closeModal = (): ModalActionTypes => ({
  type: CLOSE_MODAL,
  payload: null
});
