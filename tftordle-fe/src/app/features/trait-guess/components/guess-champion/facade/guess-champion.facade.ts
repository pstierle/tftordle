import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Select } from '@ngxs/store';
import { BaseFacade } from 'src/app/shared/facades/base.facade';
import { TraitGuessSelectors } from '../../../state/trait-guess.selectors';
import { Champion } from 'src/app/shared/models/champion';

@Injectable()
export class GuessChampionFacade extends BaseFacade {
  @Select(TraitGuessSelectors.getGuessChampion)
  public guessChampion$!: Observable<Champion | null>;

  constructor(actions$: Actions) {
    super(actions$);
  }

  public init(): void {
    this.initBase();
  }
}
