import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {RegionsState} from '../../store/clusters/reducer';
import {setDimension} from '../../store/clusters/actions';

@Component({
  selector: 'app-stability-page-component',
  templateUrl: './stability-page.component.html',
  styleUrls: ['./stability-page.component.scss']
})
export class StabilityPageComponent implements OnInit {

  constructor(
      private store: Store<RegionsState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(setDimension({dimension: 'stability'}));
  }

}
