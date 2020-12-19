export class Region {
  regionFullName: string;
  regionShortName: string;
  regionCode: number;
  latitude: number;
  longitude: number;
  row: number;
  col: number;
  color: number;

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
