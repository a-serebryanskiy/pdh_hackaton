export class Region {
  regionFullName: string;
  regionShortName: string;
  regionCode: number;
  latitude: number;
  longitude: number;
  unemployedByMonth: any = {};
  maxUnemployedForPeriod: number;
  totalUnemployedMonth: number;
  totalUnemployedForPeriod: number;
  rank: number;
  experience: number;
  experienceHeight: number;
  row: number;
  col: number;
  stars: string[];
  colorDepth: 'low' | 'medium-low' | 'medium' | 'medium-high' | 'high';

  constructor(
    regionShortName: string,
    regionFullName: string,
    regionCode: number,
    row: number,
    col: number
  ) {
    this.regionFullName = regionFullName;
    this.regionShortName = regionShortName;
    this.regionCode = regionCode;
    this.row = row;
    this.col = col;
  }
}
