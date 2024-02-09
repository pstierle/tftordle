import { takeUntil } from 'rxjs/operators';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Select, Store } from '@ngxs/store';
import { BaseFacade } from 'src/app/shared/facades/base.facade';
import { ChampionGuessSelectors } from '../../../state/champion-guess.selectors';
import { ChampionGuessStatClue } from 'src/app/shared/models/champion-guess-stat-clue';
import { GetStatClue } from '../../../state/champion-guess.actions';

@Injectable()
export class StatClueFacade extends BaseFacade {
  @Select(ChampionGuessSelectors.getStatClue)
  public statClue$!: Observable<ChampionGuessStatClue | null>;

  @Select(ChampionGuessSelectors.getWrongGuessCheckCount)
  private wrongGuessCheckCount$!: Observable<number>;

  public tryCounter$ = this.wrongGuessCheckCount$.pipe(
    map((wrongGuessCheckCount) => 3 - wrongGuessCheckCount)
  );

  constructor(actions$: Actions, private store: Store) {
    super(actions$);
  }

  public init(): void {
    this.initBase();
    this.observeLoadingActions([GetStatClue]);
    this.tryCounter$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((tryCounter) => {
        if (tryCounter === 0) {
          this.store.dispatch(new GetStatClue());
        }
      });
  }
}
