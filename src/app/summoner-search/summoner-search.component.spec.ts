import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerSearchComponent } from './summoner-search.component';

describe('SummonerSearchComponent', () => {
  let component: SummonerSearchComponent;
  let fixture: ComponentFixture<SummonerSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummonerSearchComponent]
    });
    fixture = TestBed.createComponent(SummonerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
