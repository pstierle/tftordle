import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastGuessChampionComponent } from './components/last-guess-champion/last-guess-champion.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { ClueComponent } from './components/clue/clue.component';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { CorrectGuessCountComponent } from './components/correct-guess-count/correct-guess-count.component';
import { VictoryComponent } from './components/victory/victory.component';
import { ShowAfterDirective } from './directives/show-after.directive';

@NgModule({
  declarations: [
    LastGuessChampionComponent,
    LoadingSpinnerComponent,
    CardComponent,
    ButtonComponent,
    ClueComponent,
    ClickOutsideDirective,
    CorrectGuessCountComponent,
    VictoryComponent,
    ShowAfterDirective
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    LastGuessChampionComponent,
    LoadingSpinnerComponent,
    CardComponent,
    ButtonComponent,
    ClueComponent,
    ClickOutsideDirective,
    CorrectGuessCountComponent,
    VictoryComponent,
    ShowAfterDirective
  ],
})
export class SharedModule {}
