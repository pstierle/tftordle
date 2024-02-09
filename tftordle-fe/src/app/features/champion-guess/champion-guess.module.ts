import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionGuessRoutingModule } from './champion-guess-routing.module';
import { ChampionGuessComponent } from './components/champion-guess/champion-guess.component';
import { ResultsComponent } from './components/results/results.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChampionSearchComponent } from './components/champion-search/champion-search.component';
import { FormsModule } from '@angular/forms';
import { NumberMatchComponent } from './components/number-match/number-match.component';
import { TraitMatchComponent } from './components/trait-match/trait-match.component';
import { StatClueComponent } from './components/stat-clue/stat-clue.component';

@NgModule({
  declarations: [
    ChampionGuessComponent,
    ResultsComponent,
    ChampionSearchComponent,
    NumberMatchComponent,
    TraitMatchComponent,
    StatClueComponent,
  ],
  imports: [
    CommonModule,
    ChampionGuessRoutingModule,
    SharedModule,
    FormsModule,
  ],
})
export class ChampionGuessModule {}
