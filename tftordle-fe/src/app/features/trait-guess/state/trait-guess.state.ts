import {
  CheckGuess,
  InitTraitGuess,
  GetSameTraitClue,
  GetStatClue,
  QueryTraits,
  ResetQueryResults,
  GetVictoryData,
} from './trait-guess.actions';
import { Injectable } from '@angular/core';
import { TraitGuessApiService } from '../services/trait-guess-api.service';
import { TraitGuessStateModel } from './trait-guess-state.model';
import { Observable, combineLatest, tap } from 'rxjs';
import { StateToken, State, Action, StateContext, Store } from '@ngxs/store';
import { TraitGuessCheck } from 'src/app/shared/models/trait-guess-check';
import { TraitGuessSameTraitClue } from 'src/app/shared/models/trait-guess-same-trait-clue';
import { TraitGuessStatClue } from 'src/app/shared/models/trait-guess-stat-clue';

const TRAIT_GUESS_STATE_TOKEN = new StateToken<TraitGuessStateModel>(
  'traitGuessState'
);

@State<TraitGuessStateModel>({
  name: TRAIT_GUESS_STATE_TOKEN,
  defaults: {
    lastGuessChampion: null,
    guessChampion: null,
    guessChecks: [],
    sameTraitClue: null,
    statClue: null,
    queryResults: [],
    correctGuessCount: 0,
    victoryData: null,
  },
})
@Injectable()
export class TraitGuessState {
  constructor(
    private readonly apiService: TraitGuessApiService,
    private store: Store
  ) {}

  @Action(InitTraitGuess)
  public initTraitGuess(
    ctx: StateContext<TraitGuessStateModel>
  ): Observable<any> {
    return combineLatest([
      this.apiService.getLastGuessChampion(),
      this.apiService.getCorrectGuessCount(),
      this.apiService.getGuessChampion(),
    ]).pipe(
      tap((data) => {
        ctx.patchState({
          lastGuessChampion: data[0],
          correctGuessCount: data[1].count,
          guessChampion: data[2],
        });
      })
    );
  }

  @Action(GetVictoryData)
  public getVictoryData(ctx: StateContext<TraitGuessStateModel>): any {
    return this.apiService.getVictoryData().pipe(
      tap((data) => {
        ctx.patchState({
          victoryData: data,
        });
      })
    );
  }

  @Action(ResetQueryResults)
  public resetQueryResults(ctx: StateContext<TraitGuessStateModel>): any {
    ctx.patchState({
      queryResults: [],
    });
  }

  @Action(QueryTraits)
  public queryTraits(
    ctx: StateContext<TraitGuessStateModel>,
    action: QueryTraits
  ): any {
    return this.apiService
      .queryTraits({
        query: action.query,
        alreadyGuessedIds: action.alreadyGuessedIds,
      })
      .pipe(
        tap((traits) => {
          ctx.patchState({
            queryResults: traits,
          });
        })
      );
  }

  @Action(CheckGuess)
  public checkGuess(
    ctx: StateContext<TraitGuessStateModel>,
    action: CheckGuess
  ): Observable<TraitGuessCheck> {
    return this.apiService
      .checkGuess({
        guessId: action.traitId,
        correctGuessChecksCount: ctx
          .getState()
          .guessChecks.filter((check) => check.correct).length,
      })
      .pipe(
        tap((guessCheck) => {
          ctx.patchState({
            guessChecks: [...ctx.getState().guessChecks, guessCheck],
          });
        })
      );
  }

  @Action(GetSameTraitClue)
  public getSameTraitClue(
    ctx: StateContext<TraitGuessStateModel>
  ): Observable<TraitGuessSameTraitClue> {
    return this.apiService.getSameTraitClue().pipe(
      tap((data) => {
        ctx.patchState({
          sameTraitClue: data,
        });
      })
    );
  }

  @Action(GetStatClue)
  public getStatClue(
    ctx: StateContext<TraitGuessStateModel>
  ): Observable<TraitGuessStatClue> {
    return this.apiService.getStatClue().pipe(
      tap((data) => {
        ctx.patchState({
          statClue: data,
        });
      })
    );
  }
}
