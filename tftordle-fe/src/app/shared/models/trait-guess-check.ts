import { Trait } from './trait';

export interface TraitGuessCheck {
  correct: boolean;
  finished: boolean;
  guess: Trait;
}
