import { Component, OnInit } from '@angular/core';
import {RegionsState} from '../../store/clusters/reducer';
import {Store} from '@ngrx/store';
import {setDimension} from '../../store/clusters/actions';

@Component({
  selector: 'app-march-april',
  templateUrl: './march-april-page.component.html',
  styleUrls: ['./march-april-page.component.scss']
})
export class MarchAprilPageComponent implements OnInit {

  constructor(
      private store: Store<RegionsState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(setDimension({dimension: 'march/april'}));
  }

}
