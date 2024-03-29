import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clue',
  templateUrl: './clue.component.html',
  styleUrls: ['./clue.component.scss'],
})
export class ClueComponent {
  @Input()
  label!: string;

  @Input()
  counter!: number;

  @Input()
  loading!: boolean;
}
