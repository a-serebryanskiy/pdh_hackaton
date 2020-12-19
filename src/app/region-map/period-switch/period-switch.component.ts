import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {RegionsState} from '../../../store/clusters/reducer';
import {selectSelectedDimension, selectSelectedPeriod} from '../../../store/clusters/selectors';
import {setDimension, setPeriod} from '../../../store/clusters/actions';

@Component({
  selector: 'app-period-switch',
  templateUrl: './period-switch.component.html',
  styleUrls: ['./period-switch.component.scss']
})
export class PeriodSwitchComponent implements OnInit {
  selectedPeriod$: Observable<string>;

  constructor(
      private store: Store<RegionsState>
  ) { }

  ngOnInit(): void {
    this.selectedPeriod$ = this.store.select(selectSelectedPeriod);
  }

  changePeriod(period: string): void {
    this.store.dispatch(setPeriod({period}));
  }
}
