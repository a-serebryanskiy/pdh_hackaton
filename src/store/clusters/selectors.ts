import {createFeatureSelector, createSelector} from '@ngrx/store';
import {RegionsState} from './reducer';

const regionsSelector = createFeatureSelector('regions');

export const selectRegions = createSelector(
  regionsSelector,
  (state: RegionsState) => state.regions
);

export const selectSelectedDimension = createSelector(
    regionsSelector,
    (state: RegionsState) => state.selectedDimension
);

export const selectSelectedPeriod = createSelector(
    regionsSelector,
    (state: RegionsState) => state.selectedPeriod
);
