import {createAction, props} from '@ngrx/store';

export const setDimension = createAction('[Regions] set dimension', props<{dimension: string}>());

export const setPeriod = createAction('[Regions] set period', props<{period: string}>());
