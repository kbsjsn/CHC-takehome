import React from 'react';
import { ModalGameData } from '../store/modal/types';
import { openModal } from '../store/modal/actions';

interface GameProps {
  gameData: ModalGameData;
  openModal: typeof openModal;
}

const Game: React.FunctionComponent<GameProps> = ({ gameData, openModal }) => (
  <div className="gameContainer" onClick={() => openModal(gameData)}>
    <h3>{gameData.Name}</h3>
    <div className="nameInfoContainer">
      <img src={`/images/${gameData.ID}.png`} alt={`${gameData.Name} icon`} />
      <ul className="gameInfoList">
        {
          gameData.SupportsAddons ? 
            <li><strong>Supports Add Ons: Yes</strong></li>
            : <li className="noSupport">Supports Add Ons: No</li>
        }
        {
          gameData.SupportsVoice ? 
            <li><strong>Supports Voice: Yes</strong></li>
            : <li className="noSupport">Supports Voice: No</li>
        }
      </ul>
    </div>
  </div>
);

export default Game;