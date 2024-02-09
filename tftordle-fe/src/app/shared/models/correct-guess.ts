import { GuessType } from '../enums/guess-type.enum';

export interface CorrectGuess {
  id: string;
  user_id: string;
  date: string;
  guess_type: GuessType;
}
