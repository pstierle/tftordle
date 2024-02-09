import { take, takeUntil } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Select, Store } from '@ngxs/store';
import { BaseFacade } from 'src/app/shared/facades/base.facade';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { ChampionGuessSelectors } from '../../../state/champion-guess.selectors';
import { Champion } from 'src/app/shared/models/champion';
import {
  CheckGuess,
  GetIconClue,
  QueryChampions,
  ResetQueryResults,
} from '../../../state/champion-guess.actions';

@Injectable()
export class ChampionSearchFacade extends BaseFacade {
  @Select(ChampionGuessSelectors.isFinished)
  public isFinished$!: Observable<boolean>;

  @Select(ChampionGuessSelectors.getQueryResults)
  public queryResults$!: Observable<Champion[]>;

  public selectedChampion$ = new BehaviorSubject<Champion | null>(null);
  private query$ = new BehaviorSubject<string>('');

  constructor(actions$: Actions, private store: Store) {
    super(actions$);
  }

  public init(): void {
    this.initBase();
    this.observeLoadingActions([QueryChampions]);
    this.query$
      .pipe(
        takeUntil(this.onDestroy$),
        filter((query) => !!query)
      )
      .subscribe((query) => {
        this.selectedChampion$.next(null);
        const guessChecks = this.store.selectSnapshot(
          ChampionGuessSelectors.getGuessChecks
        );
        this.store.dispatch(
          new QueryChampions(
            query,
            guessChecks.map((check) => check.guess.id)
          )
        );
      });
  }

  public queryChampions(query: string): void {
    this.query$.next(query);
  }

  public selectChampion(champion: Champion): void {
    this.selectedChampion$.next(champion);
    this.resetResults();
  }

  public checkGuess(): void {
    const id = this.selectedChampion$.getValue()?.id;
    if (!!id) {
      this.selectedChampion$.next(null);
      this.store
        .dispatch(new CheckGuess(id))
        .pipe(take(1))
        .subscribe(() => {
          this.store.dispatch(new GetIconClue());
        });
    }
  }

  public handleClickOutside(): void {
    this.resetResults();
  }

  private resetResults(): void {
    this.query$.next('');
    this.store.dispatch(new ResetQueryResults());
  }
}
