import { Component, OnInit } from '@angular/core';
import {RegionsState} from '../../../store/clusters/reducer';
import {Store} from '@ngrx/store';
import {setDimension} from '../../../store/clusters/actions';
import {Observable} from 'rxjs';
import {selectSelectedDimension} from '../../../store/clusters/selectors';

@Component({
  selector: 'app-dimension-switch',
  templateUrl: './dimension-switch.component.html',
  styleUrls: ['./dimension-switch.component.scss']
})
export class DimensionSwitchComponent implements OnInit {
  selectedDimension$: Observable<string>;

  constructor(
      private store: Store<RegionsState>
  ) { }

  ngOnInit(): void {
    this.selectedDimension$ = this.store.select(selectSelectedDimension);
  }
}
