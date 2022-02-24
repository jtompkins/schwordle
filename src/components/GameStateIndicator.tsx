import { useContext } from 'react';
import { GameStates } from '../util/enums';
import SchwordleContext from '../state/SchwordleContext';

const GameStateIndicator = () => {
  const {
    state: { gameState },
  } = useContext(SchwordleContext);

  if (gameState === GameStates.Lost) {
    return <div className="GameStateIndicator--lost">You lost. Sorry. :( </div>;
  }

  if (gameState === GameStates.Won) {
    return <div className="GameStateIndicator--won">You won! Congrats! :)</div>;
  }

  return null;
};

export default GameStateIndicator;
