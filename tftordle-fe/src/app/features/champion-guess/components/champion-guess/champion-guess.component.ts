import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ChampionGuessFacade } from './facade/champion-guess.facade';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/shared/enums/app-routes.enum';
import { ButtonType } from 'src/app/shared/enums/button-type.enum';

@Component({
  selector: 'app-champion-guess',
  templateUrl: './champion-guess.component.html',
  styleUrls: ['./champion-guess.component.scss'],
  providers: [ChampionGuessFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChampionGuessComponent implements OnInit {
  public isLoading$ = this.facade.isLoading$;
  public isFinished$ = this.facade.isFinished$;
  public lastGuessChampion$ = this.facade.lastGuessChampion$;
  public correctGuessCount$ = this.facade.correctGuessCount$;
  public victoryData$ = this.facade.victoryData$;
  public guessCheckCount$ = this.facade.guessCheckCount$;
  public iconClue$ = this.facade.iconClueImage$;
  public buttonType = ButtonType;

  constructor(private facade: ChampionGuessFacade, private router: Router) {}

  public ngOnInit(): void {
    this.facade.init();
  }

  public openTraitGuess(): void {
    this.router.navigate(['/', AppRoutes.TRAIT_GUESS]);
  }
}
