import { takeUntil } from 'rxjs/operators';
import { map, Observable } from 'rxjs';
import { GetSameTraitClue } from './../../../state/trait-guess.actions';
import { Injectable } from '@angular/core';
import { Actions, Select, Store } from '@ngxs/store';
import { BaseFacade } from 'src/app/shared/facades/base.facade';
import { TraitGuessSelectors } from '../../../state/trait-guess.selectors';
import { TraitGuessSameTraitClue } from 'src/app/shared/models/trait-guess-same-trait-clue';

@Injectable()
export class SameTraitClueFacade extends BaseFacade {
  @Select(TraitGuessSelectors.getSameTraitClue)
  public sameTraitClue$!: Observable<TraitGuessSameTraitClue | null>;

  @Select(TraitGuessSelectors.getWrongGuessCheckCount)
  private wrongGuessCheckCount$!: Observable<number>;

  public tryCounter$ = this.wrongGuessCheckCount$.pipe(
    map((wrongGuessCheckCount) => 5 - wrongGuessCheckCount)
  );

  constructor(actions$: Actions, private store: Store) {
    super(actions$);
  }

  public init(): void {
    this.initBase();
    this.observeLoadingActions([GetSameTraitClue]);
    this.tryCounter$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((tryCounter) => {
        if (tryCounter === 0) {
          this.store.dispatch(new GetSameTraitClue());
        }
      });
  }
}
