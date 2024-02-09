import { Champion } from './champion';

export enum NumberMatch {
  EXACT = 'exact',
  HIGHER = 'higher',
  LOWER = 'lower',
}

export enum SomeMatch {
  EXACT = 'exact',
  WRONG = 'wrong',
  SOME = 'some',
}

export interface ChampionGuessCheck {
  guess: Champion;
  correct: boolean;
  set: NumberMatch;
  cost: NumberMatch;
  range: NumberMatch;
  traits: SomeMatch;
  gender: SomeMatch
}
