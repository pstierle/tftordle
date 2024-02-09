import { Observable, map, takeUntil } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Select, Store } from '@ngxs/store';
import { BaseFacade } from 'src/app/shared/facades/base.facade';
import { TraitGuessSelectors } from '../../../state/trait-guess.selectors';
import { LastGuessChampion } from 'src/app/shared/models/last-guess-champion';
import {
  GetVictoryData,
  InitTraitGuess,
} from '../../../state/trait-guess.actions';
import { Trait } from 'src/app/shared/models/trait';
import { VictoryData } from 'src/app/shared/models/victory-data';
import { TraitGuessCheck } from 'src/app/shared/models/trait-guess-check';

@Injectable()
export class TraitGuessFacade extends BaseFacade {
  @Select(TraitGuessSelectors.getLastGuessChampion)
  public lastGuessChampion$!: Observable<LastGuessChampion | null>;

  @Select(TraitGuessSelectors.isFinished)
  public isFinished$!: Observable<boolean>;

  @Select(TraitGuessSelectors.getCorrecctGuessCount)
  public correcctGuessCount$!: Observable<number>;

  @Select(TraitGuessSelectors.getVictoryData)
  public victoryData$!: Observable<VictoryData<Trait[]>>;

  @Select(TraitGuessSelectors.getGuessChecks)
  private guessChecks$!: Observable<TraitGuessCheck[]>;

  public guessCheckCount$ = this.guessChecks$.pipe(
    map((checks) => checks.length)
  );

  constructor(actions$: Actions, private store: Store) {
    super(actions$);
  }

  public init(): void {
    this.initBase();
    this.observeLoadingActions([InitTraitGuess]);
    this.store.dispatch(new InitTraitGuess());
    this.isFinished$.pipe(takeUntil(this.onDestroy$)).subscribe((finished) => {
      if (!!finished) {
        this.store.dispatch(new GetVictoryData());
      }
    });
  }
}
