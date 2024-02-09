import { Champion } from 'src/app/shared/models/champion';
import { LastGuessChampion } from 'src/app/shared/models/last-guess-champion';
import { Trait } from 'src/app/shared/models/trait';
import { TraitGuessCheck } from 'src/app/shared/models/trait-guess-check';
import { TraitGuessSameTraitClue } from 'src/app/shared/models/trait-guess-same-trait-clue';
import { TraitGuessStatClue } from 'src/app/shared/models/trait-guess-stat-clue';
import { VictoryData } from 'src/app/shared/models/victory-data';

export interface TraitGuessStateModel {
  lastGuessChampion: LastGuessChampion | null;
  guessChampion: Partial<Champion> | null;
  guessChecks: TraitGuessCheck[];
  sameTraitClue: TraitGuessSameTraitClue | null;
  statClue: TraitGuessStatClue | null;
  queryResults: Trait[];
  correctGuessCount: number;
  victoryData: VictoryData<Trait[]> | null;
}
