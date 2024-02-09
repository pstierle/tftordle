import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GuessChampionFacade } from './facade/guess-champion.facade';

@Component({
  selector: 'app-guess-champion',
  templateUrl: './guess-champion.component.html',
  styleUrls: ['./guess-champion.component.scss'],
  providers: [GuessChampionFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuessChampionComponent implements OnInit {
  public guessChampion$ = this.guessChampionFacade.guessChampion$;
  public isLoading$ = this.guessChampionFacade.isLoading$;

  constructor(private guessChampionFacade: GuessChampionFacade) {}

  ngOnInit(): void {
    this.guessChampionFacade.init();
  }
}
