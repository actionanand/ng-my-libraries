/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList, TemplateRef } from '@angular/core';

import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'ng-ar-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  @Input() headerTemplate!: TemplateRef<unknown>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    const selectedTab = this.tabs.find(tab => tab.selected);
    if(!selectedTab && this.tabs.first) {
      this.tabs.first.selected = true;
    }
  }

  onSelectTab(tab:TabComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    tab.selected = true;
  }

  get tabsContext() {
    return {
      tabs: this.tabs
    }
  }

  // this is for the external html template (to know the selected one)
  get tabSelected() {
    let selectedTab = this.tabs.find(tab => tab.selected);

    if(!selectedTab && this.tabs.first) {
      this.tabs.first.selected = true;
      selectedTab = this.tabs.first; 
    }
    return selectedTab;
  }

}