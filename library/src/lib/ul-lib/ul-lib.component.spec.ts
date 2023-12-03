import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UlLibComponent } from './ul-lib.component';

describe('UlLibComponent', () => {
  let component: UlLibComponent;
  let fixture: ComponentFixture<UlLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UlLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UlLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
