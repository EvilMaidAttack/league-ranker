import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerProfileComponent } from './summoner-profile.component';

describe('SummonerProfileComponent', () => {
  let component: SummonerProfileComponent;
  let fixture: ComponentFixture<SummonerProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummonerProfileComponent]
    });
    fixture = TestBed.createComponent(SummonerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
