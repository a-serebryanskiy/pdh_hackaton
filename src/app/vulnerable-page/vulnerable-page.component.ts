import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {RegionsState} from '../../store/clusters/reducer';
import {setDimension} from '../../store/clusters/actions';

@Component({
  selector: 'app-vulnerable-page',
  templateUrl: './vulnerable-page.component.html',
  styleUrls: ['./vulnerable-page.component.scss']
})
export class VulnerablePageComponent implements OnInit {

  constructor(
      private store: Store<RegionsState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(setDimension({dimension: 'vulnerable'}));
  }

}
