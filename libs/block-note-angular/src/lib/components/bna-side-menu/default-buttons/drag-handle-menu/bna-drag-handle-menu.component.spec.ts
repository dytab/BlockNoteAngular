import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BnaDragHandleMenuComponent } from './bna-drag-handle-menu.component';

xdescribe('DragHandleMenuComponent', () => {
  let component: BnaDragHandleMenuComponent;
  let fixture: ComponentFixture<BnaDragHandleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnaDragHandleMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BnaDragHandleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
