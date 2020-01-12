import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprofComponent } from './updateprof.component';

describe('UpdateprofComponent', () => {
  let component: UpdateprofComponent;
  let fixture: ComponentFixture<UpdateprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
