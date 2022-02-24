import { SchwordleLetterProps } from '../util/types';
import { LetterTypes } from '../util/enums';

const SchwordleLetter = ({ type = LetterTypes.Empty, children }: SchwordleLetterProps) => {
  return <div className={`SchwordleLetter${type.toString()}`}>{children}</div>;
};

export default SchwordleLetter;
