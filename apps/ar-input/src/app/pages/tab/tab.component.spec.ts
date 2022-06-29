import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TabPanelComponent } from '@ng-ar/tab';

import { TabComponent } from './tab.component';

// describe('TabComponent', () => {
//   let component: TabComponent;
//   let fixture: ComponentFixture<TabComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [TabComponent],
//     }).compileComponents();

//     fixture = TestBed.createComponent(TabComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('TabComponent', () => {
  let component: TabComponent,
      fixture: ComponentFixture<TabComponent>,
      el: DebugElement,
      tabPanel: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
          declarations: [
            TabComponent
          ],
          imports:[TabPanelComponent]
      }).compileComponents();
  });

  beforeEach(() => {

      fixture = TestBed.createComponent(TabComponent);
      component = fixture.debugElement.componentInstance;
      el = fixture.debugElement;
      tabPanel = el.query(By.css('#tab-panel'));

      fixture.detectChanges();

  });

  it('should create the test application', waitForAsync(() => {
    expect(component).toBeTruthy();
  }));


  it('should find only one tab inside the tab container', waitForAsync(() => {

      const tabs = tabPanel.queryAll(By.css('.tab'));

      expect(tabs).toBeTruthy();
      expect(tabs.length).toBe(1);
  }));


  it('should find the Contact tab button marked as active', waitForAsync(() => {

      const selectedButton = tabPanel.query(
          By.css('.tab-panel-buttons li.selected')).nativeElement;

      expect(selectedButton).toBeTruthy();
      expect(selectedButton.textContent).toContain("Contact");

  }));


  it('should display the Contacts tab', waitForAsync(() => {

      const contactEmail = tabPanel.query(By.css('.contact-email'));

      expect(contactEmail).toBeTruthy();

  }));


  it('should switch to the Login Tab', waitForAsync(() => {

      const tabButtons = tabPanel.queryAll(By.css('.tab-panel-buttons li'));

      tabButtons[0].nativeElement.click();

      fixture.detectChanges();

      const loginEmail = tabPanel.query(By.css('.login-email'));
      expect(loginEmail).toBeTruthy();

      const selectedButton = tabPanel.query(
          By.css('.tab-panel-buttons li.selected')).nativeElement;

      expect(selectedButton).toBeTruthy();
      expect(selectedButton.textContent).toContain("Login");

  }));
});