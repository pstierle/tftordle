import { BehaviorSubject, Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions } from '@ngxs/store';
import { BaseFacade } from 'src/app/shared/facades/base.facade';

@Injectable()
export class VictoryFacade extends BaseFacade {
  public nextGuessesTimer$ = new BehaviorSubject<string>('');
  public championUpdateDisplayDate$!: Observable<string>;

  private counterIntervall: any = null;
  private secondsUntilGuessChampionUpdate$ = new BehaviorSubject<number>(0);

  constructor(actions$: Actions) {
    super(actions$);
  }

  public init(nextUpdateDate?: string): void {
    this.initBase();

    this.championUpdateDisplayDate$ =
      this.secondsUntilGuessChampionUpdate$.pipe(
        map((seconds) => {
          if (!seconds) {
            return '';
          }

          var h = Math.floor(seconds / 3600);
          var m = Math.floor((seconds % 3600) / 60);
          var s = Math.floor((seconds % 3600) % 60);

          return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${
            s < 10 ? '0' + s : s
          }`;
        })
      );
    const now = new Date();
    const dateUntilUpdate = new Date(nextUpdateDate ?? '');
    this.secondsUntilGuessChampionUpdate$.next(
      (dateUntilUpdate.getTime() - now.getTime()) / 1000
    );
    this.counterIntervall = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  public onDestroy(): void {
    if (!this.counterIntervall) {
      return;
    }
    clearInterval(this.counterIntervall);
  }

  private updateTimer(): void {
    this.secondsUntilGuessChampionUpdate$.next(
      this.secondsUntilGuessChampionUpdate$.value - 1
    );
  }
}
