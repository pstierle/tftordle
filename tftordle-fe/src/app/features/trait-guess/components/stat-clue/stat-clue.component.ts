import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StatClueFacade } from './facade/stat-clue.facade';

@Component({
  selector: 'app-stat-clue',
  templateUrl: './stat-clue.component.html',
  styleUrls: ['./stat-clue.component.scss'],
  providers: [StatClueFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatClueComponent implements OnInit {
  public tryCounter$ = this.statClueFacade.tryCounter$;
  public statClue$ = this.statClueFacade.statClue$;
  public isLoading$ = this.statClueFacade.isLoading$;

  constructor(private statClueFacade: StatClueFacade) {}

  public ngOnInit(): void {
    this.statClueFacade.init();
  }
}
