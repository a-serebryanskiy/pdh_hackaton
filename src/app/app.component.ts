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
    iconRegistry.addSvgIcon('region_11', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/region_shapes/11.svg'));
    iconRegistry.addSvgIcon('region_63', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/region_shapes/63.svg'));
    // iconRegistry.addSvgIcon('knife', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/knife.svg'));
  }
}
