import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-layout',
  standalone: true,
  templateUrl: './my-layout.component.html',
  styleUrls: ['./my-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MyLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
