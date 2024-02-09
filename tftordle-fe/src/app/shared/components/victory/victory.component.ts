import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { VictoryFacade } from './facade/victory.facade';
import { Observable } from 'rxjs';
import { ButtonType } from 'src/app/shared/enums/button-type.enum';
import { Router } from '@angular/router';
import { VictoryData } from '../../models/victory-data';
import { Champion } from '../../models/champion';
import { Trait } from '../../models/trait';

@Component({
  selector: 'app-victory',
  templateUrl: './victory.component.html',
  styleUrls: [],
  providers: [VictoryFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VictoryComponent implements OnInit, OnDestroy {
  @Input()
  public victoryData!: VictoryData<Champion> | VictoryData<Trait[]>;

  @Input()
  public guessCheckCount!: number | null;

  public buttonType = ButtonType;

  public get displayDate$(): Observable<string> {
    return this.facade.championUpdateDisplayDate$;
  }

  constructor(private facade: VictoryFacade, private router: Router) {}

  public ngOnInit(): void {
    this.facade.init(this.victoryData.nextUpdateDate);
  }

  public ngOnDestroy(): void {
    this.facade.onDestroy();
  }
}
