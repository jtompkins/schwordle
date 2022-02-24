import React, { useContext } from 'react';
import SchwordleContext from '../state/SchwordleContext';
import { LetterTypes, ActionTypes } from '../util/enums';
import KeyboardKey from './KeyboardKey';

const KEYBOARD_KEYS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

const Keyboard = () => {
  const {
    state: { correctLetters, wrongLocationLetters, notFoundLetters },
    dispatch,
  } = useContext(SchwordleContext);

  const rows = KEYBOARD_KEYS.map(row => {
    return row.map((key, index) => {
      let keyType = LetterTypes.Empty;

      if (correctLetters.has(key)) {
        keyType = LetterTypes.Correct;
      } else if (wrongLocationLetters.has(key)) {
        keyType = LetterTypes.WrongLocation;
      } else if (notFoundLetters.has(key)) {
        keyType = LetterTypes.NotFound;
      }

      return (
        <KeyboardKey
          key={index}
          type={keyType}
          onClick={() => dispatch({ type: ActionTypes.LetterPressed, payload: key })}
        >
          {key}
        </KeyboardKey>
      );
    });
  });

  rows[2].unshift(
    <KeyboardKey type={LetterTypes.Wide} onClick={() => dispatch({ type: ActionTypes.EnterKeyPressed })}>
      ENTER
    </KeyboardKey>,
  );

  rows[2].push(
    <KeyboardKey type={LetterTypes.Wide} onClick={() => dispatch({ type: ActionTypes.DeleteKeyPressed })}>
      DEL
    </KeyboardKey>,
  );

  return (
    <div className="Keyboard">
      {rows.map((row, index) => (
        <div key={index} className="Keyboard__row">
          {row}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
