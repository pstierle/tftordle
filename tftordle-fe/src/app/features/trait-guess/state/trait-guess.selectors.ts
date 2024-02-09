import { Injectable } from '@angular/core';
import { Selector } from '@ngxs/store';
import { Champion } from 'src/app/shared/models/champion';
import { TraitGuessCheck } from 'src/app/shared/models/trait-guess-check';
import { TraitGuessSameTraitClue } from 'src/app/shared/models/trait-guess-same-trait-clue';
import { TraitGuessStatClue } from 'src/app/shared/models/trait-guess-stat-clue';
import { TraitGuessStateModel } from './trait-guess-state.model';
import { TraitGuessState } from './trait-guess.state';
import { LastGuessChampion } from 'src/app/shared/models/last-guess-champion';
import { Trait } from 'src/app/shared/models/trait';
import { VictoryData } from 'src/app/shared/models/victory-data';

@Injectable()
export class TraitGuessSelectors {
  @Selector([TraitGuessState])
  public static getGuessChampion(
    state: TraitGuessStateModel
  ): Partial<Champion> | null {
    return state.guessChampion;
  }
  @Selector([TraitGuessState])
  public static getVictoryData(
    state: TraitGuessStateModel
  ): VictoryData<Trait[]> | null {
    return state.victoryData;
  }
  @Selector([TraitGuessState])
  public static getCorrecctGuessCount(state: TraitGuessStateModel): number {
    return state.correctGuessCount;
  }
  @Selector([TraitGuessState])
  public static getLastGuessChampion(
    state: TraitGuessStateModel
  ): LastGuessChampion | null {
    return state.lastGuessChampion;
  }
  @Selector([TraitGuessState])
  public static getGuessChecks(state: TraitGuessStateModel): TraitGuessCheck[] {
    return state.guessChecks;
  }
  @Selector([TraitGuessState])
  public static getWrongGuessCheckCount(state: TraitGuessStateModel): number {
    return state.guessChecks.filter((check) => !check.correct).length;
  }
  @Selector([TraitGuessState])
  public static getStatClue(
    state: TraitGuessStateModel
  ): TraitGuessStatClue | null {
    return state.statClue;
  }
  @Selector([TraitGuessState])
  public static getQueryResults(state: TraitGuessStateModel): Trait[] {
    return state.queryResults;
  }
  @Selector([TraitGuessState])
  public static getSameTraitClue(
    state: TraitGuessStateModel
  ): TraitGuessSameTraitClue | null {
    return state.sameTraitClue;
  }
  @Selector([TraitGuessState])
  public static isFinished(state: TraitGuessStateModel): boolean {
    return !!state.guessChecks.find((check) => check.finished);
  }
}
