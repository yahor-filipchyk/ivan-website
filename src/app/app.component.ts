import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private videoIds = ['-fsM3er4NtM', 'BEoeKFuM2Ao', '_XjS8q8u8xI'];
  private videoToDisplayIdx = Math.floor(Math.random() * this.videoIds.length);

  videoToDisplay = `https://www.youtube.com/embed/${this.videoIds[this.videoToDisplayIdx]}`;

  constructor(public sanitizer: DomSanitizer) {}
}
