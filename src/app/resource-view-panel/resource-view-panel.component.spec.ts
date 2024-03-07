import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceViewPanelComponent } from './resource-view-panel.component';

describe('ResourceViewPanelComponent', () => {
  let component: ResourceViewPanelComponent;
  let fixture: ComponentFixture<ResourceViewPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResourceViewPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResourceViewPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
