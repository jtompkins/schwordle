import React, { ReactNode } from 'react';
import { LetterTypes, ActionTypes, GameStates } from './enums';

export interface SchwordleLetterProps {
  type?: LetterTypes;
  children?: ReactNode;
  onClick?: any;
}

export interface Action {
  type: ActionTypes;
  payload?: string;
}

export interface SchwordleState {
  targetWord: string;
  guessedWords: string[];
  correctLetters: Set<string>;
  wrongLocationLetters: Set<string>;
  notFoundLetters: Set<string>;
  gameState: GameStates;
}

export interface SchwordleContext {
  state: SchwordleState;
  dispatch: React.Dispatch<Action>;
}
