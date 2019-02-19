import { Component, OnInit } from '@angular/core';
import { TileService } from './../tile.service';
import { Tile } from './../tile';

@Component({
  selector: 'app-crossword-grid',
  templateUrl: './crossword-grid.component.html',
  styleUrls: ['./crossword-grid.component.css']
})
export class CrosswordGridComponent implements OnInit {

  // words[i] correlates to clues[i]
  private words = ["Direction", "HermannLemp", "elijanney",
   "network", "imap", "boolean", "blockchain", "spoofing", "encryption", "peertopeer",
 "flowchart", "boundary", "Evolution", "Protocol", "optoelectronics",
 "Superconductivity", "photovoltaic", "EdmondBecquerel", "powertower", "england"];
  private clues = ["Vector quantities have a _______",
"He is credited as the inventor of the modern system of diesel electric traction co-ordination and control",
"The inventor of the modern knuckle coupler",
"A collection of computers connected together",
"Protocol for receiving email",
"A datatype used to hold one of two types",
"Distributed ledger, decentralized are terms used in respect to which technology",
"A website that successfully masquerades as another by falsifying data and is thereby treated as a trusted system by a user or another program",
"Public and symmetric are types of _____",
"A network where there is no dedicated server, all nodes are equal",
"Graphical representation of an algorithm",
"Test data that is on the edge between valid and invalid data.",
"Long term _______ is a standard for wireless broadband communication",
"A set of rules for how computers should communicate",
"Name of technology whereby a glass fiber carries as much information as hundreds of copper wires",
"Loss of electrical resistance can lead to _______",
"_______ is greek for light-electricity",
"The first person to realize that sunlight could produce an electric current in a solid material in 1839",
"A type of concentrating solar thermal power systems",
"The first full scale locomotive engine was setup in this country"];

  tiles : Tile[];

  constructor(private tileService: TileService) { }

  ngOnInit() {
    this.getTiles();
  }

  getTiles() {
    this.tiles = this.tileService.getTiles();
  }

  updateBox(response, tile) {
    console.log(response);
    console.log(tile);
    let responseTile: Tile = {
      rows: tile.rows,
      cols: tile.cols,
      editable: tile.editable,
      color: tile.color,
      value: tile.value,
      response: response
    }
    this.tileService.updateResponses(responseTile);
  }
}
