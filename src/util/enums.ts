export enum LetterTypes {
  Empty = '',
  NotFound = '--not-found',
  WrongLocation = '--wrong-location',
  Correct = '--correct',
  Wide = '--wide',
  Guess = '--guess',
}

export enum ActionTypes {
  EnterKeyPressed,
  DeleteKeyPressed,
  LetterPressed,
}

export enum GameStates {
  Won,
  Lost,
  InProgress,
}
