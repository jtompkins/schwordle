import { SchwordleLetterProps } from '../util/types';
import { LetterTypes } from '../util/enums';

const KeyboardKey = ({ type = LetterTypes.Empty, children, onClick }: SchwordleLetterProps) => {
  return (
    <div className={`Keyboard__key${type.toString()}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default KeyboardKey;
