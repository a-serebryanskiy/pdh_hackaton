import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pandemic-trud';

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon('star', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/star01.svg'));
    iconRegistry.addSvgIcon('pik', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/sumpik01.svg'));
    // iconRegistry.addSvgIcon('knife', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/knife.svg'));
  }
}
