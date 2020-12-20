import {Component, Input, OnInit} from '@angular/core';
import {Region} from '../region';
import {REG_TILE_SIDE_SIZE} from '../constants';

@Component({
  selector: 'app-reg-tile',
  templateUrl: './reg-tile.component.html',
  styleUrls: ['./reg-tile.component.scss']
})
export class RegTileComponent implements OnInit {
  readonly regTileSideSize: number = REG_TILE_SIDE_SIZE;

  @Input()
  region: Region;
  @Input()
  showMaxMonthIcon: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
