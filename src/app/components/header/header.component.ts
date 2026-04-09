import { Component, OnInit } from '@angular/core';
import { IONIC_COMPONENTS } from '../../shared/shared-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IONIC_COMPONENTS],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
