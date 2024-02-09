import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ChampionSearchFacade } from './facade/champion-search.facade';
import { ButtonType } from 'src/app/shared/enums/button-type.enum';
import { Champion } from 'src/app/shared/models/champion';

@Component({
  selector: 'app-champion-search',
  templateUrl: './champion-search.component.html',
  styleUrls: ['./champion-search.component.scss'],
  providers: [ChampionSearchFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChampionSearchComponent implements OnInit {
  public buttonType = ButtonType;
  public isLoading$ = this.facade.isLoading$;
  public isFinished$ = this.facade.isFinished$;
  public queryResults$ = this.facade.queryResults$;
  public selectedChampion$ = this.facade.selectedChampion$;

  public query: string = '';

  constructor(private facade: ChampionSearchFacade) {}

  ngOnInit(): void {
    this.facade.init();
  }

  public handleChange(): void {
    this.facade.queryChampions(this.query);
  }

  public selectChampion(champion: Champion): void {
    this.facade.selectChampion(champion);
    this.query = '';
  }

  public checkGuess(): void {
    this.facade.checkGuess();
  }

  public handleClickOutside(): void {
    this.query = '';
    this.facade.handleClickOutside();
  }
}
