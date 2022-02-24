import { useContext } from 'react';
import SchwordleLetter from './SchwordleLetter';
import SchwordleContext from '../state/SchwordleContext';
import { LetterTypes } from '../util/enums';

const SchwordleGrid = () => {
  const {
    state: { guessedWords, targetWord },
  } = useContext(SchwordleContext);

  const rows: any[] = [];

  for (let i = 0; i < 6; i++) {
    if (guessedWords.length === 0 || i >= guessedWords.length) {
      rows.push(emptyRow());
    } else {
      rows.push(rowFromWord(guessedWords[i], targetWord, i + 1 === guessedWords.length));
    }
  }

  return <div className="SchwordleGrid">{rows}</div>;
};

export default SchwordleGrid;

const rowFromWord = (guessedWord: string, targetWord: string, isCurrentGuess: boolean) => {
  const letters: any[] = [];

  for (let i = 0; i < 5; i++) {
    if (i >= guessedWord.length) {
      letters.push(<SchwordleLetter />);
      continue;
    }

    let letterType: LetterTypes = LetterTypes.NotFound;

    if (isCurrentGuess) {
      letterType = LetterTypes.Guess;
    } else if (targetWord[i] === guessedWord[i]) {
      letterType = LetterTypes.Correct;
    } else if (targetWord.includes(guessedWord[i])) {
      letterType = LetterTypes.WrongLocation;
    }

    letters.push(<SchwordleLetter type={letterType}>{guessedWord[i]}</SchwordleLetter>);
  }

  return <div className="SchwordleGrid__row">{letters}</div>;
};

const emptyRow = () => {
  return (
    <div className="SchwordleGrid__row">
      <SchwordleLetter />
      <SchwordleLetter />
      <SchwordleLetter />
      <SchwordleLetter />
      <SchwordleLetter />
    </div>
  );
};
