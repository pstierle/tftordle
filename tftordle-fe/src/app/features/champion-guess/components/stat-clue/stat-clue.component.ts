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
  public tryCounter$ = this.facade.tryCounter$;
  public statClue$ = this.facade.statClue$;
  public isLoading$ = this.facade.isLoading$;

  constructor(private facade: StatClueFacade) {}

  ngOnInit(): void {
    this.facade.init();
  }
}
