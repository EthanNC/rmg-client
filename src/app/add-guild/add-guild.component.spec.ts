import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuildComponent } from './add-guild.component';

describe('AddGuildComponent', () => {
  let component: AddGuildComponent;
  let fixture: ComponentFixture<AddGuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
