import { takeUntil } from 'rxjs/operators';
import { Trait } from './../../../../../shared/models/trait';
import { Injectable } from '@angular/core';
import { Actions, Select, Store } from '@ngxs/store';
import { BaseFacade } from 'src/app/shared/facades/base.facade';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import {
  CheckGuess,
  QueryTraits,
  ResetQueryResults,
} from '../../../state/trait-guess.actions';
import { TraitGuessSelectors } from '../../../state/trait-guess.selectors';
import { TraitGuessCheck } from 'src/app/shared/models/trait-guess-check';

@Injectable()
export class TraitSearchFacade extends BaseFacade {
  @Select(TraitGuessSelectors.isFinished)
  public isFinished$!: Observable<boolean>;

  @Select(TraitGuessSelectors.getQueryResults)
  public queryResults$!: Observable<Trait[]>;

  @Select(TraitGuessSelectors.getGuessChecks)
  public guessChecks$!: Observable<TraitGuessCheck[]>;

  public selectedTrait$ = new BehaviorSubject<Trait | null>(null);
  private query$ = new BehaviorSubject<string>('');

  constructor(actions$: Actions, private store: Store) {
    super(actions$);
  }

  public init(): void {
    this.initBase();
    this.observeLoadingActions([QueryTraits]);
    this.query$
      .pipe(
        takeUntil(this.onDestroy$),
        filter((query) => !!query)
      )
      .subscribe((query) => {
        this.selectedTrait$.next(null);
        const guessChecks = this.store.selectSnapshot(
          TraitGuessSelectors.getGuessChecks
        );
        this.store.dispatch(
          new QueryTraits(
            query,
            guessChecks.map((check) => check.guess.id)
          )
        );
      });
  }

  public queryTraits(query: string): void {
    this.query$.next(query);
  }

  public selectTrait(trait: Trait): void {
    this.selectedTrait$.next(trait);
    this.resetResults();
  }

  public checkGuess(): void {
    const id = this.selectedTrait$.getValue()?.id;
    if (!!id) {
      this.selectedTrait$.next(null);
      this.store.dispatch(new CheckGuess(id));
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
