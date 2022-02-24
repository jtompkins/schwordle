import { useReducer, createContext } from 'react';
import { GameStates } from '../util/enums';
import { SchwordleState, SchwordleContext } from '../util/types';
import reducer from './reducers';

const INITIAL_STATE: SchwordleState = {
  targetWord: 'REACT',
  guessedWords: [''],
  correctLetters: new Set<string>(),
  wrongLocationLetters: new Set<string>(),
  notFoundLetters: new Set<string>(),
  gameState: GameStates.InProgress,
};

const SchwordleContextInstance = createContext<SchwordleContext>({} as SchwordleContext);

export default SchwordleContextInstance;

export const SchwordleContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <SchwordleContextInstance.Provider value={{ state, dispatch }}>{props.children}</SchwordleContextInstance.Provider>
  );
};
