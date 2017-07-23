import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MdProgressSpinnerModule } from '@angular/material';
import { TopNavComponent } from './top-nav/top-nav.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, TopNavComponent
      ],
      imports: [
        MdProgressSpinnerModule
      ]
    }).compileComponents();
  }));

  const title = 'We are working hard...';

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title '${title}'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(title);
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(title);
  }));
});
