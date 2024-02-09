import { Champion } from 'src/app/shared/models/champion';
import { ChampionGuessCheck } from 'src/app/shared/models/champion-guess-check';
import { ChampionGuessStatClue } from 'src/app/shared/models/champion-guess-stat-clue';
import { LastGuessChampion } from 'src/app/shared/models/last-guess-champion';
import { VictoryData } from 'src/app/shared/models/victory-data';

export interface ChampionGuessStateModel {
  lastGuessChampion: LastGuessChampion | null;
  guessChecks: ChampionGuessCheck[];
  queryResults: Champion[];
  statClue: ChampionGuessStatClue | null;
  correctGuessCount: number;
  victoryData: VictoryData<Champion> | null;
  iconClue: string | null;
}
