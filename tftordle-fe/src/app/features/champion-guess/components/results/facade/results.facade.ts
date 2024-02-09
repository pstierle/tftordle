import { Injectable } from '@angular/core';
import { Actions, Select, Store } from '@ngxs/store';
import { BaseFacade } from 'src/app/shared/facades/base.facade';
import { Observable } from 'rxjs';
import { ChampionGuessSelectors } from '../../../state/champion-guess.selectors';
import { ChampionGuessCheck } from 'src/app/shared/models/champion-guess-check';

@Injectable()
export class ResultsFacade extends BaseFacade {
  @Select(ChampionGuessSelectors.getGuessChecks)
  public guessChecks$!: Observable<ChampionGuessCheck[]>;

  constructor(actions$: Actions, private store: Store) {
    super(actions$);
  }

  public init(): void {
    this.initBase();
  }
}
