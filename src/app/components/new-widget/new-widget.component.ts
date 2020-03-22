import { Component, OnInit, ComponentFactory } from '@angular/core';
import { WidgetListService } from "../../services/widget-list.service";
import { ClockComponent } from "../clock/clock.component";
@Component({
  selector: 'app-new-widget',
  templateUrl: './new-widget.component.html',
  styleUrls: ['./new-widget.component.scss']
})
export class NewWidgetComponent implements OnInit {

  constructor(private widgets_service: WidgetListService) { }

  ngOnInit() {
  }

  public create_new_widget() {
    console.log('button pressed')
    this.widgets_service.widgets.push("clock")
    this.widgets_service.widgets.forEach(element => {
    });
  }

}

