import { Injectable } from '@angular/core';
import { Observable, combineLatest, tap } from 'rxjs';
import { StateToken, State, Action, StateContext } from '@ngxs/store';
import { ChampionGuessStateModel } from './champion-guess-state.model';
import { ChampionGuessApiService } from '../services/champion-guess-api.service';
import { ChampionGuessCheck } from 'src/app/shared/models/champion-guess-check';
import {
  InitChampionGuess,
  CheckGuess,
  ResetQueryResults,
  QueryChampions,
  GetStatClue,
  GetVictoryData,
  GetIconClue,
} from './champion-guess.actions';

const CHAMPION_GUESS_STATE_TOKEN = new StateToken<ChampionGuessStateModel>(
  'championGuessState'
);

@State<ChampionGuessStateModel>({
  name: CHAMPION_GUESS_STATE_TOKEN,
  defaults: {
    lastGuessChampion: null,
    guessChecks: [],
    queryResults: [],
    statClue: null,
    correctGuessCount: 0,
    victoryData: null,
    iconClue: null,
  },
})
@Injectable()
export class ChampionGuessState {
  constructor(private readonly apiService: ChampionGuessApiService) {}

  @Action(InitChampionGuess)
  public initChampionGuess(ctx: StateContext<ChampionGuessStateModel>): any {
    return combineLatest([
      this.apiService.getLastGuessChampion(),
      this.apiService.getCorrectGuessCount(),
      this.apiService.getIconClue(ctx.getState().guessChecks.length + 1),
    ]).pipe(
      tap((data) => {
        ctx.patchState({
          lastGuessChampion: data[0],
          correctGuessCount: data[1].count,
          iconClue: data[2],
        });
      })
    );
  }

  @Action(GetVictoryData)
  public getVictoryData(ctx: StateContext<ChampionGuessStateModel>): any {
    return this.apiService.getVictoryData().pipe(
      tap((data) => {
        ctx.patchState({
          victoryData: data,
        });
      })
    );
  }

  @Action(GetIconClue)
  public getIconClue(ctx: StateContext<ChampionGuessStateModel>): any {
    return this.apiService
      .getIconClue(ctx.getState().guessChecks.length + 1)
      .pipe(
        tap((data) => {
          ctx.patchState({
            iconClue: data,
          });
        })
      );
  }

  @Action(GetStatClue)
  public getStatClue(
    ctx: StateContext<ChampionGuessStateModel>
  ): Observable<any> {
    return this.apiService.getStatClue().pipe(
      tap((data) => {
        ctx.patchState({
          statClue: data,
        });
      })
    );
  }

  @Action(CheckGuess)
  public checkGuess(
    ctx: StateContext<ChampionGuessStateModel>,
    action: CheckGuess
  ): Observable<ChampionGuessCheck> {
    return this.apiService
      .checkGuess({
        guessId: action.championId,
      })
      .pipe(
        tap((guessCheck) => {
          ctx.patchState({
            guessChecks: [...ctx.getState().guessChecks, guessCheck],
          });
        })
      );
  }

  @Action(ResetQueryResults)
  public resetQueryResults(ctx: StateContext<ChampionGuessStateModel>): any {
    ctx.patchState({
      queryResults: [],
    });
  }

  @Action(QueryChampions)
  public queryChampions(
    ctx: StateContext<ChampionGuessStateModel>,
    action: QueryChampions
  ): any {
    return this.apiService
      .queryChampions({
        query: action.query,
        alreadyGuessedIds: action.alreadyGuessedIds,
      })
      .pipe(
        tap((champions) => {
          ctx.patchState({
            queryResults: champions,
          });
        })
      );
  }
}
