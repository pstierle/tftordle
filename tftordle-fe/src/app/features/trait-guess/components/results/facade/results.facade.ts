import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Select, Store } from '@ngxs/store';
import { BaseFacade } from 'src/app/shared/facades/base.facade';
import { TraitGuessSelectors } from '../../../state/trait-guess.selectors';
import { TraitGuessCheck } from 'src/app/shared/models/trait-guess-check';

@Injectable()
export class ResultsFacade extends BaseFacade {
  @Select(TraitGuessSelectors.getGuessChecks)
  public guessChecks$!: Observable<TraitGuessCheck[]>;

  constructor(actions$: Actions, private store: Store) {
    super(actions$);
  }

  public init(): void {
    this.initBase();
  }
}
