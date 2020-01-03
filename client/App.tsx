import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppState } from './store';

import './styles.css';

import { GameData, GamesState } from './store/games/types';
import { loadGames, filterByQuery } from './store/games/actions';

import { ModalState, ModalGameData } from './store/modal/types';
import { openModal, closeModal } from './store/modal/actions';

import Game from './components/Game';
import GameModal from './components/GameModal';
import Search from './components/Search';

// helper function - input array of game data, output game components
const displayGames = (gamesData: Array<GameData> | null | undefined, openModalParam: typeof openModal) => (
  gamesData ? gamesData.map(
    ({ Name, ID, SupportsAddons, SupportsVoice, Slug, GameFiles, CategorySections } , index) => {
      const gameData: ModalGameData = { 
        Name, ID, SupportsAddons, SupportsVoice, Slug, 
        GameFileNames: GameFiles.map(({ FileName }) => FileName), 
        CatSectionNames: CategorySections.map(({ Name }) => Name) 
      }
      return <Game 
        gameData={gameData}
        openModal={openModalParam}
        key={index}
      />
  }) :
  null
);

interface AppProps {
  closeModal: typeof closeModal;
  openModal: typeof openModal;
  games: GamesState;
  modal: ModalState;
  loadGames: any;
  filterByQuery: any;
}

const App: React.FunctionComponent<AppProps> = (props) => { 

  useEffect(
    () => {
      props.loadGames();
      const timerId = setInterval(props.loadGames, 5000);
      return () => {
        clearInterval(timerId);
      }
    }, 
    []
  );
  
  const { filterByQuery, openModal, closeModal } = props;
  const { data, filteredGames } = props.games;
  const { modalIsOpen, modalGameData } = props.modal;

  return (
    <div className="container">
      <header>
        <h1>Twitch Games Data</h1>
      </header>
      {
        data === null ? (
          <div className="loadingContainer">
            <div>Loading...</div>
          </div>
        ) : (
          data === undefined ? (
            <div className="loadingContainer">
              <div>Error: Not found</div>
            </div>
          ) : (
            <>
              <Search filterByQuery={filterByQuery} />
              <section className="gamesContainer">
                {
                  filteredGames ? 
                  displayGames(filteredGames, openModal) :
                  displayGames(data, openModal)
                }
              </section>
            </>
          )
        )
      }
      {
        modalGameData && 
        <GameModal 
          isOpen={modalIsOpen} 
          onRequestClose={closeModal} 
          modalGameData={modalGameData} 
        />
      }
    </div>
  )
};

const mapStateToProps = (state: AppState) => ({
  games: state.games,
  modal: state.modal
});

export default connect(
  mapStateToProps, 
  { loadGames, filterByQuery, openModal, closeModal }
)(App);