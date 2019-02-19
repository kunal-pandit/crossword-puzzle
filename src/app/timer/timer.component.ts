import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from "rxjs";
import { TileService } from './../tile.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  private timer: Observable<number>;
  time: number;
  ssoEntered: boolean;

  private _clockSubscription: Subscription;

  constructor(private tileService: TileService) {
    this.timer = interval(1000);
  }

  ngOnInit() {
    this._clockSubscription = this.timer.subscribe(time => this.time = time);
    this.ssoEntered = true;
  }

  ngOnDestroy(): void {
    this._clockSubscription.unsubscribe();
  }

  onSubmit(ssoValue) {
    let correctResponseCount = 0;
    if(!ssoValue) {
      this.ssoEntered = false;
      console.log('SSO not entered');
    } else {
      correctResponseCount = this.tileService.calculateScore();
      console.log('Length : ' + correctResponseCount);
      console.log(ssoValue);
    }
  }
}
