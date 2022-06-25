import { Component, Input, OnInit } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'ng-ar-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.scss'],
})
export class FaInputComponent implements OnInit {
  @Input() icon: IconName = 'star';

  constructor() {}

  ngOnInit(): void {}
}
