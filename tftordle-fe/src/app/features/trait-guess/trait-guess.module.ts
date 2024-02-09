import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraitGuessRoutingModule } from './trait-guess-routing.module';
import { TraitGuessComponent } from './components/trait-guess/trait-guess.component';
import { GuessChampionComponent } from './components/guess-champion/guess-champion.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatClueComponent } from './components/stat-clue/stat-clue.component';
import { SameTraitClueComponent } from './components/same-trait-clue/same-trait-clue.component';
import { TraitSearchComponent } from './components/trait-search/trait-search.component';
import { ResultsComponent } from './components/results/results.component';

@NgModule({
  declarations: [
    TraitGuessComponent,
    GuessChampionComponent,
    StatClueComponent,
    SameTraitClueComponent,
    TraitSearchComponent,
    ResultsComponent,
  ],
  imports: [CommonModule, TraitGuessRoutingModule, SharedModule, FormsModule],
})
export class TraitGuessModule {}
