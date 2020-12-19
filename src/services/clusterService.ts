import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CoronaCluster} from '../app/region-map/region';
import {map, tap} from 'rxjs/operators';
import {GoogleSheetsDbService} from 'ng-google-sheets-db';

class ValueRange {
  range: string;
  majorDimension: 'ROWS' | 'COLUMNS';
  values: any[][];
}

class Spreadshit {
  spreadsheetId: string;
  valueRanges: ValueRange[];
}

@Injectable({providedIn: 'root'})
export class ClusterService {
  private SPREADSHIT_ID = '1ZNTT-lyiGKoP63Z9AJMSJnR49FMB-DvsklMRLSJQJSY';
  constructor(private googleSheetsService: GoogleSheetsDbService) {
  }

  getClusters(): Observable<CoronaCluster[]> {
    return this.googleSheetsService.get<CoronaCluster>(
      this.SPREADSHIT_ID,
      '1',
      {
        regionName: 'region',
        place: 'place',
        city: 'city',
        link: 'ссылка',
        type: 'type',
        infected: 'infected',
        date: 'дата',
        regionCode: 'region_code',
        address: 'address',
        latitude: 'Latitude',
        longitude: 'Longitude'
      }
    );
  }
}
