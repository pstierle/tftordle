import { takeUntil } from 'rxjs/operators';
import { map, Observable } from 'rxjs';
import { GetStatClue } from './../../../state/trait-guess.actions';
import { Injectable } from '@angular/core';
import { Actions, Select, Store } from '@ngxs/store';
import { BaseFacade } from 'src/app/shared/facades/base.facade';
import { TraitGuessSelectors } from '../../../state/trait-guess.selectors';
import { TraitGuessStatClue } from 'src/app/shared/models/trait-guess-stat-clue';

@Injectable()
export class StatClueFacade extends BaseFacade {
  @Select(TraitGuessSelectors.getStatClue)
  public statClue$!: Observable<TraitGuessStatClue | null>;

  @Select(TraitGuessSelectors.getWrongGuessCheckCount)
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
