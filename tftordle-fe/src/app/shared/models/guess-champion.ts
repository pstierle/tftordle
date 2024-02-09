import { GuessType } from '../enums/guess-type.enum';
import { Champion } from './champion';

export interface GuessChampion {
  id: number;
  date: string;
  guessType: GuessType;
  champion: Champion;
}
