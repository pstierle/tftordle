import { ChampionGuessStateModel } from '../features/champion-guess/state/champion-guess-state.model';
import { TraitGuessStateModel } from './../features/trait-guess/state/trait-guess-state.model';

export interface AppStateModel {
  traitGuessState: TraitGuessStateModel;
  championGuessState: ChampionGuessStateModel;
}
