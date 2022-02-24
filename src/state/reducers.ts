import { Action, SchwordleState } from '../util/types';
import { ActionTypes, GameStates } from '../util/enums';

const letterPressedReducer = (state: SchwordleState, letter: string): SchwordleState => {
  let currentGuess = state.guessedWords[state.guessedWords.length - 1];

  if (currentGuess.length === 5) {
    return state;
  }

  return {
    ...state,
    guessedWords: [...state.guessedWords.slice(0, -1), currentGuess + letter],
  };
};

const deleteKeyPressedReducer = (state: SchwordleState): SchwordleState => {
  let currentGuess = state.guessedWords[state.guessedWords.length - 1];

  if (currentGuess.length === 0) {
    return state;
  }

  return {
    ...state,
    guessedWords: [...state.guessedWords.slice(0, -1), currentGuess.slice(0, -1)],
  };
};

const enterKeyPressedReducer = (state: SchwordleState): SchwordleState => {
  let currentGuess = state.guessedWords[state.guessedWords.length - 1];

  if (currentGuess.length < 5) {
    return state;
  }

  let newState = {
    ...state,
    guessedWords: [...state.guessedWords.slice(0, -1), currentGuess, ''],
  };

  for (let i = 0; i < 6; i++) {
    const guessedLetter = currentGuess[i];

    if (!state.targetWord.includes(guessedLetter)) {
      newState.notFoundLetters.add(guessedLetter);
    }

    if (guessedLetter === state.targetWord[i]) {
      newState.correctLetters.add(guessedLetter);
      newState.wrongLocationLetters.delete(guessedLetter);
    }

    if (state.targetWord.includes(guessedLetter) && !state.correctLetters.has(guessedLetter)) {
      newState.wrongLocationLetters.add(guessedLetter);
    }
  }

  if (currentGuess === state.targetWord) {
    newState.gameState = GameStates.Won;
  } else if (newState.guessedWords.length === 7) {
    newState.gameState = GameStates.Lost;
  }

  return newState;
};

const combinedReducer = (state: SchwordleState, action: Action): SchwordleState => {
  if (state.gameState !== GameStates.InProgress) {
    return state;
  }

  switch (action.type) {
    case ActionTypes.LetterPressed:
      return letterPressedReducer(state, action.payload!);
    case ActionTypes.EnterKeyPressed:
      return enterKeyPressedReducer(state);
    case ActionTypes.DeleteKeyPressed:
      return deleteKeyPressedReducer(state);
    default:
      return state;
  }
};

export default combinedReducer;
