import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraitGuessComponent } from './components/trait-guess/trait-guess.component';

const routes: Routes = [
  {
    path: '',
    component: TraitGuessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraitGuessRoutingModule {}
