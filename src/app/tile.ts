export interface Tile {
  color: string;
  cols: number;
  rows: number;
  editable: boolean;
  value?: string;
  response?: string;
  placeholder?: string;
}
