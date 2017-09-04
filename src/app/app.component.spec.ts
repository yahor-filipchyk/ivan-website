import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdListModule } from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, TopNavComponent
      ],
      imports: [
        FlexLayoutModule, MdListModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should select one of the videos to display`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.videoToDisplayIdx).toBeLessThan(app.videoIds.length);
    expect(app.videoToDisplayIdx).toBeGreaterThanOrEqual(0);
  }));
});
