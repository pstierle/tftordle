import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SameTraitClueFacade } from './facade/same-trait-clue.facade';

@Component({
  selector: 'app-same-trait-clue',
  templateUrl: './same-trait-clue.component.html',
  styleUrls: ['./same-trait-clue.component.scss'],
  providers: [SameTraitClueFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SameTraitClueComponent implements OnInit {
  public tryCounter$ = this.sameTraitClueFacade.tryCounter$;
  public isLoading$ = this.sameTraitClueFacade.isLoading$;
  public sameTraitClue$ = this.sameTraitClueFacade.sameTraitClue$;

  constructor(private sameTraitClueFacade: SameTraitClueFacade) {}

  public ngOnInit(): void {
    this.sameTraitClueFacade.init();
  }
}
