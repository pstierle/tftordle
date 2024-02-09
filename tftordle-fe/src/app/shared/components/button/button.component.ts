import { Component, Input } from '@angular/core';
import { ButtonType } from '../../enums/button-type.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  public type!: ButtonType;

  @Input()
  public isLoading: boolean = false;

  @Input()
  public disabled: boolean = false;
}
