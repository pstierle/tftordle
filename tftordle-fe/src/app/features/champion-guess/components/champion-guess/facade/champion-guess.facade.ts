import { Observable, delay, map, takeUntil } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Select, Store } from '@ngxs/store';
import { BaseFacade } from 'src/app/shared/facades/base.facade';
import { LastGuessChampion } from 'src/app/shared/models/last-guess-champion';
import { ChampionGuessSelectors } from '../../../state/champion-guess.selectors';
import {
  GetIconClue,
  GetVictoryData,
  InitChampionGuess,
} from '../../../state/champion-guess.actions';
import { VictoryData } from 'src/app/shared/models/victory-data';
import { Champion } from 'src/app/shared/models/champion';
import { ChampionGuessCheck } from 'src/app/shared/models/champion-guess-check';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable()
export class ChampionGuessFacade extends BaseFacade {
  @Select(ChampionGuessSelectors.getLastGuessChampion)
  public lastGuessChampion$!: Observable<LastGuessChampion | null>;

  @Select(ChampionGuessSelectors.isFinished)
  public isFinished$!: Observable<boolean>;

  @Select(ChampionGuessSelectors.getCorrecctGuessCount)
  public correctGuessCount$!: Observable<number>;

  @Select(ChampionGuessSelectors.getVictoryData)
  public victoryData$!: Observable<VictoryData<Champion>>;

  @Select(ChampionGuessSelectors.getIconClue)
  private getIconClue$!: Observable<SafeUrl | null>;

  @Select(ChampionGuessSelectors.getGuessChecks)
  private guessChecks$!: Observable<ChampionGuessCheck[]>;

  public guessCheckCount$ = this.guessChecks$.pipe(
    map((checks) => checks.length)
  );

  public iconClueImage$ = this.getIconClue$.pipe(
    map((base64) =>
      this.sanitzer.bypassSecurityTrustResourceUrl(
        'data:image/png;base64,' + base64
      )
    )
  );

  constructor(
    actions$: Actions,
    private store: Store,
    private sanitzer: DomSanitizer
  ) {
    super(actions$);
  }

  public init(): void {
    this.initBase();
    this.observeLoadingActions([InitChampionGuess]);
    this.store.dispatch(new InitChampionGuess());
    // delay for results to show
    this.isFinished$
      .pipe(takeUntil(this.onDestroy$), delay(2500))
      .subscribe((finished) => {
        if (!!finished) {
          this.store.dispatch(new GetVictoryData());
        }
      });
  }
}
