export interface ModalGameData {
  ID: number;
  Name: string;
  SupportsAddOns: boolean;
  SupportsVoice: boolean;
  Slug: string;
  GameFileNames: Array<string>;
  CatSectionNames: Array<string>;
};

// Describing the shape of modal's slice of state
export interface ModalState {
  modalIsOpen: boolean;
  modalGameData: ModalGameData | null;
};

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

interface OpenModalAction {
  type: typeof OPEN_MODAL;
  payload: ModalGameData;
}

interface CloseModalAction {
  type: typeof CLOSE_MODAL;
  payload: null;
}

export type ModalActionTypes = OpenModalAction | CloseModalAction;