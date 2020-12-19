import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Region} from '../region';

@Component({
  selector: 'app-region-info-dialog',
  templateUrl: './region-info-dialog.component.html',
  styleUrls: ['./region-info-dialog.component.scss']
})
export class RegionInfoDialogComponent implements OnInit {

  @ViewChild('regionShape')
  regionShape: ElementRef;
  region: Region;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { region: Region, regionName: string }
  ) { }

  ngOnInit(): void {
    this.region = this.data.region;
  }

  act(): void {
    console.log(this.regionShape);
  }
}
