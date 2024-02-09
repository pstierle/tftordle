import { CorrectGuess } from './correct-guess';

export interface User {
  id: string;
  email: string;
  correctGuesses: CorrectGuess[];
}
