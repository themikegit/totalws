import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CockpitPageComponent } from './cockpit-page.component';

describe('CockpitPageComponent', () => {
  let component: CockpitPageComponent;
  let fixture: ComponentFixture<CockpitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CockpitPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CockpitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
