/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';

import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'ng-ar-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    const selectedTab = this.tabs.find(tab => tab.selected);
    if(!selectedTab) {
      this.tabs.first.selected = true;
    }
  }

  onSelectTab(tab:TabComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    tab.selected = true;
  }

}