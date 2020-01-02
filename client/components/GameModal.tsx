import React, { FunctionComponent } from 'react';
import Modal from 'react-modal';
import { ModalGameData } from '../store/modal/types';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid rgb(200, 200, 200)'
  },
}

interface GameModalProps {
  isOpen: boolean;
  modalGameData: ModalGameData;
  onRequestClose: () => void;
};

const GameModal: FunctionComponent<GameModalProps> = ({ 
    isOpen, 
    onRequestClose, 
    modalGameData: { ID, Name, SupportsAddOns, SupportsVoice, Slug, GameFileNames, CatSectionNames }, 
  }) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} >
    <div className="modalContainer">
      <h3>{Name}</h3>
      <div className="nameInfoContainer">
        <img src={`/images/${ID}.png`} alt={`${Name} icon`} />
        <ul>
          <li>Supports Add Ons: {SupportsAddOns ? <strong>Yes</strong> : <em>No</em>}</li>
          <li>Supports Voice: {SupportsVoice ? <strong>Yes</strong> : <em>No</em>}</li>
          <li>Slug: {Slug ? <ul><li><strong>{Slug}</strong></li></ul> : <em>None</em>} 
          </li>
          <li>
            File Names: {
              GameFileNames.length ? 
                <ul>
                  {GameFileNames.map((name, index) => <li key={index} ><strong>{name}</strong></li>)}
                </ul> 
                : <em>None</em>
            }
          </li>
          <li>
            Category Section Names: {
              CatSectionNames.length ? 
                <ul>
                  {CatSectionNames.map((name, index) => <li key={index} ><strong>{name}</strong></li>)}
                </ul> 
                : <em>None</em>
            }
          </li>
        </ul>
      </div>
    </div>
  </Modal>
);

export default GameModal;