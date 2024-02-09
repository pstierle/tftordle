import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TraitGuessFacade } from './facade/trait-guess.facade';
import { GuessType } from 'src/app/shared/enums/guess-type.enum';
import { VictoryData } from 'src/app/shared/models/victory-data';
import { Trait } from 'src/app/shared/models/trait';

@Component({
  selector: 'app-trait-guess',
  templateUrl: './trait-guess.component.html',
  styleUrls: ['./trait-guess.component.scss'],
  providers: [TraitGuessFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TraitGuessComponent implements OnInit {
  public isLoading$ = this.traitGuessFacade.isLoading$;
  public lastGuessChampion$ = this.traitGuessFacade.lastGuessChampion$;
  public correcctGuessCount$ = this.traitGuessFacade.correcctGuessCount$;
  public isFinished$ = this.traitGuessFacade.isFinished$;
  public victoryData$ = this.traitGuessFacade.victoryData$;
  public guessCheckCount$ = this.traitGuessFacade.guessCheckCount$;
  public guessType = GuessType;

  constructor(private traitGuessFacade: TraitGuessFacade) {}

  ngOnInit(): void {
    this.traitGuessFacade.init();
  }

  public getTraitNames(victoryData: VictoryData<Trait[]>): string {
    return victoryData.correctGuess.map((t) => t.name).join(', ');
  }
}
