import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { interval, Subscription } from 'rxjs';



@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  counter = interval(1000);
  seconds = 0;


  subscription: Subscription;
  

  public clock_play() {
    console.log("button")
    this.subscription = this.counter.subscribe(
      x => this.seconds += 1,
      err => console.error(err));
  }

  public clock_pause() {
    this.subscription.unsubscribe()
  }

  
}
