import { Injectable } from '@angular/core';
import { Tile } from './tile';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class TileService {

  responses: any;

  constructor() { }

  getTiles(): Tile[] {
    let tiles: Tile[] = [];
    // let tiles: Tile[] = [
    //   {color: 'while', editable: true, rows: 0, cols: 0},
    //   {color: 'black', editable: false, rows: 0, cols: 0},
    //   {color: 'white', editable: true, rows: 0, cols: 0},
    //   {color: 'black', editable: false, rows: 0, cols: 0},
    // ];
    let grid = this.getGrid();
    let tileIndex = 0;
    for (let i=0; i<grid.length; i++) {
      let row = grid[i];
      for (let j=0; j<row.length; j++) {
        let value = row[j];
        let isEditable = value?true:false;
        let color = value?'white':'black';
        tiles.push({
          color: color,
          editable: isEditable,
          rows: i,
          cols: j,
          value: row[j]
        });
      }
    }
    // this.responses = tiles;
    this.responses = tiles.map(x => Object.assign({}, x));
    return tiles;
  }

  updateResponses(responseTile) {
    console.log(responseTile.rows +',' + responseTile.cols)
    let idx = _.findIndex(this.responses, {'rows': responseTile.rows, 'cols': responseTile.cols})
    this.responses[idx] = responseTile;
    console.log(idx);
    console.log(this.responses);
  }

  getResponses() {
    return this.responses;
  }

  calculateScore():number {
    console.log(this.responses);
    let correctResponses = _.filter(this.responses, function (res) {
      return res.value === res.response;
    });
    console.log('correct responses');
    console.log(correctResponses);
    let length = correctResponses?correctResponses.length:0;
    return length;
  }

  getGrid(): any {
    let tiles = [
      [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,'f',null,null,null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,'l',null,null,null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null,null,null,null,null,'b','o','o','l','e','a','n',null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,'e',null,null,null,null,null,null,null,null,null,'w',null,null,null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,'d',null,null,null,null,null,null,null,null,null,'c',null,null,null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,'m',null,null,null,null,null,null,null,null,null,'h',null,null,null,null,'e',null,null,null,null,null,null,null],
      [null,'p',null,null,null,null,'o',null,null,null,null,null,null,null,'i','m','a','p',null,null,null,'v',null,null,'b',null,null,null,null],
      ['h','e','r','m','a','n','n','l','e','m','p',null,null,null,null,null,'r',null,null,null,null,'o',null,null,'o',null,null,null,null],
      [null,'e',null,null,null,null,'d',null,null,null,null,'d','i','r','e','c','t','i','o','n',null,'l',null,null,'u',null,null,null,null],
      [null,'r',null,null,null,null,'b',null,null,null,'e',null,null,null,null,null,null,null,'p',null,null,'u',null,null,'n',null,null,null,null],
      [null,'t',null,'s','u','p','e','r','c','o','n','d','u','c','t','i','v','i','t','y',null,'t',null,null,'d',null,null,null,null],
      [null,'o',null,null,null,null,'c',null,null,null,'c',null,null,null,null,null,null,null,'o',null,null,'i',null,null,'a',null,null,null,null],
      [null,'p',null,null,null,null,'q',null,null,null,'r',null,null,null,null,'p','o','w','e','r','t','o','w','e','r',null,null,null,null],
      [null,'e',null,null,null,null,'u',null,null,null,'y',null,null,null,null,null,null,null,'l',null,null,'n',null,null,'y',null,null,null,null],
      [null,'e',null,null,null,null,'e',null,null,null,'p',null,null,null,null,null,null,null,'e',null,null,null,null,null,null,null,null,null,null],
      [null,'r',null,null,null,null,'r',null,null,null,'t',null,null,'b','l','o','c','k','c','h','a','i','n',null,null,null,null,null,null],
      [null,null,null,null,null,null,'e',null,null,null,'i',null,'p',null,null,null,null,null,'t',null,null,null,'e','n','g','l','a','n','d'],
      [null,null,null,null,null,null,'l',null,null,null,'o',null,'r',null,null,null,null,null,'r',null,null,null,'t',null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null,'n',null,'o',null,null,null,null,null,'o',null,null,null,'w',null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null,null,null,'t',null,null,'e',null,null,'n',null,null,null,'o',null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,'p','h','o','t','o','v','o','l','t','a','i','c',null,null,'r',null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null,null,null,'c',null,null,'i',null,null,'c',null,null,null,'k',null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null,null,null,'o',null,null,'j',null,null,'s',null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null,null,null,'l',null,null,'a',null,null,null,null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,'n',null,null,null,null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,'s','p','o','o','f','i','n','g',null,null,null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,'e',null,null,null,null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,'y',null,null,null,null,null,null,null,null,null,null,null,null,null]
    ];
    return tiles;
  }
}
