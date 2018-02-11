import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <video width="100%" height="100%" preload="metadata" autoplay controls>
      <source src="https://firebasestorage.googleapis.com/v0/b/filestore-10146.appspot.com/o/FalconHeavyLaunch.mov.mp4?alt=media&token=007b2874-f4df-4abf-9b73-a71e5311b625" type="video/mp4">
    </video>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
