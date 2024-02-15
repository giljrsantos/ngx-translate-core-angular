import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewsComponent } from '../src/app/card-news/card-news.component';
import { TranslateModule } from '@ngx-translate/core';

describe('CardNewsComponent', () => {
  let component: CardNewsComponent;
  let fixture: ComponentFixture<CardNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardNewsComponent],
      imports: [TranslateModule.forRoot()]
    });
    fixture = TestBed.createComponent(CardNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
