import { ChampionGuessStateModel } from './champion-guess-state.model';
import { Injectable } from '@angular/core';
import { Selector } from '@ngxs/store';
import { Champion } from 'src/app/shared/models/champion';
import { LastGuessChampion } from 'src/app/shared/models/last-guess-champion';
import { ChampionGuessState } from './champion-guess.state';
import { ChampionGuessCheck } from 'src/app/shared/models/champion-guess-check';
import { ChampionGuessStatClue } from 'src/app/shared/models/champion-guess-stat-clue';
import { VictoryData } from 'src/app/shared/models/victory-data';

@Injectable()
export class ChampionGuessSelectors {
  @Selector([ChampionGuessState])
  public static getCorrecctGuessCount(state: ChampionGuessStateModel): number {
    return state.correctGuessCount;
  }
  @Selector([ChampionGuessState])
  public static getLastGuessChampion(
    state: ChampionGuessStateModel
  ): LastGuessChampion | null {
    return state.lastGuessChampion;
  }
  @Selector([ChampionGuessState])
  public static getVictoryData(
    state: ChampionGuessStateModel
  ): VictoryData<Champion> | null {
    return state.victoryData;
  }
  @Selector([ChampionGuessState])
  public static getGuessChecks(
    state: ChampionGuessStateModel
  ): ChampionGuessCheck[] {
    return state.guessChecks;
  }
  @Selector([ChampionGuessState])
  public static getIconClue(state: ChampionGuessStateModel): string | null {
    return state.iconClue;
  }
  @Selector([ChampionGuessState])
  public static getStatClue(
    state: ChampionGuessStateModel
  ): ChampionGuessStatClue | null {
    return state.statClue;
  }
  @Selector([ChampionGuessState])
  public static getQueryResults(state: ChampionGuessStateModel): Champion[] {
    return state.queryResults;
  }
  @Selector([ChampionGuessState])
  public static getWrongGuessCheckCount(
    state: ChampionGuessStateModel
  ): number {
    return state.guessChecks.filter((check) => !check.correct).length;
  }
  @Selector([ChampionGuessState])
  public static isFinished(state: ChampionGuessStateModel): boolean {
    return !!state.guessChecks.find((check) => check.correct);
  }
}
