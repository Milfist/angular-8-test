import { async, TestBed } from '@angular/core/testing';
import { UiNewModule } from './ui-new.module';

describe('UiNewModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiNewModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiNewModule).toBeDefined();
  });
});
