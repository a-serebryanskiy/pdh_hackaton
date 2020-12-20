import {Component, OnInit} from '@angular/core';
import {Region} from './region';
import {combineLatest, Observable} from 'rxjs';
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
        private store: Store<RegionsState>
    ) {
    }

    ngOnInit(): void {
        this.selectedDimension$ = this.store.select(selectSelectedDimension);
        this.regions$ = combineLatest([this.store.select(selectRegions), this.selectedDimension$]).pipe(
            map(([regions, selectedDimension]) => {
                return this.computeRegionsColors(regions, selectedDimension);
            })
        );
    }

    private computeRegionsColors(regions: Region[], selectedDimension: string): Region[] {
        const maxMatchAprilProportion = regions.map(region => region.unemployedByMonth[4] / region.unemployedByMonth[3])
            .reduce((acc, next) => next > acc ? next : acc, 0);
        const maxToTotalProportion = regions.map(region => (region.unemployedByMonth[4] + region.unemployedByMonth[5]) / region.totalUnemployedForPeriod)
            .reduce((acc, next) => next > acc ? next : acc, 0);
        console.log(maxToTotalProportion);
        const step = maxToTotalProportion / 5;
        console.log(step * 1);
        console.log(step * 2);
        console.log(step * 3);
        console.log(step * 4);

        return [...regions].map(region => {
            const regionCopy = {
                ...region
            };

            switch (selectedDimension) {
                case 'march/april': {
                    const marchGrowth = region.unemployedByMonth[4];
                    const aprilGrowth = region.unemployedByMonth[3];
                    const proportion = marchGrowth / aprilGrowth;
                    this.setColorDepthFromProportion(proportion, maxMatchAprilProportion, regionCopy);
                    break;
                }
                case 'stability': {
                    const proportion = (region.unemployedByMonth[4] + region.unemployedByMonth[5]) /
                        region.totalUnemployedForPeriod;
                    regionCopy.stars = [];
                    for (let i = 0; i < region.rank; i += (85 / 5)) {
                        regionCopy.stars.push('');
                    }
                    this.setColorDepthFromProportion(proportion, maxToTotalProportion, regionCopy);
                    break;
                }
                case 'vulnerable': {
                    regionCopy.experienceHeight = this.regTileSideSize * region.experience;
                    this.setColorDepthFromProportion(region.experience, 1, regionCopy);
                }
            }
            return regionCopy;
        });
    }

    private setColorDepthFromProportion(proportion: number,
                                        maxProportion: number,
                                        regionCopy: Region) {
        if (proportion / maxProportion < 0.2) {
            regionCopy.colorDepth = 'low';
        } else if (proportion / maxProportion < 0.4) {
            regionCopy.colorDepth = 'medium-low';
        } else if (proportion / maxProportion < 0.6) {
            regionCopy.colorDepth = 'medium';
        } else if (proportion / maxProportion < 0.8) {
            regionCopy.colorDepth = 'medium-high';
        } else {
            regionCopy.colorDepth = 'high';
        }
    }

    openRegionDialog(region: Region): void {
    }
}
