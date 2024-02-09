import { Trait } from './trait';

export interface Champion {
  id: string;
  name: string;
  set: string;
  cost: number;
  range: number;
  traits: Trait[];
  icon: string;
  gender: string;
}
