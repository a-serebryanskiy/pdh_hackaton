import {Component, OnInit} from '@angular/core';
import {Region} from './region';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {RegionsState} from '../../store/clusters/reducer';
import {selectRegions, selectSelectedDimension} from '../../store/clusters/selectors';
import {REG_TILE_SIDE_SIZE} from './constants';
import {MatDialog} from '@angular/material/dialog';
import {RegionInfoDialogComponent} from './region-info-dialog/region-info-dialog.component';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-region-map',
    templateUrl: './regions-map.component.html',
    styleUrls: ['./regions-map.component.scss'],
    animations: [
        trigger(
            'inOutAnimation',
            [
                transition(
                    ':enter',
                    [
                        style({opacity: 0}),
                        animate('0.5s ease-out',
                            style({opacity: 1}))
                    ]
                ),
                transition(
                    ':leave',
                    [
                        style({opacity: 1}),
                        animate('0.5s ease-in',
                            style({opacity: 0}))
                    ]
                )
            ]
        )
    ]
})
export class RegionsMapComponent implements OnInit {
    regions$: Observable<Region[]>;
    selectedDimension$: Observable<string>;
    readonly regTileSideSize: number = REG_TILE_SIDE_SIZE;
    lastColIndex: number;

    constructor(
        private store: Store<RegionsState>,
        private dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this.regions$ = this.store.select(selectRegions);
        this.selectedDimension$ = this.store.select(selectSelectedDimension);
    }

    openRegionDialog(region: Region): void {
    }
}
