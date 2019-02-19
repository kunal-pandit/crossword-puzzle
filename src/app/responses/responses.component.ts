import { Component, OnInit } from '@angular/core';
import { TileService } from './../tile.service';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit {

  constructor(private tileService: TileService) { }

  ngOnInit() {
  }

}
