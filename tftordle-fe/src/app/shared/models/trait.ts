import { Champion } from './champion';

export interface Trait {
  id: string;
  name: string;
  champions: Champion[];
  icon: string;
}
